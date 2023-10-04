const { Strategy, ExtractJwt } = require('passport-jwt');
const config = require('../../../config/config');

const secret = config.jwtSecret;

const options = {
  // El método de fromAuthHeaderAsBearerToken extrae el token de los headers de la request.
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: secret,
};

const jwtStrategy = new Strategy(options, (payload, done) => {
  return done(null, payload);
});

module.exports = jwtStrategy;
