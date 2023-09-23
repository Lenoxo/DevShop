'use strict';

const { CATEGORY_TABLE, categorySchema } = require('../models/category.model');
const { PRODUCT_TABLE, productSchema } = require('../models/product.model');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.createTable(CATEGORY_TABLE, categorySchema);
    await queryInterface.createTable(PRODUCT_TABLE, productSchema);
  },

  async down(queryInterface) {
    await queryInterface.dropTable(CATEGORY_TABLE);
    await queryInterface.dropTable(PRODUCT_TABLE);
  },
};
