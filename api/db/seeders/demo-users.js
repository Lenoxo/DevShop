'use strict';

const { USER_TABLE } = require('../models/user.model');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.bulkInsert(USER_TABLE, [
  {
    "id": 1,
    "email": "admin@mail.com",
    "password": "$2b$10$sALUbhl8nvk8Mfqf1fWuUO370S.rG2fVH6epltIOk4vMLF6G67EYC",
    "role": "admin",
    "recovery_token": null,
    "created_at": "2026-11-04T15:07:38.062Z",
  },
  {
    "id": 2,
    "email": "example@mail.com",
    "password": "$2b$10$a3J3lFqUURdZ3xt.JKpfIOhvWr.oKIW9uVEXapl1Tjw5vT7GJ3H6O",
    "role": "seller",
    "recovery_token": null,
    "created_at": "2026-10-29T16:25:48.849Z",
  }
])
  },

  async down (queryInterface) {
     await queryInterface.bulkDelete(USER_TABLE, null, {});
  }
};
