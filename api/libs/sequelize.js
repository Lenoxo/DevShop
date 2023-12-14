const { Sequelize } = require('sequelize');
const config = require('../config/config');
const initModels = require('../db/models');

let URI = '';

let options = {
  dialect: 'postgres',
  // Esta es una nueva sintaxis que se maneja en la versión más reciente de sequelize.
  logging: (query) => {
    // Se recibe el query en vez de poner true.
    console.log(query);
  },
  // Forma antigua:
  // logging: true
};

if (config.isProd) {
  URI = config.dbUrl;
  options.logging = false;
} else {
  const USER = encodeURIComponent(config.dbUser);
  const PASSWORD = encodeURIComponent(config.dbPassword);
  URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;
}

const sequelize = new Sequelize(URI, options);

initModels(sequelize);

// El uso de sequelize.sync no es viable para producción, es mejor usar migraciones.
// sequelize.sync();

module.exports = sequelize;
