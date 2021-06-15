'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Inventories', [
      {
        civ_id: 1,
        item_id: 1,
        quantity: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        civ_id: 1,
        item_id: 2,
        quantity: 15,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        civ_id: 1,
        item_id: 3,
        quantity: 20,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Inventories', null, {});
  }
};
