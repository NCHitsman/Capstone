'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Civilians', {
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
      home_settlement_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'Settlements' }
      },
      current_settlement_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: { model: 'Settlements' }
      },
      type: {
        type: Sequelize.STRING(20),
        allowNull: false,
      },
      action: {
        type: Sequelize.STRING(20),
        allowNull: false,
      },
      engaged_until: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      wealth: {
        type: Sequelize.FLOAT(2),
        allowNull: false,
      },
      created_tick: {
        type: Sequelize.INTEGER,
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
    await queryInterface.dropTable('Civilians');
  }
};
