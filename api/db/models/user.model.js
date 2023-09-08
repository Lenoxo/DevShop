const { Model, Sequelize, DataTypes } = require('sequelize');

const USER_TABLE = 'users';

const userSchema = {
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
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: DataTypes.NOW,
  },
};

class User extends Model {
  static associate() {
    // Logica más adelante...
  }
  // sequelize aquí hace referencia a la conexión que se recibe.
  static config(sequelize) {
    return {
      sequelize,
      tableName: USER_TABLE,
      modelName: 'User',
      timestamps: false,
    };
  }
}

module.exports = {
  USER_TABLE,
  User,
  userSchema,
};
