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

function checkAdminRole(req, res, next) {
  const { role } = req.user;
  if (role === 'admin') {
    next();
  } else {
    throw boom.unauthorized('Role Not Authorized');
  }
}

// Al usar el spread operator, los argumentos que reciba checkRoles, se guardan dentro de un array.
function checkRoles(...roles) {
  // Este es otro caso de uso de clojures.
  return (req, res, next) => {
    const { role } = req.user;
    if (roles.includes(role)) {
      next();
    } else {
      throw boom.unauthorized('Role Not Authorized');
    }
  };
}

module.exports = { checkApiKey, checkRoles };
