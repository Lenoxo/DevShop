const { faker } = require('@faker-js/faker');
const boom = require('@hapi/boom');
const pool = require('../libs/postgres.pool');

class ProductsService {
  constructor() {
    this.products = [];
    this.generate();
    this.pool = pool;
    pool.on('error', (err) => {
      console.error('An error occured with the database pool', err);
      process.exit(-1);
    });
  }

  // Generación de productos
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

  async generateOne(data) {
    const newProduct = {
      id: faker.string.uuid(),
      ...data,
    };
    this.products.push(newProduct);
    return newProduct;
  }
  // Consulta de productos
  async find() {
    const query = 'SELECT * FROM tasks';
    const response = await this.pool.query(query);
    return response.rows;
  }

  async findOne(id) {
    const product = this.products.find((product) => product.id === id);
    if (product === undefined) {
      throw boom.notFound('Product Not Found');
    } else {
      return product;
    }
  }
  // Edición de productos
  async update(id, updatedData) {
    // Actualiza esto poniendo la validación del -1
    let index = this.products.findIndex((product) => product.id === id);
    if (index === -1) {
      throw boom.notFound('Product Not Found');
    } else {
      const productData = this.products[index];
      this.products[index] = {
        // El spread operator aquí permite actualizar datos.
        ...productData,
        ...updatedData,
      };
      return {
        message: 'updated',
        data: this.products[index],
      };
    }
  }
  // Eliminación de productos
  async delete(id) {
    const index = this.products.findIndex((product) => product.id === id);
    if (index === -1) {
      throw boom.notFound('Product Not Found');
    } else {
      this.products.splice(index, 1);
      return {
        message: 'deleted',
        id,
      };
    }
  }
}

module.exports = ProductsService;
