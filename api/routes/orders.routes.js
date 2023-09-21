const express = require('express');
const router = express.Router();

const OrdersService = require('../services/orders.service');
const service = new OrdersService();
const validatorHandler = require('../middlewares/validator.handler');
const {
  createOrderSchema,
  getOrderSchema,
  addItemSchema,
} = require('../schemas/orders.schema');

router.get('/', async (req, res) => {
  const products = await service.find();
  res.status(200).json(products);
});

router.get(
  '/:id',
  validatorHandler(getOrderSchema, 'params'),
  async (req, res) => {
    const { id } = req.params;
    const order = await service.findOne(id);
    res.status(200).json({
      order,
    });
  },
);

router.post(
  '/',
  validatorHandler(createOrderSchema, 'body'),
  async (req, res) => {
    const body = req.body;
    const newOrder = await service.create(body);
    res.status(201).json({
      newOrder,
    });
  },
);

router.post(
  '/add-item',
  validatorHandler(addItemSchema, 'body'),
  async (req, res) => {
    const body = req.body;
    const newItem = await service.addItem(body);
    res.status(201).json(newItem);
  },
);

module.exports = router;
