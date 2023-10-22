'use strict';

const { CUSTOMER_TABLE } = require('../models/customer.model');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.sequelize.query(
      `ALTER TABLE ${CUSTOMER_TABLE} DROP CONSTRAINT "customers_user_id_fkey";`,
    );
    await queryInterface.changeColumn(CUSTOMER_TABLE, 'user_id', {
      type: Sequelize.INTEGER,
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE', // Cambia SET NULL a CASCADE
      references: {
        // En este caso tuve que poner users porque es el nombre de la tabla en la DB
        model: 'users',
        key: 'id',
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.sequelize.query(
      `ALTER TABLE ${CUSTOMER_TABLE} DROP CONSTRAINT "customers_user_id_fkey";`,
    );
    await queryInterface.changeColumn(CUSTOMER_TABLE, 'user_id', {
      type: Sequelize.INTEGER,
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL', // Vuelve a SET NULL si es necesario
      references: {
        // En este caso tuve que poner users porque es el nombre de la tabla en la DB
        model: 'users',
        key: 'id',
      },
    });
  },
};
