const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Program extends Model {}

Program.init(
  {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    program_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    volume: {
        type: DataTypes.STRING,
        allowNull: true
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'dish'
  }
);

module.exports = Program;