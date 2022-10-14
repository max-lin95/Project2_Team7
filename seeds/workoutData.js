const { Workout } = require('../models');


const workoutdata = [
    {
        Id: 1, 
        Workout: "Paused Deadlifts", 
        Sets: 3, 
        Reps: 6, 
        RPE: 6 
    },
    {
        Id: 2, 
        Workout: "Comp Deadlifts", 
        Sets: 3, 
        Reps: 5, 
        RPE: 5 
    },
    {
        Id: 3, 
        Workout: "Comp Bench Press (0-1-0)", 
        Sets: 4, 
        Reps: 9, 
        RPE: 6 
    },
    {
        Id: 4, 
        Workout: "Comp Back Squat", 
        Sets: 3, 
        Reps: 9, 
        RPE: 5 
    },
    {
        Id: 5, 
        Workout: "Tempo Bench Press (0-4-0)", 
        Sets: 4, 
        Reps: 2, 
        RPE: 5 
    },
    {
        Id: 6, 
        Workout: "Bicep Workout of your choice", 
        Sets: 4, 
        Reps: 15 
    },
    {
        Id: 7, 
        Workout: "Tricep Workout of your choice", 
        Sets: 4, 
        Reps: 15 
    },
    {
        Id: 8, 
        Workout: "Lateral Raises", 
        Sets: 4, 
        Reps: 15 
    },
    {
        Id: 9, 
        Workout: "Underhand Lat Pulldown", 
        Sets: 4, 
        Reps: 10 
    },
    {
        Id: 10, 
        Workout: "Single Arm Lat Pulldown", 
        Sets: 4, 
        Reps: 12 
    },
    {
        Id: 11, 
        Workout: "Back Extension", 
        Sets: 3, 
        Reps: 10 
    },
    {
        Id: 12, 
        Workout: "Close Grip Larsen Press", 
        Sets: 3, 
        Reps: 8, 
        RPE: 5 
    },
    {
        Id: 13, 
        Workout: "Leg Curl", 
        Sets: 4, 
        Reps: 15 
    },
    {
        Id: 14, 
        Workout: "Chest Supported Row", 
        Sets: 4, 
        Reps: 10 
    },
    {
        Id: 15, 
        Workout: "Chest Cable Fly", 
        Sets: 4, 
        Reps: 10 
    }
];

const seedWorkout = () => Workout.bulkCreate(workoutdata);

module.exports = seedWorkout;