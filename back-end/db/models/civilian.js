'use strict';


module.exports = (sequelize, DataTypes) => {
  const Civilian = sequelize.define('Civilian', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    world_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: 'Worlds' }
    },
    home_settlement_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: 'Settlements' }
    },
    current_settlement_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: { model: 'Settlements' }
    },
    type: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    action: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    engaged_until: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    inventory: {
      type: DataTypes.JSON,
      allowNull: true,
    },
    wealth: {
      type: DataTypes.FLOAT(2),
      allowNull: false,
    },
    created_tick: {
      type: DataTypes.INTEGER,
      allowNull: false,
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
  Civilian.associate = function (models) {
    Civilian.belongsTo(models.Settlement, { foreignKey: 'home_settlement_id' })
    Civilian.belongsTo(models.Settlement, { foreignKey: 'current_settlement_id'})
    Civilian.belongsTo(models.World, { foreignKey: 'world_id'})
    Civilian.belongsToMany(models.Item, { through: 'Inventory', otherKey: 'civ_id', foreignKey: 'item_id'})
  };
  return Civilian;
};
