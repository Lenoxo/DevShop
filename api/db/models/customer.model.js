const { Model, DataTypes } = require('sequelize');
const { USER_TABLE } = require('./user.model');

const CUSTOMER_TABLE = 'customers';

const customerSchema = {
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

class Customer extends Model {
  static associate(models) {
    this.belongsTo(models.User, { as: 'user' });
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
