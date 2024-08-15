// controllers/InteractionController.js
const interactionService = require('../services/interactionService');

// Get interactions for a specific client
const getInteractionsByClientIdController = async (req, res) => {
    try {
        const interactions = await interactionService.getInteractionsByClientIdService(req.params.clientId);
        res.status(200).json(interactions);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Create a new interaction
const createInteractionController = async (req, res) => {
    try {
        const interaction = await interactionService.createInteractionService(req.params.clientId, req.body);
        res.status(201).json(interaction);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update an interaction
const updateInteractionController = async (req, res) => {
    try {
        const interaction = await interactionService.updateInteractionService(req.params.clientId, req.params.id, req.body);
        if (interaction) {
            res.status(200).json(interaction);
        } else {
            res.status(404).json({ message: 'Interaction not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete an interaction
const deleteInteractionController = async (req, res) => {
    try {
        const result = await interactionService.deleteInteractionService(req.params.clientId, req.params.id);
        if (result) {
            res.status(204).send();
        } else {
            res.status(404).json({ message: 'Interaction not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getInteractionsByClientIdController,
    createInteractionController,
    updateInteractionController,
    deleteInteractionController
};
