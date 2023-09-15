const { faker } = require('@faker-js/faker');
const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');

class ProductsService {
  constructor() {}

  // Generación de productos (Por el momento sin usar)
  generate() {
    const limit = 100;
    // Este bucle genera productos dependiendo del valor de limit.
    for (let i = 0; i < limit; i++) {
      this.products.push({
        id: faker.string.uuid(),
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        image: faker.image.url(),
      });
    }
  }

  async create(data) {
    const newProduct = await models.Product.create(data);
    return newProduct;
  }
  // Consulta de productos
  async find() {
    const products = await models.Product.findAll({ include: 'category' });
    return products;
  }

  async findOne(id) {
    const product = await models.Product.findByPk(id, {
      include: ['category'],
    });
    if (!product) {
      throw boom.notFound('Product Not Found');
    } else {
      return product;
    }
  }
  // Edición de productos
  async update(id, changes) {
    const product = await this.findOne(id);
    const response = await product.update(changes);
    return response;
  }
  // Eliminación de productos
  async delete(id) {
    const product = await this.findOne(id);
    product.destroy();
    return { id };
  }
}

module.exports = ProductsService;
