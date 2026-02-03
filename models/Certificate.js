const mongoose = require('mongoose');

const certificateSchema = new mongoose.Schema({
  certificateId: {
    type: String,
    required: [true, 'Certificate ID is required'],
    unique: true,
    trim: true,
    uppercase: true,
    index: true
  },
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true
  },
  role: {
    type: String,
    required: [true, 'Role is required'],
    trim: true
  },
  company: {
    type: String,
    required: [true, 'Company name is required'],
    trim: true
  },
  internshipType: {
    type: String,
    enum: ['Virtual Internship', 'Internship'],
    default: 'Internship'
  },
  startDate: {
    type: String,
    required: [true, 'Start date is required']
  },
  endDate: {
    type: String,
    required: [true, 'End date is required']
  },
  issueDate: {
    type: String,
    required: [true, 'Issue date is required']
  },
  status: {
    type: String,
    default: 'Verified',
    enum: ['Verified', 'Revoked', 'Pending']
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Certificate', certificateSchema);
