// services/clientService.js
const { Client } = require('../models');

// Create a new client
const createClientService = async (clientData) => {
    return await Client.create(clientData);
};

// Get all clients
const getAllClientsService = async () => {
    return await Client.findAll();
};

// Get a client by ID
const getClientByIdService = async (clientId) => {
    return await Client.findByPk(clientId);
};

// Update a client
const updateClientService = async (clientId, updatedData) => {
    const client = await Client.findByPk(clientId);
    if (client) {
        return await client.update(updatedData);
    }
    return null;
};

// Delete a client
const deleteClientService = async (clientId) => {
    const client = await Client.findByPk(clientId);
    if (client) {
        await client.destroy();
        return true;
    }
    return false;
};

module.exports = {
    createClientService,
    getAllClientsService,
    getClientByIdService,
    updateClientService,
    deleteClientService,
};
