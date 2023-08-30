const express = require('express');
const router = express.Router();
const ProductsService = require('../services/products.service');
const service = new ProductsService();
const validatorHandler = require('../middlewares/validator.handler');
const {
  createProductSchema,
  deleteProductSchema,
  getProductSchema,
  updateProductSchema,
} = require('../schemas/products.schema');

// Manejo con get.
router.get('/', async (req, res) => {
  const products = await service.find();
  res.status(200).json(products);
});
// Este endpoint es solo de prueba, para mostrar como evitar un colapso de endpoints.
router.get('/filter', async (req, res) => {
  res
    .status(200)
    .send('Si me puedes leer, hemos evitado un colapso de endpoints');
});

router.get(
  '/:id',
  validatorHandler(getProductSchema, 'params'),
  async (req, res, next) => {
    const { id } = req.params;
    try {
      const result = await service.findOne(id);
      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  },
);

// Manejo con Post
router.post(
  '/',
  validatorHandler(createProductSchema, 'body'),
  async (req, res) => {
    const body = req.body;
    const newProduct = await service.generateOne(body);
    res.status(201).json({
      state: 'created',
      data: newProduct,
    });
  },
);

// Manejo con patch (Actualización parcial)
router.patch(
  '/:id',
  validatorHandler(getProductSchema, 'params'),
  validatorHandler(updateProductSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const result = await service.update(id, body);
      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  },
);

// Manejo con delete
router.delete('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await service.delete(id);
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
