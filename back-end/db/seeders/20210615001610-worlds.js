'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Worlds', [
      {
          name: 'Demo World',
          owner_id: 1,
          world_size: 100,
          map_seed: null,
          hour: 0,
          day: 1,
          year: 1000,
          current_tick: 8760000,
          created_tick: 8760000, // 1000 years in days
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
        name: 'Demo World2',
        owner_id: 1,
        world_size: 150,
        map_seed: null,
        hour: 0,
        day: 1,
        year: 5000000,
        current_tick: 5000000,
        created_tick: 5000000,
        createdAt: new Date(),
        updatedAt: new Date()
    }
    ], {})
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Worlds', null, {})
  }
};
