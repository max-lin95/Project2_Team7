const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Workout extends Model {}

Workout.init(
  {
    ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    Workout: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Sets: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    Reps: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'Workout',
  }
);

module.exports = Workout;
