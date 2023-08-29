const express = require('express');
const router = express.Router();
const ProductsService = require('../services/products.service');
const service = new ProductsService();
// Manejo con get.
router.get('/', (req, res) => {
  const products = service.find();
  res.status(200).json(products);
});
// Este endpoint es solo de prueba, para mostrar como evitar un colapso de endpoints.
router.get('/filter', (req, res) => {
  res
    .status(200)
    .send('Si me puedes leer, hemos evitado un colapso de endpoints');
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  res.json(service.findOne(id));
});

// Manejo con Post
router.post('/', (req, res) => {
  const body = req.body;
  const newProduct = service.generateOne(body);
  res.status(201).json({
    state: 'created',
    data: newProduct,
  });
});

// Manejo con patch (Actualización parcial)
router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const result = service.update(id, body);
  res.status(200).json(result);
});

// Manejo con delete
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const result = service.delete(id);
  res.status(200).json(result);
});

module.exports = router;
