const Joi = require('joi');

// Estas validaciones están por fuera, para permitir usar .required de forma dinámica más adelante.
const id = Joi.string().uuid();
const name = Joi.string().alphanum().min(3).max(40);
const price = Joi.number().min(5);

// Justo aquí es de donde hablo de .required
const createProductSchema = Joi.object({
  name: name.required(),
  price: price.required(),
});
const updateProductSchema = Joi.object({
  name: name.required(),
  price: price.required(),
});
const deleteProductSchema = Joi.object({
  id: id.required(),
});

module.exports = {
  createProductSchema,
  updateProductSchema,
  deleteProductSchema,
};
