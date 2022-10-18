const sequelize = require('../config/connection');
const {User, Program, Workout} = require('../models');

const userData = require('./userData.json');
const programData = require('./programData.json');
const workoutData = require('./workoutData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const program of programData) {
    await Program.create(programData);
  }

  for (const workout of workoutData) {
    await Workout.create({
      ...workout,
      completed: false,
    });
  }

  process.exit(0);
};

seedDatabase();
