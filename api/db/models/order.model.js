const { Model, DataTypes } = require('sequelize');

const ORDER_TABLE = 'orders';

const orderSchema = {
  id: {
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.INTEGER,
  },
  totalProducts: {
    allowNull: false,
    field: 'total_products',
    type: DataTypes.INTEGER,
  },
  date: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'date',
    defaultValue: DataTypes.NOW,
  },
};

class Order extends Model {
  static associate() {
    // Logica más adelante...
  }
  // sequelize aquí hace referencia a la conexión que se recibe.
  static config(sequelize) {
    return {
      sequelize,
      tableName: ORDER_TABLE,
      modelName: 'Order',
      timestamps: false,
    };
  }
}

module.exports = {
  ORDER_TABLE,
  Order,
  orderSchema,
};
