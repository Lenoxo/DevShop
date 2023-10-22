'use strict';

const { CUSTOMER_TABLE } = require('../models/customer.model');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.changeColumn(CUSTOMER_TABLE, 'user_id', {
      type: Sequelize.INTEGER,
      references: {
        // En este caso tuve que poner users porque es el nombre de la tabla en la DB
        model: 'users',
        key: 'id',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE', // Cambia SET NULL a CASCADE
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.changeColumn(CUSTOMER_TABLE, 'user_id', {
      type: Sequelize.INTEGER,
      references: {
        // En este caso tuve que poner users porque es el nombre de la tabla en la DB
        model: 'users',
        key: 'id',
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL', // Vuelve a SET NULL si es necesario
      },
    });
  },
};
