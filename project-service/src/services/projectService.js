const Project = require("../models/Project");

const getAllProjects = async () => {

    return await Project.findAll();

};

const createProject = async (projectData) => {

    return await Project.create(projectData);

};

module.exports = {
    getAllProjects,
    createProject
};