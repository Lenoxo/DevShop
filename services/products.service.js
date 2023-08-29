const { faker } = require('@faker-js/faker');

class ProductsService {
  constructor() {
    this.products = [];
    this.generate();
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
  // Consulta de productos
  find() {
    return this.products;
  }

  findOne(productId) {
    // return this.products[productId]
    return this.products.find((product) => product.id === productId);
  }
  // Edición de productos
  update() {}
  // Eliminación de productos
  delete() {}
}

module.exports = ProductsService;
