'use strict';


module.exports = (sequelize, DataTypes) => {
  const Item = sequelize.define('Item', {
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
    name: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    current_value: {
      type: DataTypes.FLOAT(2),
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
  Item.associate = function (models) {
    Item.belongsTo(models.World, { foreignKey: 'world_id' })
    Item.hasMany(models.Export, { foreignKey: 'item_id'})
    Item.hasMany(models.Import, { foreignKey: 'item_id'})
    Item.belongsToMany(models.Civilian, { through: 'Inventory', otherKey: 'item_id', foreignKey: 'civ_id'})
  };
  return Item;
};
