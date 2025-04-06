const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // if login is required for doctor
  name: String,
  specialty: String,
  price: Number, 
  availableDays: [String], 
  availableTimes: [String] 
});

module.exports = mongoose.model('Doctor', doctorSchema);
