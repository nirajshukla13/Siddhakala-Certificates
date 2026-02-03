const express = require('express');
const router = express.Router();
const {
  verifyCertificate,
  addCertificate,
  getAllCertificates
} = require('../controllers/certificateController');

// Public verification route
router.get('/internship/verify/certificate/validate/:certificateId', verifyCertificate);

// Admin routes
router.post('/admin/certificate/add', addCertificate);
router.get('/admin/certificates', getAllCertificates);

module.exports = router;
