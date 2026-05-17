const projectService = require(
    "../services/projectService"
);

const getProjects = async (req, res) => {

    try {

        const projects =
            await projectService.getAllProjects();

        res.json(projects);

    } catch (error) {

        res.status(500).json({
            error: error.message
        });

    }

};

const createProject = async (req, res) => {

    try {

        const project =
            await projectService.createProject(
                req.body
            );

        await sendEvent(
            "project.created",
            {
                id: project.id,
                name: project.name,
                status: project.status
            }
        );

        console.log(
            "Kafka Event Sent: project.created"
        );

        res.status(201).json(project);

    } catch (error) {

        res.status(500).json({
            error: error.message
        });

    }

};
const {
    sendEvent
} = require("../kafka/producer");
module.exports = {
    getProjects,
    createProject
};