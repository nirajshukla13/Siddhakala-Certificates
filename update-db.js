require('dotenv').config();
const mongoose = require('mongoose');
const Certificate = require('./models/Certificate');

const updateDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ Connected to MongoDB');

    // Update the SK2626856 certificate
    const result = await Certificate.updateOne(
      { certificateId: 'SK2626856' },
      { company: 'SIDDHAKALA AUTOMATIONS' }
    );

    console.log('✅ Updated certificate:', result);
    
    // Show the updated certificate
    const cert = await Certificate.findOne({ certificateId: 'SK2626856' });
    console.log('Updated certificate data:', cert);

    process.exit(0);
  } catch (error) {
    console.error('❌ Error:', error);
    process.exit(1);
  }
};

updateDatabase();
