const { User, userSchema } = require('./user.model');

// Función que recibe config y tambien hace un init
function initModel(sequelize) {
  User.init(userSchema, User.config(sequelize));
}

module.exports = initModel;
