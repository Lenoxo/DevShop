const boom = require('@hapi/boom');
const bcrypt = require('bcrypt');
const { models } = require('../libs/sequelize');

class customersService {
  constructor() {
    this.customers = [];
  }

  async find() {
    const response = await models.Customer.findAll({
      include: ['user'],
    });
    return response;
  }
  async findOne(id) {
    const customer = await models.Customer.findByPk(id, {
      include: ['user'],
    });

    if (!customer) {
      throw boom.notFound('Customer Not Found');
    } else {
      return customer;
    }
  }
  async create(customerData) {
    const userPassword = customerData.user.password;
    const hash = await bcrypt.hash(userPassword, 10);
    const updatedData = {
      ...customerData,
      user: {
        ...customerData.user,
        password: hash,
      },
    };
    const newCustomer = await models.Customer.create(updatedData, {
      include: ['user'],
    });
    return newCustomer;
  }
  async update(id, editedData) {
    const customer = await this.findOne(id);
    const response = await customer.update(editedData);
    return response;
  }
  async delete(id) {
    const customer = await this.findOne(id);
    await customer.destroy();
    return { id };
  }
}

module.exports = customersService;
