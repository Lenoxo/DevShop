const { Model, DataTypes } = require('sequelize');

const { CUSTOMER_TABLE } = require('./customer.model');

const ORDER_TABLE = 'orders';

const orderSchema = {
  id: {
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.INTEGER,
  },
  // totalProducts: {
  //   allowNull: false,
  //   field: 'total_products',
  //   type: DataTypes.INTEGER,
  // },

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

class Order extends Model {
  static associate(models) {
    this.belongsTo(models.Customer, { as: 'customer' });
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
