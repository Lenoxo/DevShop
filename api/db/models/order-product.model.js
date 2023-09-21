const { Model, DataTypes } = require('sequelize');

const { ORDER_TABLE } = require('./order.model');
const { PRODUCT_TABLE } = require('./product.model');

const ORDER_PRODUCT_TABLE = 'orders_products';

const orderProductSchema = {
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

class OrderProduct extends Model {
  static associate() {}
  // sequelize aquí hace referencia a la conexión que se recibe.
  static config(sequelize) {
    return {
      sequelize,
      tableName: ORDER_PRODUCT_TABLE,
      modelName: 'OrderProduct',
      timestamps: false,
    };
  }
}

module.exports = {
  ORDER_PRODUCT_TABLE,
  OrderProduct,
  orderProductSchema,
};
