const mongoose=require("mongoose")

const patientSchema=mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    dob: String,
    gender: String,
    address: String,
    occupation: String,
    emergencyContact: {
        name: String,
        phone: String
      },
      insurance: {
        provider: String,
        policyNumber: String
      },
      medicalInfo: {
        allergies: [String],
        medications: [String],
        familyHistory: String,
        primaryPhysician: String
      }
}, { timestamps: true })

const Patient=mongoose.model("Patient",patientSchema)

module.exports=Patient