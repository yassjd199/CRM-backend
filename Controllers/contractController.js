// controllers/ContractController.js
const contractService = require('../services/contractService');

// Get contracts for a specific client
const getContractsByClientIdController = async (req, res) => {
    try {
        const contracts = await contractService.getContractsByClientIdService(req.params.clientId);
        res.status(200).json(contracts);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Create a new contract
const createContractController = async (req, res) => {
    console.log(req.params,req.body);
    try {
        const contract = await contractService.createContractService(req.params.clientId, req.body);
        res.status(201).json(contract);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update a contract
const updateContractController = async (req, res) => {
    try {
        const contract = await contractService.updateContractService(req.params.clientId, req.params.id, req.body);
        if (contract) {
            res.status(200).json(contract);
        } else {
            res.status(404).json({ message: 'Contract not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete a contract
const deleteContractController = async (req, res) => {
    try {
        const result = await contractService.deleteContractService(req.params.clientId, req.params.id);
        if (result) {
            res.status(204).send();
        } else {
            res.status(404).json({ message: 'Contract not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getContractsByClientIdController,
    createContractController,
    updateContractController,
    deleteContractController
};
