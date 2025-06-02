import { addUser, getUserByEmail, validateUser } from '../models/userStore.js';

export const signup = (req, res) => {
  const { username, email, password } = req.body;

  if (getUserByEmail(email)) {
    return res.status(409).json({ message: 'User already exists' });
  }

  const newUser = { username, email, password };
  addUser(newUser);
  return res.status(201).json({ message: 'Signup successful', user: newUser });
};

export const login = (req, res) => {
  const { email, password } = req.body;

  const user = validateUser(email, password);
  if (!user) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  return res.status(200).json({ message: 'Login successful', user });
};

export const googleLogin = (req, res) => {
  const { name, email, picture } = req.body;

  let user = getUserByEmail(email);
  if (!user) {
    user = { username: name, email, picture };
    addUser(user);
  }

  return res.status(200).json({ message: 'Google login successful', user });
};
