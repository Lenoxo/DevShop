const { Strategy } = require('passport-local');
const boom = require('@hapi/boom');
const bcrypt = require('bcrypt');

const UsersService = require('../../../services/users.service');
const service = new UsersService();

const localStrategy = new Strategy(
  // usernameField permite renombrar el campo que se valida en la request recibida.
  { usernameField: 'email' },
  async (email, password, done) => {
    try {
      const user = await service.findByEmail(email);
      if (!user) {
        done(boom.unauthorized(), false);
      }
      const isMatch = bcrypt.compare(password, user.password);
      if (!isMatch) {
        done(boom.unauthorized(), false);
      }
      // Borro del user el hash puesto en password, para hacerlo seguro.
      delete user.dataValues.password;
      done(null, user);
    } catch (error) {
      done(error, false);
    }
  },
);

module.exports = localStrategy;
