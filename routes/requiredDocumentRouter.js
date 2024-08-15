// routes/requiredDocumentRoutes.js
const express = require('express');
const {
    getRequiredDocumentsByTypeController
} = require('../controllers/RequiredDocumentController');

const router = express.Router();

// Get required documents for a specific contract type
router.get('/required-documents/:contractType', getRequiredDocumentsByTypeController);

module.exports = router;
