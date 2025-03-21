export const workouts = [
  {
    id: 1,
    name: "Arise from the Shadow",
    description:
      "A beginner-friendly workout focused on building foundational strength and endurance.",
    manaCost: 20,
    duration: 15,
    difficulty: "E",
    xpReward: 25,
    exercises: [
      {
        name: "Push-ups",
        description:
          "Keep your body straight and lower yourself until your chest nearly touches the ground.",
        sets: 3,
        reps: 10,
      },
      {
        name: "Bodyweight Squats",
        description:
          "Stand with feet shoulder-width apart and lower your body as if sitting in a chair.",
        sets: 3,
        reps: 15,
      },
      {
        name: "Plank",
        description:
          "Hold a push-up position with your weight on your forearms for the specified time.",
        sets: 3,
        reps: "30 seconds",
      },
      {
        name: "Mountain Climbers",
        description:
          "In a push-up position, alternate bringing knees to chest in a running motion.",
        sets: 3,
        reps: "45 seconds",
      },
    ],
  },
  {
    id: 2,
    name: "Hunter's Awakening",
    description:
      "A full-body workout designed to increase overall strength and power.",
    manaCost: 35,
    duration: 25,
    difficulty: "D",
    xpReward: 40,
    exercises: [
      {
        name: "Burpees",
        description:
          "From standing, drop to a push-up, then jump back up with hands overhead.",
        sets: 4,
        reps: 10,
      },
      {
        name: "Lunges",
        description:
          "Step forward with one leg, lowering your hips until both knees are bent at 90 degrees.",
        sets: 3,
        reps: 12,
      },
      {
        name: "Dips",
        description:
          "Using a chair or bench, lower your body by bending your arms and then push back up.",
        sets: 3,
        reps: 12,
      },
      {
        name: "Russian Twists",
        description:
          "Sit with knees bent, lean back slightly, and rotate your torso from side to side.",
        sets: 3,
        reps: 20,
      },
    ],
  },
  {
    id: 3,
    name: "Shadow Monarch's Challenge",
    description:
      "An intense workout focusing on explosive power and endurance.",
    manaCost: 50,
    duration: 35,
    difficulty: "C",
    xpReward: 60,
    exercises: [
      {
        name: "Jump Squats",
        description:
          "Perform a regular squat, then explode upward into a jump at the top.",
        sets: 4,
        reps: 15,
      },
      {
        name: "Diamond Push-ups",
        description:
          "Perform push-ups with hands close together forming a diamond shape.",
        sets: 3,
        reps: 12,
      },
      {
        name: "Bicycle Crunches",
        description:
          "Lie on your back, bring opposite elbow to knee while extending the other leg.",
        sets: 3,
        reps: 20,
      },
      {
        name: "Burpee Pull-ups",
        description:
          "Perform a burpee, then jump up to a pull-up bar and do a pull-up.",
        sets: 3,
        reps: 8,
      },
    ],
  },
  {
    id: 4,
    name: "Arise from Weakness",
    description:
      "A recovery-focused workout with emphasis on mobility and flexibility.",
    manaCost: 15,
    duration: 20,
    difficulty: "E",
    xpReward: 20,
    exercises: [
      {
        name: "Cat-Cow Stretch",
        description:
          "On hands and knees, alternate between arching and rounding your back.",
        sets: 2,
        reps: 10,
      },
      {
        name: "World's Greatest Stretch",
        description:
          "A dynamic stretch that opens the hips, shoulders, and thoracic spine.",
        sets: 2,
        reps: 5,
      },
      {
        name: "Bodyweight Good Mornings",
        description:
          "With hands behind head, hinge at hips while keeping back straight.",
        sets: 3,
        reps: 12,
      },
      {
        name: "Bird Dogs",
        description:
          "On hands and knees, extend opposite arm and leg while maintaining balance.",
        sets: 3,
        reps: 10,
      },
    ],
  },
  {
    id: 5,
    name: "Monarch's Army",
    description:
      "A high-intensity workout focused on building your shadow army (muscle endurance).",
    manaCost: 45,
    duration: 30,
    difficulty: "C",
    xpReward: 55,
    exercises: [
      {
        name: "Prisoner Squats",
        description:
          "Perform squats with hands behind your head, keeping chest up.",
        sets: 4,
        reps: 20,
      },
      {
        name: "Push-up Variations",
        description:
          "Alternate between regular, wide, and close-grip push-ups.",
        sets: 3,
        reps: 15,
      },
      {
        name: "Hollow Body Hold",
        description:
          "Lie on your back, lift shoulders and legs off the ground, and hold.",
        sets: 3,
        reps: "30 seconds",
      },
      {
        name: "High Knees",
        description: "Run in place, bringing knees up to hip level.",
        sets: 4,
        reps: "45 seconds",
      },
    ],
  },
  {
    id: 6,
    name: "Dungeon Break",
    description: "A strength-focused workout to break through your limits.",
    manaCost: 65,
    duration: 40,
    difficulty: "B",
    xpReward: 75,
    exercises: [
      {
        name: "Pistol Squats (or assisted)",
        description:
          "Single-leg squats that build tremendous leg strength and balance.",
        sets: 3,
        reps: 8,
      },
      {
        name: "Handstand Push-ups (or pike)",
        description:
          "Inverted push-ups that target shoulders and upper body strength.",
        sets: 3,
        reps: 8,
      },
      {
        name: "Pull-ups (or assisted)",
        description:
          "Hang from a bar and pull your body up until chin is over the bar.",
        sets: 3,
        reps: 8,
      },
      {
        name: "Dragon Flags (or leg raises)",
        description:
          "Advanced core exercise where you raise and lower your entire body while keeping it straight.",
        sets: 3,
        reps: 8,
      },
    ],
  },
  {
    id: 7,
    name: "S-Rank Hunter Training",
    description:
      "An elite-level workout designed for those who have mastered the basics.",
    manaCost: 80,
    duration: 50,
    difficulty: "A",
    xpReward: 100,
    exercises: [
      {
        name: "Plyometric Push-ups",
        description:
          "Explosive push-ups where your hands leave the ground at the top.",
        sets: 4,
        reps: 12,
      },
      {
        name: "Shrimp Squats",
        description:
          "Advanced single-leg squat variation that builds tremendous leg strength.",
        sets: 3,
        reps: 10,
      },
      {
        name: "L-sit Hold",
        description:
          "Hold your body off the ground with legs extended straight in front of you.",
        sets: 3,
        reps: "20 seconds",
      },
      {
        name: "Muscle-ups (or progression)",
        description:
          "Advanced pull-up to dip combination that requires significant upper body strength.",
        sets: 3,
        reps: 5,
      },
    ],
  },
];

// Sample completed workouts data
export const sampleCompletedWorkouts = [
  {
    id: 1,
    name: "Arise from the Shadow",
    completedAt: new Date(Date.now() - 86400000 * 2).toISOString(), // 2 days ago
    xpGained: 25,
  },
  {
    id: 4,
    name: "Arise from Weakness",
    completedAt: new Date(Date.now() - 86400000).toISOString(), // 1 day ago
    xpGained: 20,
  },
  {
    id: 2,
    name: "Hunter's Awakening",
    completedAt: new Date(Date.now() - 86400000).toISOString(), // 1 day ago
    xpGained: 40,
  },
];
