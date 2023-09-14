'use strict';

const { CUSTOMER_TABLE } = require('../models/customer.model');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addConstraint(CUSTOMER_TABLE, {
      type: 'unique',
      fields: ['user_id'],
      name: 'user_id_unique_constraint',
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeConstraint(
      CUSTOMER_TABLE,
      'user_id_unique_constraint',
    );
  },
};
