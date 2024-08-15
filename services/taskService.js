// services/taskService.js
const { Task } = require('../models');

// Create a new task for a specific client
const createTaskService = async (interactionId, taskData) => {
    return await Task.create({ ...taskData, interactionId });
};

// Get all tasks for a specific client
const getTasksByInteracionIdService = async (interactionId) => {
    return await Task.findAll({ where: { interactionId } });
};

// Get a specific task by ID for a specific client
const getTaskByIdService = async (interactionId, taskId) => {
    return await Task.findOne({ where: { interactionId, id: taskId } });
};

// Update a specific task for a specific client
const updateTaskService = async (clientId, taskId, updatedData) => {
    const task = await Task.findOne({ where: { interactionId, id: taskId } });
    if (task) {
        return await task.update(updatedData);
    }
    return null;
};

// Delete a specific task for a specific client
const deleteTaskService = async (interactionId, taskId) => {
    const task = await Task.findOne({ where: { interactionId, id: taskId } });
    if (task) {
        await task.destroy();
        return true;
    }
    return false;
};

module.exports = {
    createTaskService,
    getTasksByInteracionIdService,
    getTaskByIdService,
    updateTaskService,
    deleteTaskService,
};
