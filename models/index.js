const User = require('./user');
const Workout = require('./workout');
const Program = require('./program');

User.hasOne(Program, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Program.hasMany(User, {
  foreignKey: 'program_id',
  onDelete: 'CASCADE'
});

Program.hasMany(Workout, {
  foreignKey: 'program_id',
  onDelete: 'CASCADE'
});

Workout.belongsTo(Program, {
  foreignKey: 'program_id'
});

module.exports = { User, Workout, Program };