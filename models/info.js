const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Project extends Model {}

Project.init(
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
    username: {
      type: DataTypes.STRING,
      allownNull: false,
    },
    country: {
      type: DataTypes.STRING,
    },
    city: {
      type: DataTypes.STRING,
    },
    state: {
        type: DataTypes.STRING,
    },
    address: {
        type: DataTypes.STRING,
    },
    bio: {
        type: DataTypes.STRING,
    },
    gender: {
        type: DataTypes.STRING,
    },
    birthday: {
        type: DataTypes.STRING,
    },
    height: {
        type: DataTypes.STRING,
    },
    weight: {
        type: DataTypes.STRING,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'project',
  }
);

module.exports = Project;