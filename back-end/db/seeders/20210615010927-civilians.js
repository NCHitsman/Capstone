'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Civilians', [
      {
      world_id: 1,
      home_settlement_id: 1,
      current_settlement_id: 1,
      type: '[TRDR]',
      action: '[IDLE]',
      engaged_until: null,
      wealth: 55.50,
      created_tick: 5000,
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Civilians', null, {});
  }
};
