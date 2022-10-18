const { Workout } = require('../models');


const workoutdata = [
    {
        Id: 1, 
        Name: "Paused Deadlifts", 
        Sets: 3, 
        Reps: 6, 
        RPE: 6 
    },
    {
        Id: 2, 
        Name: "Comp Deadlifts", 
        Sets: 3, 
        Reps: 5, 
        RPE: 5 
    },
    {
        Id: 3, 
        Name: "Comp Bench Press (0-1-0)", 
        Sets: 4, 
        Reps: 9, 
        RPE: 6 
    },
    {
        Id: 4, 
        Name: "Comp Back Squat", 
        Sets: 3, 
        Reps: 9, 
        RPE: 5 
    },
    {
        Id: 5, 
        Name: "Tempo Bench Press (0-4-0)", 
        Sets: 4, 
        Reps: 2, 
        RPE: 5 
    },
    {
        Id: 6, 
        Name: "Bicep Workout of your choice", 
        Sets: 4, 
        Reps: 15 
    },
    {
        Id: 7, 
        Name: "Tricep Workout of your choice", 
        Sets: 4, 
        Reps: 15 
    },
    {
        Id: 8, 
        Name: "Lateral Raises", 
        Sets: 4, 
        Reps: 15 
    },
    {
        Id: 9, 
        Name: "Underhand Lat Pulldown", 
        Sets: 4, 
        Reps: 10 
    },
    {
        Id: 10, 
        Name: "Single Arm Lat Pulldown", 
        Sets: 4, 
        Reps: 12 
    },
    {
        Id: 11, 
        Name: "Back Extension", 
        Sets: 3, 
        Reps: 10 
    },
    {
        Id: 12, 
        Name: "Close Grip Larsen Press", 
        Sets: 3, 
        Reps: 8, 
        RPE: 5 
    },
    {
        Id: 13, 
        Name: "Leg Curl", 
        Sets: 4, 
        Reps: 15 
    },
    {
        Id: 14, 
        Name: "Chest Supported Row", 
        Sets: 4, 
        Reps: 10 
    },
    {
        Id: 15, 
        Name: "Chest Cable Fly", 
        Sets: 4, 
        Reps: 10 
    }
];

const seedWorkout = () => Workout.bulkCreate(workoutdata);

module.exports = seedWorkout;