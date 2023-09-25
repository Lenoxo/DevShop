const Joi = require('joi');

const id = Joi.number().integer().min(1);
const customerId = Joi.number().integer().min(1);
const productId = Joi.number().integer().min(1);
const orderId = Joi.number().integer().min(1);
const amount = Joi.number().integer().min(1);

const createOrderSchema = Joi.object({
  customerId: customerId,
});

const addItemSchema = Joi.object({
  productId: productId.required(),
  orderId: orderId.required(),
  amount: amount.required(),
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
  addItemSchema,
};
