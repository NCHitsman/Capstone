'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Roads', [
      {
        world_id: 1,
        x_cordinate: 5,
        y_cordinate: 5,
        distance: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        world_id: 1,
        x_cordinate: 15,
        y_cordinate: 15,
        distance: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        world_id: 1,
        x_cordinate: -5,
        y_cordinate: -5,
        distance: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        world_id: 1,
        x_cordinate: -15,
        y_cordinate: -15,
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
