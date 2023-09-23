'use strict';

const { USER_TABLE } = require('../models/user.model');
const { PRODUCT_TABLE } = require('../models/product.model');
const { ORDER_TABLE } = require('../models/order.model');
const { CUSTOMER_TABLE } = require('../models/customer.model');
const { CATEGORY_TABLE } = require('../models/category.model');
const { ORDER_PRODUCT_TABLE } = require('../models/order-product.model');
const { DataTypes } = require('sequelize');

// Aquí decidí manejar las migraciones desacopladas de los modelos, ya que es usual ejecutar cambios en este proyecto.
// Esto me permite tener más control, y uso las variables para que sea un poco más facil de leer.

const userModel = {
  id: {
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.INTEGER,
  },
  email: {
    allowNull: false,
    unique: true,
    type: DataTypes.STRING,
  },
  password: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  role: {
    allowNull: false,
    type: DataTypes.STRING,
    defaultValue: 'customer',
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: DataTypes.NOW,
  },
};

const categoryModel = {
  id: {
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.INTEGER,
  },
  name: {
    allowNull: false,
    unique: true,
    type: DataTypes.STRING,
  },
  image: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: DataTypes.NOW,
  },
};

const productModel = {
  id: {
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.INTEGER,
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  description: {
    allowNull: false,
    type: DataTypes.TEXT,
  },
  price: {
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  image: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  categoryId: {
    allowNull: false,
    type: DataTypes.INTEGER,
    field: 'category_id',
    references: {
      model: CATEGORY_TABLE,
      key: 'id', // Esta debe ser siempre la llave primaria del model.
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL',
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: DataTypes.NOW,
  },
};

const customerModel = {
  id: {
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.INTEGER,
  },

  name: {
    allowNull: false,
    type: DataTypes.STRING,
  },

  lastName: {
    allowNull: false,
    type: DataTypes.STRING,
    field: 'last_name',
  },

  phone: {
    allowNull: false,
    type: DataTypes.STRING,
  },

  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: DataTypes.NOW,
  },

  userId: {
    allowNull: false,
    type: DataTypes.INTEGER,
    field: 'user_id',
    unique: true,
    references: {
      model: USER_TABLE,
      key: 'id', // Esta debe ser siempre la llave primaria del model.
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL',
  },
};

const orderModel = {
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
};

const orderProductModel = {
  id: {
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.INTEGER,
  },

  orderId: {
    allowNull: false,
    type: DataTypes.INTEGER,
    field: 'order_id',
    references: {
      model: ORDER_TABLE,
      key: 'id', // Esta debe ser siempre la llave primaria del model.
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL',
  },

  productId: {
    allowNull: false,
    type: DataTypes.INTEGER,
    field: 'product_id',
    references: {
      model: PRODUCT_TABLE,
      key: 'id', // Esta debe ser siempre la llave primaria del model.
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL',
  },

  amount: {
    allowNull: false,
    type: DataTypes.INTEGER,
  },

  date: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'date',
    defaultValue: DataTypes.NOW,
  },
};

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.createTable(USER_TABLE, userModel);
    await queryInterface.createTable(CATEGORY_TABLE, categoryModel);
    await queryInterface.createTable(PRODUCT_TABLE, productModel);
    await queryInterface.createTable(CUSTOMER_TABLE, customerModel);
    await queryInterface.createTable(ORDER_TABLE, orderModel);
    await queryInterface.createTable(ORDER_PRODUCT_TABLE, orderProductModel);
  },

  async down(queryInterface) {
    await queryInterface.dropTable(USER_TABLE);
    await queryInterface.dropTable(CATEGORY_TABLE);
    await queryInterface.dropTable(PRODUCT_TABLE);
    await queryInterface.dropTable(CUSTOMER_TABLE);
    await queryInterface.dropTable(ORDER_TABLE);
    await queryInterface.dropTable(ORDER_PRODUCT_TABLE);
  },
};
