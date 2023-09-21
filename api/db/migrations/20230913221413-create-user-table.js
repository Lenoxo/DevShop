const { userSchema, USER_TABLE } = require('../models/user.model');
('use strict');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  // up se usa para ejecutar pasos en la migración
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(USER_TABLE, userSchema);
  },
  // down se usa para revertir los pasos de la migración
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable(USER_TABLE, userSchema);
  },
};
