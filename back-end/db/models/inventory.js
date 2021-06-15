'use strict';


module.exports = (sequelize, DataTypes) => {
  const Inventory = sequelize.define('Inventory', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    civ_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: 'Civilians' }
    },
    item_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: 'Items' }
    },
    quantity: {
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
  Inventory.associate = function (models) {
    // associations can be defined here
  };
  return Inventory;
};
