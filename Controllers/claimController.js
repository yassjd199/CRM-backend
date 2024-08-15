// controllers/ClaimController.js
const claimService = require('../services/claimService');

// Get claims for a specific client
const getClaimsByClientIdController = async (req, res) => {
    try {
        const claims = await claimService.getClaimsByClientIdService(req.params.clientId,req.params.contractId);
        res.status(200).json(claims);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Create a new claim
const createClaimController = async (req, res) => {
    try {
        const claim = await claimService.createClaimService(req.params.clientId,req.params.contractId, req.body);
        res.status(201).json(claim);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update a claim
const updateClaimController = async (req, res) => {
    try {
        const claim = await claimService.updateClaimService(req.params.clientId, req.params.contractId,req.params.id,req.body);
        if (claim) {
            res.status(200).json(claim);
        } else {
            res.status(404).json({ message: 'Claim not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete a claim
const deleteClaimController = async (req, res) => {
    try {
        const result = await claimService.deleteClaimService(req.params.clientId, req.params.clientId,req.params.id);
        if (result) {
            res.status(204).send();
        } else {
            res.status(404).json({ message: 'Claim not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getClaimsByClientIdController,
    createClaimController,
    updateClaimController,
    deleteClaimController
};
