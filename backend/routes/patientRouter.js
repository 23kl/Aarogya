const express = require("express");
const router = express.Router();
const zod = require("zod");
const User = require("../models/User");
const jwt = require("jsonwebtoken");

const patientSchema = zod.object({
  fullName: zod.string(),
  email: zod.string().email(),
  phoneNumber: zod.string().min(10),
  password: zod.string().min(6),
  role: zod.enum(['patient', 'admin']).optional().default('patient')
});

router.post('/signup', async (req, res) => {
  const body = req.body;

  const result = patientSchema.safeParse(body);
  if (!result.success) {
    return res.status(400).json({
      msg: "Enter credentials in required format",
      errors: result.error.errors
    });
  }

  // Check if user already exists
  const existingUser = await User.findOne({ email: result.data.email });
  if (existingUser) {
    return res.status(409).json({
      msg: "Email is already taken"
    });
  }

  // Create new user
  const dbUser = await User.create(result.data);

  // Create token using validated email and userId
  const token = jwt.sign(
    { userId: dbUser._id, email: dbUser.email, role: dbUser.role },
    "123456", // You should use process.env.JWT_SECRET in production
    { expiresIn: "2h" }
  );
  


  return res.status(201).json({
    msg: "Registration successful",
    token:token,
    userId: dbUser._id,
    role: dbUser.role
  });
});

module.exports = router;
