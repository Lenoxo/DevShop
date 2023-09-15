const Joi = require('joi');

// Estas validaciones están por fuera, para permitir usar .required de forma dinámica más adelante.
const id = Joi.number().min(1);
const name = Joi.string().min(3).max(40);
const description = Joi.string().min(10);
const price = Joi.number().min(5);
const image = Joi.string().uri();
const categoryId = Joi.number().min(1);

// Justo aquí es de donde hablo de .required
const createProductSchema = Joi.object({
  name: name.required(),
  price: price.required(),
  image: image.required(),
  description: description.required(),
  categoryId: categoryId.required(),
});
const updateProductSchema = Joi.object({
  name: name,
  price: price,
  image: image,
  description: description,
  categoryId: categoryId,
});
const deleteProductSchema = Joi.object({
  id: id.required(),
});
const getProductSchema = Joi.object({
  id: id.required(),
});

module.exports = {
  createProductSchema,
  updateProductSchema,
  deleteProductSchema,
  getProductSchema,
};
