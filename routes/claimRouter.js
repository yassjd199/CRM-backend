// routes/claimRoutes.js
const express = require('express');
const {
    getClaimsByClientIdController,
    createClaimController,
    updateClaimController,
    deleteClaimController
} = require('../controllers/ClaimController');

const router = express.Router();

// Get claims for a specific client
router.get('/clients/:clientId/claims/:contractId', getClaimsByClientIdController);

// Create a new claim for a specific client
router.post('/clients/:clientId/claims/:contractId', createClaimController);

// Update a claim for a specific client
router.put('/clients/:clientId/claims/:contractId/:id', updateClaimController);

// Delete a claim for a specific client
router.delete('/clients/:clientId/claims/:contractId/:id', deleteClaimController);

module.exports = router;
