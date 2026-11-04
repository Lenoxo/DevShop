'use strict';

const { CATEGORY_TABLE } = require('../models/category.model');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    
    await queryInterface.bulkInsert(CATEGORY_TABLE, [
  {
    "id": 1,
    "name": "Electronics",
    "image": "https://image.com/ja",
    "created_at": "2026-10-29T16:27:41.596Z"
  },
  {
    "id": 2,
    "name": "Furnitures",
    "image": "https://image.com/ja",
    "created_at": "2026-10-29T16:27:56.246Z"
  },
  {
    "id": 3,
    "name": "Clothes",
    "image": "https://image.com/ji",
    "created_at": "2026-11-04T15:10:40.724Z"
  },
  {
    "id": 4,
    "name": "Jewelry",
    "image": "https://image.com/jo",
    "created_at": "2026-11-04T15:11:17.375Z"
  }
])
  },

  async down (queryInterface) {

    await queryInterface.bulkDelete(CATEGORY_TABLE, null)
  }
};
