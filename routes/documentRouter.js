// routes/documentRoutes.js
const express = require('express');
const {
    getDocumentsByContractIdController,
    uploadDocumentController,
    deleteDocumentController
} = require('../controllers/DocumentController');

const router = express.Router();

// Get documents for a specific contract
router.get('/contracts/:contractId/documents', getDocumentsByContractIdController);



// Upload a new document for a specific contract which belongs to a specific user
router.post('/contracts/:contractId/documents', uploadDocumentController);



// Delete a document for a specific contract
router.delete('/contracts/:contractId/documents/:id', deleteDocumentController);

module.exports = router;
