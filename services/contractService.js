// services/contractService.js
const { Contract } = require('../models');

// Create a new contract for a specific client
const createContractService = async (clientId, contractData) => {
    return await Contract.create({ ...contractData, clientId });
};

// Get all contracts for a specific client
const getContractsByClientIdService = async (clientId) => {
    return await Contract.findAll({ where: { clientId } });
};

// Get a specific contract by ID for a specific client
const getContractByIdService = async (clientId, contractId) => {
    return await Contract.findOne({ where: { clientId,id: contractId } });
};

// Update a specific contract for a specific client
const updateContractService = async (clientId, contractId, updatedData) => {
    const contract = await Contract.findOne({ where: { clientId, id: contractId } });
    if (contract) {
        return await contract.update(updatedData);
    }
    return null;
};

// Delete a specific contract for a specific client
const deleteContractService = async (clientId, contractId) => {
    const contract = await Contract.findOne({ where: { clientId, id: contractId } });
    if (contract) {
        await contract.destroy();
        return true;
    }
    return false;
};

module.exports = {
    createContractService,
    getContractsByClientIdService,
    getContractByIdService,
    updateContractService,
    deleteContractService,
};
