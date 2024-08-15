// services/claimService.js
const { Claim } = require('../models');

// Create a new claim for a specific contract of a client
const createClaimService = async (clientId, contractId, claimData) => {
    return await Claim.create({ ...claimData, clientId, contractId });
};

// Get all claims for a specific contract of a client
const getClaimsByClientIdService = async (clientId, contractId) => {
    return await Claim.findAll({ where: { clientId, contractId } });
};

// Get a specific claim by ID for a specific contract of a client
const getClaimByIdService = async (clientId, contractId, claimId) => {
    return await Claim.findOne({ where: { clientId, contractId, id: claimId } });
};

// Update a specific claim for a specific contract of a client
const updateClaimService = async (clientId, contractId, claimId, updatedData) => {
    const claim = await Claim.findOne({ where: { clientId, contractId, id: claimId } });
    if (claim) {
        return await claim.update(updatedData);
    }
    return null;
};

// Delete a specific claim for a specific contract of a client
const deleteClaimService = async (clientId, contractId, claimId) => {
    const claim = await Claim.findOne({ where: { clientId, contractId, id: claimId } });
    if (claim) {
        await claim.destroy();
        return true;
    }
    return false;
};

module.exports = {
    createClaimService,
    getClaimsByClientIdService,
    getClaimByIdService,
    updateClaimService,
    deleteClaimService,
};
