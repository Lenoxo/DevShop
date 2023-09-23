'use strict';

const { ORDER_TABLE } = require('../models/order.model');
const { DataTypes } = require('sequelize');
const { CUSTOMER_TABLE } = require('../models/customer.model');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.createTable(ORDER_TABLE, {
      id: {
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
      },

      customerId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        field: 'customer_id',
        references: {
          model: CUSTOMER_TABLE,
          key: 'id', // Esta debe ser siempre la llave primaria del model.
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },

      date: {
        allowNull: false,
        type: DataTypes.DATE,
        field: 'date',
        defaultValue: DataTypes.NOW,
      },
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable(ORDER_TABLE);
  },
};
