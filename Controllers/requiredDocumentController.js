

// controllers/RequiredDocumentController.js
const requiredDocumentService = require('../services/requiredDocumentService');

// Get required documents for a specific contract type
const getRequiredDocumentsByTypeController = async (req, res) => {
    try {
        const requiredDocuments = await requiredDocumentService.getRequiredDocumentsByContractTypeService(req.params.contractType);
        res.status(200).json(requiredDocuments);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getRequiredDocumentsByTypeController
};
