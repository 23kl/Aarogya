const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
    patientId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    doctorId: { type: mongoose.Schema.Types.ObjectId, ref: 'Doctor' }, 
    date: Date,
    time: String,
    status: { type: String, enum: ['pending', 'confirmed', 'cancelled'], default: 'pending' },
    notes: String
  }, { timestamps: true });
  
module.exports = mongoose.model('Appointment', appointmentSchema);
