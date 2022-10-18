const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Workout extends Model {}

Workout.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    sets: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    reps: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    days: {
      type: DataTypes.ARRAY,
      allowNull: false,
    },
    program_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'program',
        key: 'id',
      },
    },
    completed: {
      type: DataTypes.BOOLEAN,
      
    }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'workout',
  }
);

module.exports = Workout;
