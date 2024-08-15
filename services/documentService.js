// services/documentService.js
const { Document } = require('../models');

// Upload a document for a specific contract of a client
const uploadDocumentService = async (contractId, documentData) => {
    return await Document.create({ ...documentData, contractId });
};

// Get all documents for a specific contract of a client
const getDocumentsByContractIdService = async ( contractId) => {
    return await Document.findAll({ where: { contractId } });
};

// Get a specific document by ID for a specific contract of a client
const getDocumentByIdService = async ( contractId, documentId) => {
    return await Document.findOne({ where: {contractId, id: documentId } });
};

// Delete a specific document for a specific contract of a client
const deleteDocumentService = async (contractId, documentId) => {
    const document = await Document.findOne({ where: { contractId, id: documentId } });
    if (document) {
        await document.destroy();
        return true;
    }
    return false;
};

module.exports = {
    uploadDocumentService,
    getDocumentsByContractIdService,
    getDocumentByIdService ,
    deleteDocumentService,
};
