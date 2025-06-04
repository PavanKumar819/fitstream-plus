const Workout = require('../models/Workout');
const User = require('../models/User');

exports.getWorkouts = async (req, res) => {
  try {
    const userId = req.user.id;
    const user = await User.findById(userId);
    const { bmi, fitnessLevel } = user;

    let goal = '';
    if (bmi < 18.5) goal = 'muscleGain';
    else if (bmi >= 18.5 && bmi <= 24.9) goal = 'normal';
    else goal = 'weightLoss';

    const workouts = await Workout.find({ level: fitnessLevel, goal });
    res.json(workouts);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch workouts' });
  }
};
