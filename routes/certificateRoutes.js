const express = require('express');
const router = express.Router();
const {
  verifyCertificate,
  addCertificate,
  getAllCertificates,
  generateQRCode
} = require('../controllers/certificateController');

// Public verification route
router.get('/internship/verify/certificate/validate/:certificateId', verifyCertificate);

// QR Code generation route
router.get('/qrcode/:certificateId', generateQRCode);

// Admin routes
router.post('/admin/certificate/add', addCertificate);
router.get('/admin/certificates', getAllCertificates);

module.exports = router;
