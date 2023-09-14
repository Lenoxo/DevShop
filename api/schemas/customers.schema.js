const Joi = require('joi');

const id = Joi.number().min(1);
const userId = Joi.number().min(1);

const createCustomerSchema = Joi.object({
  id: id,
  userId: userId,
});

const updateCustomerSchema = Joi.object({
  id: id,
  userId: userId,
});
const getUserSchema = Joi.object({
  id: id.required(),
});
const deleteCustomerSchema = Joi.object({
  id: id.required(),
});

module.exports = {
  createCustomerSchema,
  updateCustomerSchema,
  getUserSchema,
  deleteCustomerSchema,
};
