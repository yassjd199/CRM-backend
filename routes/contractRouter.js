// routes/contractRoutes.js
const express = require('express');
const {
    getContractsByClientIdController,
    createContractController,
    updateContractController,
    deleteContractController
} = require('../controllers/contractController');

const router = express.Router();

// Get contracts for a specific client
router.get('/clients/:clientId/contracts', getContractsByClientIdController);

// Create a new contract for a specific client
router.post('/clients/:clientId/contracts', createContractController);

// Update a contract for a specific client
router.put('/clients/:clientId/contracts/:id', updateContractController);

// Delete a contract for a specific client
router.delete('/clients/:clientId/contracts/:id', deleteContractController);

module.exports = router;
