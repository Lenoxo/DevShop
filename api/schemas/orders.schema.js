const Joi = require('joi');

const id = Joi.number().integer().min(1);
const customerId = Joi.number().integer().min(1);

const createOrderSchema = Joi.object({
  customerId: customerId.required(),
});

const updateOrderSchema = Joi.object({
  // Lógica más adelante...
});
const getOrderSchema = Joi.object({
  id: id.required(),
});
const deleteOrderSchema = Joi.object({
  id: id.required(),
});

module.exports = {
  createOrderSchema,
  updateOrderSchema,
  getOrderSchema,
  deleteOrderSchema,
};
