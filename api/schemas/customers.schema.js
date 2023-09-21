const Joi = require('joi');

const { createUserSchema } = require('./users.schema');

const id = Joi.number().min(1);
const name = Joi.string().min(3).max(40);
const lastName = Joi.string().min(3);
const phone = Joi.string();

const createCustomerSchema = Joi.object({
  name: name.required(),
  lastName: lastName.required(),
  phone: phone.required(),
  user: createUserSchema.required(),
});

const updateCustomerSchema = Joi.object({
  name: name,
  lastName: lastName,
  phone: phone,
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
