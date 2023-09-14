const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');

class customersService {
  constructor() {
    this.customers = [];
  }

  async find() {
    const response = await models.Customer.findAll();
    return response;
  }
  async findOne(id) {
    const customer = await models.Customer.findByPk(id);

    if (!customer) {
      throw boom.notFound('Customer Not Found');
    } else {
      return customer;
    }
  }
  async create(customerData) {
    const newCustomer = await models.Customer.create(customerData);
    return newCustomer;
  }
  async update(id, editedData) {
    const customer = await this.findOne(id);
    const response = await customer.update(data);
    return response;
  }
  async delete(id) {
    const customer = await this.findOne(id);
    await customer.destroy();
    return { id };
  }
}

module.exports = customersService;
