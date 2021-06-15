'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Worlds', [{
          name: 'Demo World',
          owner_id: 1,
          world_size: 50,
          map_seed: null,
          hour_tick: null,
          created_tick: 365000, // 1000 years in days
          createdAt: new Date(),
          updatedAt: new Date()
      }], {})
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Worlds', null, {})
  }
};
