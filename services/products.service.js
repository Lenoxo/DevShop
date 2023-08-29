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

  generateOne(data) {
    const newProduct = {
      id: faker.string.uuid(),
      ...data,
    };
    this.products.push(newProduct);
    return newProduct;
  }
  // Consulta de productos
  find() {
    return this.products;
  }

  findOne(id) {
    return this.products.find((product) => product.id === id);
  }
  // Edición de productos
  update(id, updatedData) {
    // Actualiza esto poniendo la validación del -1
    let index = this.products.findIndex((product) => product.id === id);
    if (index === -1) {
      throw new Error('Product Not Found');
    } else {
      const productData = this.products[index];
      this.products[index] = {
        ...productData,
        ...updatedData,
      };
      return {
        state: 'updated',
        data: this.products[index],
      };
    }
  }
  // Eliminación de productos
  delete(id) {
    const index = this.products.findIndex((product) => product.id === id);
    if (index === -1) {
      throw new Error('Product Not Found');
    } else {
      this.products.splice(index, 1);
      return {
        state: 'deleted',
        id,
      };
    }
  }
}

module.exports = ProductsService;
