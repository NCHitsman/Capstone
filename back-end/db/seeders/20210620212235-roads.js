'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Roads', [
      {
        world_id: 1,
        settlement_start: 1,
        settlement_end: 2,
        distance: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        world_id: 1,
        settlement_start: 2,
        settlement_end: 3,
        distance: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        world_id: 1,
        settlement_start: 3,
        settlement_end: 4,
        distance: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        world_id: 1,
        settlement_start: 4,
        settlement_end: 1,
        distance: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Roads', null, {});
  }
};
