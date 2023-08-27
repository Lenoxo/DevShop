const express = require('express');
const { faker } = require('@faker-js/faker');
const router = express.Router();

// Manejo con get.
router.get('/', (req, res) => {
  let productsList = [];
  const { size } = req.query;
  const limit = size || 10;
  // Este bucle genera productos dependiendo del valor de limit.
  for (let i = 0; i < limit; i++) {
    productsList.push({
      name: faker.commerce.productName(),
      price: faker.commerce.price(),
      image: faker.image.url(),
    });
  }
  res.json(productsList);
});
// Este endpoint es solo de prueba, para mostrar como evitar un colapso de endpoints.
router.get('/filter', (req, res) => {
  res.send('Si me puedes leer, hemos evitado un colapso de endpoints');
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    'product id': id,
    name: 'Producto de prueba',
    price: 68,
    category: 'others',
  });
});

// Manejo con Post
router.post('/', (req, res) => {
  const body = req.body;
  res.json({
    state: 'created',
    data: body,
  });
});

module.exports = router;
