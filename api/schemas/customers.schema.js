const Joi = require('joi');

const id = Joi.number().min(1);
const name = Joi.string().min(3).max(40);
const lastName = Joi.string().min(3);
const phone = Joi.string();
// const userId = Joi.number().min(1);
const email = Joi.string().email();
const password = Joi.string().min(3).max(40);
const role = Joi.string().min(5);

const createCustomerSchema = Joi.object({
  name: name.required(),
  lastName: lastName.required(),
  phone: phone.required(),
  // userId: userId.required(),
  user: Joi.object({
    name: name.required(),
    email: email.required(),
    password: password.required(),
    role: role,
  }).required(),
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
