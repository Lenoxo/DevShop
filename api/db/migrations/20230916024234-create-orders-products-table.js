'use strict';

const {
  ORDER_PRODUCT_TABLE,
  orderProductSchema,
} = require('../models/order-product.model');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(ORDER_PRODUCT_TABLE, orderProductSchema);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable(ORDER_PRODUCT_TABLE);
  },
};
