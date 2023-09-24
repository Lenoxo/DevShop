const config = require('../config/config');

const boom = require('@hapi/boom');

function checkApiKey(req, res, next) {
  // Siempre se convierten a minusculas los parametros que vienen de los headers.
  const apiKey = req.headers['api'];
  if (apiKey === config.apiKey) {
    next();
  } else {
    throw boom.unauthorized('Invalid API Key');
  }
}

module.exports = checkApiKey;
