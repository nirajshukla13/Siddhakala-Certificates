const Certificate = require('../models/Certificate');
const path = require('path');

// @desc    Verify certificate by ID
// @route   GET /internship/verify/certificate/validate/:certificateId
// @access  Public
exports.verifyCertificate = async (req, res) => {
  try {
    const { certificateId } = req.params;
    
    // Convert to uppercase for case-insensitive search
    const certificate = await Certificate.findOne({ 
      certificateId: certificateId.toUpperCase() 
    });

    if (!certificate) {
      return res.status(404).sendFile(path.join(__dirname, '../views/notfound.html'));
    }

    // If certificate is found, return verified page with data
    const verifiedHTML = require('fs').readFileSync(
      path.join(__dirname, '../views/verified.html'), 
      'utf8'
    );

    // Replace placeholders with actual data
    const populatedHTML = verifiedHTML
      .replace(/{{certificateId}}/g, certificate.certificateId)
      .replace(/{{name}}/g, certificate.name)
      .replace(/{{role}}/g, certificate.role)
      .replace(/{{company}}/g, certificate.company)
      .replace(/{{internshipType}}/g, certificate.internshipType)
      .replace(/{{startDate}}/g, certificate.startDate)
      .replace(/{{endDate}}/g, certificate.endDate)
      .replace(/{{issueDate}}/g, certificate.issueDate)
      .replace(/{{status}}/g, certificate.status);

    res.send(populatedHTML);

  } catch (error) {
    console.error('Error verifying certificate:', error);
    res.status(500).send(`
      <!DOCTYPE html>
      <html>
      <head>
        <title>Error</title>
        <link rel="stylesheet" href="/style.css">
      </head>
      <body>
        <div class="container">
          <div class="card error-card">
            <h1>⚠️ System Error</h1>
            <p>Unable to verify certificate. Please try again later.</p>
            <p class="error-details">Error: Database connection issue</p>
          </div>
        </div>
      </body>
      </html>
    `);
  }
};

// @desc    Add new certificate (Admin)
// @route   POST /admin/certificate/add
// @access  Public (In production, add authentication)
exports.addCertificate = async (req, res) => {
  try {
    const {
      certificateId,
      name,
      role,
      company,
      internshipType,
      startDate,
      endDate,
      issueDate,
      status
    } = req.body;

    // Check if certificate already exists
    const existingCertificate = await Certificate.findOne({ certificateId: certificateId.toUpperCase() });
    
    if (existingCertificate) {
      return res.status(400).json({
        success: false,
        message: 'Certificate ID already exists'
      });
    }

    // Create new certificate
    const certificate = await Certificate.create({
      certificateId: certificateId.toUpperCase(),
      name,
      role,
      company,
      internshipType,
      startDate,
      endDate,
      issueDate,
      status: status || 'Verified'
    });

    res.status(201).json({
      success: true,
      message: 'Certificate added successfully',
      data: certificate
    });

  } catch (error) {
    console.error('Error adding certificate:', error);
    res.status(500).json({
      success: false,
      message: 'Error adding certificate',
      error: error.message
    });
  }
};

// @desc    Get all certificates (Admin)
// @route   GET /admin/certificates
// @access  Public (In production, add authentication)
exports.getAllCertificates = async (req, res) => {
  try {
    const certificates = await Certificate.find().sort({ createdAt: -1 });
    
    res.status(200).json({
      success: true,
      count: certificates.length,
      data: certificates
    });
  } catch (error) {
    console.error('Error fetching certificates:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching certificates',
      error: error.message
    });
  }
};
