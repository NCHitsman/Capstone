'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Imports', [
      {
        settlement_id: 1,
        item_id: 1,
        value_modifier: 0.045,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        settlement_id: 1,
        item_id: 2,
        value_modifier: 0.035,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        settlement_id: 2,
        item_id: 2,
        value_modifier: 0.050,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        settlement_id: 2,
        item_id: 3,
        value_modifier: 0.065,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        settlement_id: 3,
        item_id: 1,
        value_modifier: 0.085,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        settlement_id: 3,
        item_id: 3,
        value_modifier: 0.015,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Imports', null, {});
  }
};
