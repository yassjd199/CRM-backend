// routes/taskRoutes.js
const express = require('express');
const {
    getTasksByInteractionIdController,
    createTaskController,
    updateTaskController,
    deleteTaskController
} = require('../controllers/TaskController');

const router = express.Router();

// Get tasks for a specific client
router.get('/interactions/:interactionId/tasks', getTasksByInteractionIdController);

// Create a new task for a specific client
router.post('/interactions/:interactionId/tasks', createTaskController);

// Update a task for a specific client
router.put('/interactions/:interactionId/tasks/:id', updateTaskController);

// Delete a task for a specific client
router.delete('/interactions/:interactionId/tasks/:id', deleteTaskController);

module.exports = router;
