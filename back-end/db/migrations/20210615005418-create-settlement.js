'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Settlements', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING(50),
        allowNull: false
      },
      world_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'Worlds' }
      },
      type: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      population: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      wealth: {
        type: Sequelize.FLOAT(2),
        allowNull: false
      },
      state: {
        type: Sequelize.STRING(20),
        allowNull: false
      },
      created_tick: {
        type: Sequelize.INTEGER,
        allowNull: false
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
    await queryInterface.dropTable('Settlements');
  }
};
