// controllers/TaskController.js
const taskService = require('../services/taskService');

// Get tasks for a specific client
const getTasksByInteractionIdController = async (req, res) => {
    try {
        const tasks = await taskService.getTasksByInteracionIdService(req.params.interactionId);
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Create a new task
const createTaskController = async (req, res) => {
    try {
        const task = await taskService.createTaskService(req.params.interactionId, req.body);
        res.status(201).json(task);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update a task
const updateTaskController = async (req, res) => {
    try {
        const task = await taskService.updateTaskService(req.params.interactionId, req.params.id, req.body);
        if (task) {
            res.status(200).json(task);
        } else {
            res.status(404).json({ message: 'Task not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete a task
const deleteTaskController = async (req, res) => {
    try {
        const result = await taskService.deleteTaskService(req.params.interactionId, req.params.id);
        if (result) {
            res.status(204).send();
        } else {
            res.status(404).json({ message: 'Task not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getTasksByInteractionIdController,
    createTaskController,
    updateTaskController,
    deleteTaskController
};
