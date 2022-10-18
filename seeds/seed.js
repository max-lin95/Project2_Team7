const sequelize = require('../config/connection');
const {User, Program, Workout} = require('../models');

const userData = require('./userData.json');
const programData = require('./programData.json');
const workoutData = require('./workoutData.json');
const { Project } = require('../../../UCI-VIRT-FSF-PT-06-2022-U-LOLC/01-Class-Content/14-MVC/01-Activities/28-Stu_Mini-Project/Main/models');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const program of programData) {
    await Project.create({
      ..program,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  
  
  process.exit(0);
};

seedDatabase();
