const express = require('express');
const router = express.Router();
const passport = require('passport');
const OrdersService = require('../services/orders.service');
const service = new OrdersService();
const validatorHandler = require('../middlewares/validator.handler');
const {
  createOrderSchema,
  getOrderSchema,
  addItemSchema,
} = require('../schemas/orders.schema');

router.get('/', async (req, res, next) => {
  try {
    const orders = await service.find();
    res.status(200).json(orders);
  } catch (error) {
    next(error);
  }
});

router.get(
  '/:id',
  validatorHandler(getOrderSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const order = await service.findOne(id);
      res.status(200).json(order);
    } catch (error) {
      next(error);
    }
  },
);

router.post(
  '/',
  passport.authenticate('jwt', { session: false }),
  validatorHandler(createOrderSchema, 'body'),
  async (req, res, next) => {
    try {
      const userId = req.user.sub;
      const newOrder = await service.create(userId);
      res.status(201).json(newOrder);
    } catch (error) {
      next(error);
    }
  },
);

router.post(
  '/add-item',
  validatorHandler(addItemSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newItem = await service.addItem(body);
      res.status(201).json(newItem);
    } catch (error) {
      next(error);
    }
  },
);

module.exports = router;
