// services/requiredDocumentService.js
const { RequiredDocument } = require('../models');

// Get all required documents for a specific contract type
const getRequiredDocumentsByContractTypeService = async (contractType) => {
    return await RequiredDocument.findAll({ where: { contractType } });
};

module.exports = {
    getRequiredDocumentsByContractTypeService,
};
