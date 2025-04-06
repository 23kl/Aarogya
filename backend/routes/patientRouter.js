const express = require("express");
const router = express.Router();
const zod = require("zod");
const User = require("../models/User");

const patientSchema = zod.object({
  fullName: zod.string(),
  email: zod.string().email(),
  phoneNumber: zod.string().min(10),
  password: zod.string().min(6),
  role: zod.enum(['patient', 'admin']).optional().default('patient')
});

router.post('/signup', async (req, res) => {
  const body = req.body;

  // Validate input using Zod
  const result = patientSchema.safeParse(body);
  if (!result.success) {
    return res.status(400).json({
      msg: "Enter credentials in required format",
      errors: result.error.errors  // Optional: send detailed errors
    });
  }

  // Check if user already exists
  const user = await User.findOne({ email: body.email });
  if (user) {
    return res.status(409).json({
      msg: "Email is already taken"
    });
  }

  // Create user in DB
  const dbUser = await User.create(result.data);

  // Respond with success
  return res.status(201).json({
    msg: "Registration successful",
    userId: dbUser._id,
    role: dbUser.role
  });
});

module.exports = router;
