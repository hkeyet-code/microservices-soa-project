const taskService = require(
    "../services/taskService"
);

const {
    sendEvent
} = require("../kafka/producer");

const getTasks = async (req, res) => {

    try {

        const tasks =
            await taskService.getAllTasks();

        res.json(tasks);

    } catch (error) {

        res.status(500).json({
            error: error.message
        });

    }

};

const createTask = async (req, res) => {

    try {

        const task =
            await taskService.createTask(
                req.body
            );

        await sendEvent(
            "task.created",
            {
                id: task.id,
                title: task.title,
                status: task.status
            }
        );

        console.log(
            "Kafka Event Sent: task.created"
        );

        res.status(201).json(task);

    } catch (error) {

        res.status(500).json({
            error: error.message
        });

    }

};

const completeTask = async (req, res) => {

    try {

        const task =
            await taskService.completeTask(
                req.params.id
            );

        await sendEvent(
            "task.completed",
            {
                id: task.id,
                title: task.title,
                status: task.status
            }
        );

        console.log(
            "Kafka Event Sent: task.completed"
        );

        res.json(task);

    } catch (error) {

        res.status(500).json({
            error: error.message
        });

    }

};

module.exports = {
    getTasks,
    createTask,
    completeTask
};