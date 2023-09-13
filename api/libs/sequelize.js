const { Sequelize } = require('sequelize');
const config = require('../config/config');
const initModels = require('../db/models');

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URI = `mysql://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

const sequelize = new Sequelize(URI, {
  dialect: 'mysql',
  // Esta es una nueva sintaxis que se maneja en la versión más reciente de sequelize.
  logging: (query) => {
    // Se recibe el query en vez de poner true.
    console.log(query);
  },
  // Forma antigua:
  // logging: true
});

initModels(sequelize);

sequelize.sync();

module.exports = sequelize;