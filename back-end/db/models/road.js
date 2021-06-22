'use strict';


module.exports = (sequelize, DataTypes) => {
  const Road = sequelize.define('Road', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    world_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    x_cordinate: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    y_cordinate: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    distance: {
      type: DataTypes.INTEGER
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
  Road.associate = function (models) {
    Road.belongsTo(models.World, { foreignKey: 'world_id'})
  };
  return Road;
};
