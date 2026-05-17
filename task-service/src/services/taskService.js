const Task = require("../models/Task");

const getAllTasks = async () => {

    return await Task.findAll();

};

const createTask = async (taskData) => {

    return await Task.create(taskData);

};

const completeTask = async (id) => {

    const task = await Task.findByPk(id);

    if (!task) {

        throw new Error("Task not found");

    }

    task.status = "completed";

    await task.save();

    return task;

};

module.exports = {
    getAllTasks,
    createTask,
    completeTask
};