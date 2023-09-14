const customersService = require('../services/customers.service');
const service = new customersService();
const {
  createCustomerSchema,
  deleteCustomerSchema,
  getUserSchema,
  updateCustomerSchema,
} = require('../schemas/customers.schema');
const validatorHandler = require('../middlewares/validator.handler');
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
  const customers = await service.find();
  res.status(200).json({
    customers,
  });
});
router.get(
  '/:id',
  validatorHandler(getUserSchema, 'params'),
  async (req, res) => {
    const { id } = req.params;
    const customer = await service.findOne(id);
    res.status(200).json({
      customer,
    });
  },
);
router.post(
  '/',
  validatorHandler(createCustomerSchema, 'body'),
  async (req, res) => {
    const body = req.body;
    const result = await service.create(body);
    res.status(201).json({
      result,
    });
  },
);
router.patch(
  '/:id',
  validatorHandler(getUserSchema, 'params'),
  validatorHandler(updateCustomerSchema, 'body'),
  async (req, res) => {
    const { id } = req.params;
    const body = req.body;
    const result = await service.update(id, body);
    res.status(200).json({
      result,
    });
  },
);
router.delete(
  '/:id',
  validatorHandler(deleteCustomerSchema, 'params'),
  async (req, res) => {
    const { id } = req.params;
    const result = await service.delete(id);
    res.status(200).json({
      result,
    });
  },
);

module.exports = router;
