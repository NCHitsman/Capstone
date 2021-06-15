'use strict';
const { Validator } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const World = sequelize.define('World', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    owner_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: 'Users' }
    },
    world_size: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    map_seed: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    hour_tick: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    created_tick: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    }
  }, {});
  World.associate = function (models) {
    World.belongsTo(model.User, { foreignKey: 'owner_id' })
    World.hasMany(model.Settlement, { foreignKey: 'world_id' })
    World.hasMany(models.Civilian, { foreignKey: 'world_id' })
    World.hasMany(models.Items, { foreignKey: 'world_id' })
  };
  return World;
};
