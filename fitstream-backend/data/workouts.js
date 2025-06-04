// backend/data/workouts.js

const workouts = {
  beginner: [
    {
      name: "Bodyweight Squats",
      description: "A lower-body workout to build leg strength using bodyweight.",
      procedure: "Stand with feet shoulder-width apart. Lower your hips back and down as if sitting. Keep your chest up. Return to standing. Repeat."
    },
    {
      name: "Incline Push-ups",
      description: "An upper-body workout targeting the chest and arms with reduced intensity.",
      procedure: "Place your hands on an elevated surface. Lower your chest towards the surface. Push back up. Repeat."
    },
    {
      name: "Jumping Jacks",
      description: "A full-body cardio exercise to warm up and improve coordination.",
      procedure: "Stand straight. Jump to spread your legs and arms overhead. Jump back to start. Repeat."
    }
  ],
  intermediate: [
    {
      name: "Push-ups",
      description: "An effective bodyweight exercise for chest, shoulders, and triceps.",
      procedure: "Place hands shoulder-width apart. Keep your body straight. Lower chest to the ground. Push up to start. Repeat."
    },
    {
      name: "Lunges",
      description: "Targets quads, glutes, and hamstrings. Improves balance and strength.",
      procedure: "Step one foot forward. Lower your hips until both knees are at 90°. Push back to starting position. Repeat with other leg."
    },
    {
      name: "Mountain Climbers",
      description: "A cardio and core workout performed in a plank position.",
      procedure: "Start in plank. Bring one knee towards your chest quickly. Switch legs like running. Keep hips low."
    }
  ],
  advanced: [
    {
      name: "Burpees",
      description: "A full-body high-intensity exercise combining squats, push-ups, and jumps.",
      procedure: "Squat down, place hands on floor. Kick legs back into push-up. Return to squat. Jump up. Repeat."
    },
    {
      name: "Pull-ups",
      description: "A compound movement for upper body strength, especially the back and arms.",
      procedure: "Grab bar with shoulder-width grip. Pull body up until chin is above bar. Lower down. Repeat."
    },
    {
      name: "Pistol Squats",
      description: "A challenging leg workout that requires balance and strength.",
      procedure: "Stand on one leg. Extend the other forward. Lower your body into a squat on the standing leg. Return to start."
    }
  ]
};

export default workouts;
