require('dotenv').config();
const express = require('express');
const path = require('path');
const connectDB = require('./config/db');
const certificateRoutes = require('./routes/certificateRoutes');
const Certificate = require('./models/Certificate');

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files (CSS)
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/', certificateRoutes);

// Home route
app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Certificate Verification System - SIDDHAKALA AUTOMATIONS</title>
      <link rel="icon" type="image/png" href="/Siddhakala.png">
      <link rel="stylesheet" href="/style.css">
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    </head>
    <body>
      <div class="main-container">
        <div class="certificate-container">
          <div class="logo-section">
            <img src="/Siddhakala.png" alt="SIDDHAKALA AUTOMATIONS" class="company-logo">
          </div>
          
          <div class="validation-section">
            <h1 class="validation-title">Certificate Verification System</h1>
            
            <div class="validation-message">
              <p>Welcome to the SIDDHAKALA AUTOMATIONS certificate verification portal. Verify internship certificates instantly using the certificate ID.</p>
            </div>

            <div class="certificate-details">
              <h3 style="font-size: 18px; margin-bottom: 20px; color: #1a1a1a;">How to Verify</h3>
              <p style="margin-bottom: 15px; color: #4a4a4a; font-size: 15px;">
                Use the following URL format to verify a certificate:
              </p>
              <div style="background: #f3f4f6; padding: 12px 15px; border-radius: 6px; margin-bottom: 20px; font-family: monospace; font-size: 14px; color: #1a1a1a; border: 1px solid #e5e5e5;">
                /internship/verify/certificate/validate/&lt;CERTIFICATE_ID&gt;
              </div>
              
              <div style="border-top: 1px solid #e5e5e5; padding-top: 20px; margin-top: 20px;">
                <p style="color: #059669; font-weight: 600; text-align: center; margin: 0;">
                  ● System Online
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>
    </html>
  `);
});

// Seed Database with Sample Certificates
const seedDatabase = async () => {
  try {
    // Check if certificates already exist
    const count = await Certificate.countDocuments();
    
    if (count === 0) {
      const sampleCertificates = [
        {
          certificateId: 'SKAPL2625147',
          name: 'Niraj Shukla',
          role: 'Web Developer',
          company: 'SIDDHAKALA AUTOMATIONS',
          internshipType: 'Internship',
          startDate: '15 December, 2025',
          endDate: '17 February, 2026',
          issueDate: '17 February 2026',
          status: 'Verified'
        },
        {
          certificateId: 'SKAPL2625286',
          name: 'Parag Shirke',
          role: 'Web Developer',
          company: 'SIDDHAKALA AUTOMATIONS',
          internshipType: 'Internship',
          startDate: '15 December, 2025',
          endDate: '17 February, 2026',
          issueDate: '01 February 2026',
          status: 'Verified'
        },
        {
          certificateId: 'SKAPL2625394',
          name: 'Alok Singh',
          role: 'Web Developer',
          company: 'SIDDHAKALA AUTOMATIONS',
          internshipType: 'Internship',
          startDate: '15 December, 2025',
          endDate: '17 February, 2026',
          issueDate: '01 February 2026',
          status: 'Verified'
        }
      ];

      await Certificate.insertMany(sampleCertificates);
      console.log('✅ Sample certificates added to database');
      console.log(`📋 Total certificates: ${sampleCertificates.length}`);
      console.log('\n🔍 Test these certificate IDs:');
      sampleCertificates.forEach(cert => {
        console.log(`   - ${cert.certificateId} (${cert.name})`);
      });
    } else {
      console.log(`✅ Database already contains ${count} certificate(s)`);
    }
  } catch (error) {
    console.error('❌ Error seeding database:', error.message);
  }
};

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Server Error:', err.stack);
  res.status(500).send(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Server Error</title>
      <link rel="stylesheet" href="/style.css">
    </head>
    <body>
      <div class="container">
        <div class="card error-card">
          <h1>⚠️ Server Error</h1>
          <p>An unexpected error occurred. Please try again later.</p>
        </div>
      </div>
    </body>
    </html>
  `);
});

// 404 handler
app.use((req, res) => {
  res.status(404).send(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>404 - Page Not Found</title>
      <link rel="stylesheet" href="/style.css">
    </head>
    <body>
      <div class="container">
        <div class="card notfound-card">
          <div class="error-icon">
            <h1 style="font-size: 80px; margin: 0;">404</h1>
          </div>
          <h1 class="error-title">Page Not Found</h1>
          <p class="error-message">
            The page you are looking for does not exist.
          </p>
          <div class="action-section">
            <a href="/" style="color: #667eea; text-decoration: none; font-weight: 600;">← Go to Home</a>
          </div>
        </div>
      </div>
    </body>
    </html>
  `);
});

// Start server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log('');
  console.log('═══════════════════════════════════════════════════════════');
  console.log('🚀 Certificate Verification System');
  console.log('═══════════════════════════════════════════════════════════');
  console.log(`✅ Server running on: http://localhost:${PORT}`);
  console.log(`📡 Environment: ${process.env.NODE_ENV || 'development'}`);
  console.log('═══════════════════════════════════════════════════════════');
  console.log('');
  
  // Seed database with sample data
  seedDatabase();
});

module.exports = app;
