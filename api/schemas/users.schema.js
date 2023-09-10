const Joi = require('joi');

// Estas validaciones están por fuera, para permitir usar .required de forma dinámica más adelante.
const id = Joi.number().min(1);
const name = Joi.string().min(3).max(40);
const email = Joi.string().email();
const password = Joi.string().min(3).max(40);
const image = Joi.string().uri();

// Justo aquí es de donde hablo de .required
const createUserSchema = Joi.object({
  name: name.required(),
  email: email.required(),
  password: password.required(),
  // image: image.required(),
});
const updateUserSchema = Joi.object({
  id: id,
  name: name,
  email: email,
  password: password,
  // image: image,
});
const deleteUserSchema = Joi.object({
  id: id.required(),
});
const getUserSchema = Joi.object({
  id: id.required(),
});

module.exports = {
  createUserSchema,
  updateUserSchema,
  deleteUserSchema,
  getUserSchema,
};
