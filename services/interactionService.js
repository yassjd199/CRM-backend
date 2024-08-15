// services/interactionService.js
const { Interaction } = require('../models');

// Create a new interaction for a specific client
const createInteractionService = async (clientId, interactionData) => {
    return await Interaction.create({ ...interactionData, clientId });
};

// Get all interactions for a specific client
const getInteractionsByClientIdService = async (clientId) => {
    return await Interaction.findAll({ where: { clientId } });
};

// Get a specific interaction by ID for a specific client
const getInteractionByIdService = async (clientId, interactionId) => {
    return await Interaction.findOne({ where: { clientId, id: interactionId } });
};

// Update a specific interaction for a specific client
const updateInteractionService = async (clientId, interactionId, updatedData) => {
    const interaction = await Interaction.findOne({ where: { clientId, id: interactionId } });
    if (interaction) {
        return await interaction.update(updatedData);
    }
    return null;
};

// Delete a specific interaction for a specific client
const deleteInteractionService = async (clientId, interactionId) => {
    const interaction = await Interaction.findOne({ where: { clientId, id: interactionId } });
    if (interaction) {
        await interaction.destroy();
        return true;
    }
    return false;
};

module.exports = {
    createInteractionService,
    getInteractionsByClientIdService,
    getInteractionByIdService,
    updateInteractionService,
    deleteInteractionService,
};
