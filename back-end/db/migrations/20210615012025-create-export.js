'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Exports', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      settlement_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'Settlements' }
      },
      item_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'Items' }
      },
      value_modifier: {
        type: Sequelize.FLOAT(3),
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now'),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now'),
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Exports');
  }
};
