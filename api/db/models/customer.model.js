const { Model, DataTypes } = require('sequelize');

const CUSTOMER_TABLE = 'customers';

const customerSchema = {
  id: {
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.INTEGER,
  },
  userId: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: 'User',
      key: 'id', // Esta debe ser siempre la llave primaria del model.
    },
  },
};

class Customer extends Model {
  static associate() {
    // Logica más adelante...
  }
  // sequelize aquí hace referencia a la conexión que se recibe.
  static config(sequelize) {
    return {
      sequelize,
      tableName: CUSTOMER_TABLE,
      modelName: 'Customer',
      timestamps: false,
    };
  }
}

module.exports = {
  CUSTOMER_TABLE,
  Customer,
  customerSchema,
};
