const { Model, Sequelize, DataTypes } = require('sequelize');

const USER_TABLE = 'users';

const userSchema = {
  id: {
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    dataType: DataTypes.INTEGER,
  },
  email: {
    allowNull: false,
    unique: true,
    dataType: DataTypes.STRING,
  },
  password: {
    allowNull: false,
    dataType: DataTypes.STRING,
  },
  createdAt: {
    allowNull: false,
    dataType: DataTypes.DATE,
    field: 'created_at',
    defaultValue: DataTypes.NOW,
  },
};

class User extends Model {
  static associate() {
    // Logica más adelante...
  }

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
