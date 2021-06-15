'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Items', [
      {
        world_id: 1,
        name: 'Iron',
        current_value: 5.02,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        world_id: 1,
        name: 'Lead',
        current_value: 3.17,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        world_id: 1,
        name: 'Gold',
        current_value: 15.44,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Items', null, {});
  }
};
