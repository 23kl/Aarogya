const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, 
  hospitalName: { type: String, required: true },
  hospitalCode: { type: String, required: true, unique: true },
}, { timestamps: true });

const Admin = mongoose.model("Admin", adminSchema);

module.exports = Admin;
