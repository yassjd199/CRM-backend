// routes/interactionRoutes.js
const express = require('express');
const {
    getInteractionsByClientIdController,
    createInteractionController,
    updateInteractionController,
    deleteInteractionController
} = require('../controllers/InteractionController');

const router = express.Router();

// Get interactions for a specific client
router.get('/clients/:clientId/interactions', getInteractionsByClientIdController);

// Create a new interaction for a specific client
router.post('/clients/:clientId/interactions', createInteractionController);

// Update an interaction for a specific client
router.put('/clients/:clientId/interactions/:id', updateInteractionController);

// Delete an interaction for a specific client
router.delete('/clients/:clientId/interactions/:id', deleteInteractionController);

module.exports = router;
