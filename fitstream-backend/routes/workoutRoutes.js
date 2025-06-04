import express from 'express';
const router = express.Router();

// Dummy workouts by level
const workouts = {
  beginner: [
    { title: "Jumping Jacks", duration: "5 min" },
    { title: "Bodyweight Squats", duration: "5 min" },
  ],
  intermediate: [
    { title: "Burpees", duration: "10 min" },
    { title: "Planks", duration: "8 min" },
  ],
  advanced: [
    { title: "Deadlifts", duration: "15 min" },
    { title: "Sprints", duration: "12 min" },
  ],
};

// Route to fetch workouts by level
router.get('/:level', (req, res) => {
  const level = req.params.level.toLowerCase();
  if (workouts[level]) {
    res.json(workouts[level]);
  } else {
    res.status(404).json({ error: 'Workout level not found' });
  }
});

export default router;
