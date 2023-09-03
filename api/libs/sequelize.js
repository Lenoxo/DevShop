const { Sequelize } = require('sequelize');
const config = require('../config/config');

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

const sequelize = new Sequelize(URI, {
  dialect: 'postgres',
  // Esta es una nueva sintaxis que se maneja en la versión más reciente de sequelize.
  logging: (query) => {
    // Se recibe el query en vez de poner true.
    console.log(query);
  },
  // Forma antigua:
  // logging: true
});

module.exports = sequelize;
