require('dotenv').config();
const mongoose = require('mongoose');
const Certificate = require('./models/Certificate');

const resetDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ Connected to MongoDB');

    // Delete all existing certificates
    const deleteResult = await Certificate.deleteMany({});
    console.log(`🗑️  Deleted ${deleteResult.deletedCount} certificates`);

    // Add new certificates for Niraj Shukla, Parag Shirke, and Alok Singh
    const newCertificates = [
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

    await Certificate.insertMany(newCertificates);
    console.log('✅ Added 3 new certificates');
    
    // Display the certificates
    const all = await Certificate.find();
    console.log('\n📋 Current Certificates:');
    all.forEach(cert => {
      console.log(`   - ${cert.certificateId}: ${cert.name} (${cert.role})`);
    });

    process.exit(0);
  } catch (error) {
    console.error('❌ Error:', error);
    process.exit(1);
  }
};

resetDatabase();
