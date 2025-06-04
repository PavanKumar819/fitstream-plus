const mongoose = require('mongoose');

const workoutSchema = new mongoose.Schema({
  title: String,
  level: String, // 'beginner', 'intermediate', 'advanced'
  goal: String,  // 'weightLoss', 'muscleGain', 'normal'
  exercises: [String],
});

module.exports = mongoose.model('Workout', workoutSchema);
