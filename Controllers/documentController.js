// controllers/DocumentController.js
const documentService = require('../services/documentService');

// Get documents for a specific contract
const getDocumentsByContractIdController = async (req, res) => {
    try {
        const documents = await documentService.getDocumentsByContractIdService(req.params.contractId);
        res.status(200).json(documents);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


// Upload a new document
const uploadDocumentController = async (req, res) => {
    console.log(req.params,req.body);
    try {
        const document = await documentService.uploadDocumentService(req.params.contractId, req.body);
        res.status(201).json(document);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update a document
// may be implemented, but it is not needed just delete and upload again ;

// Delete a document
const deleteDocumentController = async (req, res) => {
    try {
        const result = await documentService.deleteDocumentService(req.params.contractId, req.params.id);
        if (result) {
            res.status(204).send();
        } else {
            res.status(404).json({ message: 'Document not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getDocumentsByContractIdController,
    uploadDocumentController,
    deleteDocumentController
};
