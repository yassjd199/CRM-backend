// controllers/ClientController.js
const clientService = require('../services/clientService');

// Create a new client
const createClientController = async (req, res) => {
    //console.debug(req.body);
    try {
        const client = await clientService.createClientService(req.body);

        res.status(201).json(client);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get all clients
const getAllClientsController = async (req, res) => {
    try {
        const clients = await clientService.getAllClientsService();
        res.status(200).json(clients);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get client by ID
const getClientByIdController = async (req, res) => {
    try {
        const client = await clientService.getClientByIdService(req.params.id);
        if (client) {
            res.status(200).json(client);
        } else {
            res.status(404).json({ message: 'Client not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update client
const updateClientController = async (req, res) => {
    try {
        const client = await clientService.updateClientService(req.params.id, req.body);
        if (client) {
            res.status(200).json(client);
        } else {
            res.status(404).json({ message: 'Client not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete client
const deleteClientController = async (req, res) => {
    try {
        const result = await clientService.deleteClientService(req.params.id);
        if (result) {
            res.status(204).send();
        } else {
            res.status(404).json({ message: 'Client not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    createClientController,
    getAllClientsController,
    getClientByIdController,
    updateClientController,
    deleteClientController
};
