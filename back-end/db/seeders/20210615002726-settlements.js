'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Settlements', [{
      name: 'Village Village',
      world_id: 1,
      location: JSON.stringify([40, 75]),
      type: 1,
      population: 500,
      wealth: 500.00,
      state: '[IDLE]',
      created_tick: 50000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Town Town',
      world_id: 1,
      location: JSON.stringify([60, 35]),
      type: 2,
      population: 5000,
      wealth: 5000.00,
      state: '[IDLE]',
      created_tick: 50001,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'City City',
      world_id: 1,
      location: JSON.stringify([85, -15]),
      type: 3,
      population: 50000,
      wealth: 50000.00,
      state: '[IDLE]',
      created_tick: 50002,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Capital Capital',
      world_id: 1,
      location: JSON.stringify([-28, 30]),
      type: 4,
      population: 500000,
      wealth: 500000.00,
      state: '[IDLE]',
      created_tick: 50003,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Settlements', null, {});
  }
};
