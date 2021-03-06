'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Settlements', [{
      name: 'Village Village',
      world_id: 1,
      x_cordinate: -5,
      y_cordinate: -10,
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
      x_cordinate: 10,
      y_cordinate: 10,
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
      x_cordinate: -5,
      y_cordinate: 15,
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
      x_cordinate: 20,
      y_cordinate: -15,
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
