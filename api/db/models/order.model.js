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

  // Este tipo de dato, solo existe en Node. No se escribe en la DB.
  totalPrice: {
    type: DataTypes.VIRTUAL,
    // Este get, usando reduce, es util para operaciones con pocos elementos, pero no escala bien.
    get() {
      if (this.items && this.items.length > 0) {
        return this.items.reduce((total, item) => {
          return (total = item.price * item.OrderProduct.amount);
        });
      } else {
        return 0;
      }
    },
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

class Order extends Model {
  static associate(models) {
    this.belongsTo(models.Customer, { as: 'customer' });
    // Esta relación es muchos a muchos (N:N)
    this.belongsToMany(models.Product, {
      as: 'items',
      through: models.OrderProduct,
      foreignKey: 'orderId',
      otherKey: 'productId',
    });
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
