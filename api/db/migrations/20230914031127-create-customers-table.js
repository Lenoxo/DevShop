'use strict';

const { customerSchema, CUSTOMER_TABLE } = require('../models/customer.model');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(CUSTOMER_TABLE, customerSchema);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable(CUSTOMER_TABLE, customerSchema);
  },
};
