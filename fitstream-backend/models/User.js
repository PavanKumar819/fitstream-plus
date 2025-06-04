const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  bmi: Number,
  fitnessLevel: String, // e.g., 'beginner', 'intermediate', 'advanced'
});

module.exports = mongoose.model('User', userSchema);
