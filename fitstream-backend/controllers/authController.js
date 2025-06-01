// controllers/authController.js
import bcrypt from 'bcryptjs';
import { addUser, findUserByEmail } from '../models/userStore.js';

export const signupUser = async (req, res) => {
  const { name, email, password } = req.body;

  // Check if user already exists
  const existingUser = findUserByEmail(email);
  if (existingUser) {
    return res.status(400).json({ message: 'User already exists' });
  }

  // Hash password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Save user
  const newUser = { name, email, password: hashedPassword };
  addUser(newUser);

  res.status(201).json({ message: 'Signup successful', user: { name, email } });
};

export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  // Find user
  const user = findUserByEmail(email);
  if (!user) {
    return res.status(400).json({ message: 'Invalid email or password' });
  }

  // Check password
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(400).json({ message: 'Invalid email or password' });
  }

  res.status(200).json({ message: 'Login successful', user: { name: user.name, email: user.email } });
};
