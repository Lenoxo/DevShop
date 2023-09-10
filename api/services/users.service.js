const { faker } = require('@faker-js/faker');
const { models } = require('../libs/sequelize');
const boom = require('@hapi/boom');

class usersService {
  constructor() {}

  async find() {
    const response = await models.User.findAll();
    return response;
  }

  async findOne(id) {
    const user = await models.User.findByPk(id);
    if (!user) {
      throw boom.notFound('User Not Found');
    } else {
      return user;
    }
  }

  async createOne(data) {
    const response = await models.User.create(data);
    return response;
  }
  async update(id, editedData) {
    const user = await this.findOne(id);
    const response = await user.update(editedData);
    return response;
  }
  async delete(id) {
    const user = await this.findOne(id);
    await user.destroy(); // Permite borrar un registro de la DB.
    return { id };
  }
}

module.exports = usersService;
