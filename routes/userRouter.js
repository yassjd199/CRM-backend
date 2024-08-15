// routes/clientRoutes.js
const express = require('express');
const {
    createClientController,
    getAllClientsController,
    getClientByIdController,
    updateClientController,
    deleteClientController
} = require('../controllers/ClientController');

const router = express.Router();

// Create a new client
router.post('/clients', createClientController);

// Get all clients
router.get('/clients', getAllClientsController);

// Get client by ID
router.get('/clients/:id', getClientByIdController);

// Update client by ID
router.put('/clients/:id', updateClientController);

// Delete client by ID
router.delete('/clients/:id', deleteClientController);

module.exports = router;
