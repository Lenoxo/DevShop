const express = require('express');
const usersService = require('../services/users.service');
const service = new usersService();
const {
  createUserSchema,
  deleteUserSchema,
  getUserSchema,
  updateUserSchema,
} = require('../schemas/users.schema');
const validatorHandler = require('../middlewares/validator.handler');
const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const usersList = await service.find();
    res.status(200).json(usersList);
  } catch (error) {
    next(error);
  }
});

router.get(
  '/:id',
  validatorHandler(getUserSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const user = await service.findOne(id);
      res.status(200).json(user);
    } catch (error) {
      next(error);
    }
  },
);

router.post(
  '/',
  validatorHandler(createUserSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const result = await service.createOne(body);
      res.status(201).json(result);
    } catch (error) {
      next(error);
    }
  },
);
router.patch(
  '/:id',
  validatorHandler(getUserSchema, 'params'),
  validatorHandler(updateUserSchema, 'body'),
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
router.delete(
  '/:id',
  validatorHandler(deleteUserSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const result = await service.delete(id);
      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  },
);

module.exports = router;
