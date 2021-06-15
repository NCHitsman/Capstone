'use strict';


module.exports = (sequelize, DataTypes) => {
  const Export = sequelize.define('Export', {
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
  Export.associate = function (models) {
    Export.belongsTo(models.Settlement, { foreignKey: 'settlement_id'})
    Export.belongsTo(models.Item, { foreignKey: 'item_id'})
  };
  return Export;
};
