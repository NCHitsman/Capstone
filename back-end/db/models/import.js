'use strict';


module.exports = (sequelize, DataTypes) => {
  const Import = sequelize.define('Import', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    settlement_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: 'Settlements' }
    },
    item_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: 'Items' }
    },
    value_modifier: {
      type: DataTypes.FLOAT(3),
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
  Import.associate = function (models) {
    Import.belongsTo(models.Settlement, { foreignKey: 'settlement_id'})
    Import.belongsTo(models.Item, { foreignKey: 'item_id'})
  };
  return Import;
};
