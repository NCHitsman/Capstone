'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Roads', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      world_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'Worlds' }
      },
      settlement_start: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'Settlements' }
      },
      settlement_end: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'Settlements' }
      },
      distance: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Roads');
  }
};
