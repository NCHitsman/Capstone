'use strict';


module.exports = (sequelize, DataTypes) => {
  const Settlement = sequelize.define('Settlement', {
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
    world_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: 'Worlds' }
    },
    x_cordinate: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    y_cordinate: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    type: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    population: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    wealth: {
      type: DataTypes.FLOAT(2),
      allowNull: false
    },
    state: {
      type: DataTypes.STRING(20),
      allowNull: false
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
  Settlement.associate = function(models) {
    Settlement.belongsTo(models.World, { foreignKey: 'world_id'})
    Settlement.hasMany(models.Civilian, { foreignKey: 'home_settlement_id'})
    Settlement.hasMany(models.Civilian, { foreignKey: 'current_settlement_id'})
    Settlement.hasMany(models.Import, { foreignKey: 'settlement_id'})
    Settlement.hasMany(models.Export, { foreignKey: 'settlement_id'})
    Settlement.hasMany(models.Road, { foreignKey: 'settlement_start'})
    Settlement.hasMany(models.Road, { foreignKey: 'settlement_end'})
  };
  return Settlement;
};
