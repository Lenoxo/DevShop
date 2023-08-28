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
  res.status(200).json(productsList);
});
// Este endpoint es solo de prueba, para mostrar como evitar un colapso de endpoints.
router.get('/filter', (req, res) => {
  res
    .status(200)
    .send('Si me puedes leer, hemos evitado un colapso de endpoints');
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  // Aquí dejo un '888' porque por defecto, el id viene como un string.
  if (id === '888') {
    res.status(404).json({
      message: 'Product Not Found',
    });
  } else {
    res.status(200).json({
      'product id': id,
      name: 'Producto de prueba',
      price: 68,
      category: 'others',
    });
  }
});

// Manejo con Post
router.post('/', (req, res) => {
  const body = req.body;
  res.status(201).json({
    state: 'created',
    data: body,
  });
});

// Manejo con patch (Actualización parcial)
router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  res.status(200).json({
    productId: id,
    state: 'updated',
    data: body,
  });
});

// Manejo con delete
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  res.status(200).json({
    productId: id,
    state: 'deleted',
  });
});

module.exports = router;
