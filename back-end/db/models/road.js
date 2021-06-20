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
    settlement_start: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    settlement_end: {
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
    Road.belongsTo(models.Settlement, { foreignKey: 'settlement_start', as: 'start'})
    Road.belongsTo(models.Settlement, { foreignKey: 'settlement_end', as: 'end'})
  };
  return Road;
};
