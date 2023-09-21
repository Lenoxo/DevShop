const Joi = require('joi');

// Estas validaciones están por fuera, para permitir usar .required de forma dinámica más adelante.
const id = Joi.number().min(1);
const name = Joi.string().min(3).max(40);
const description = Joi.string().min(10);
const price = Joi.number().min(1);
const image = Joi.string().uri();
const categoryId = Joi.number().min(1);
const limit = Joi.number().integer();
const offset = Joi.number().integer();
const price_min = Joi.number().integer();
const price_max = Joi.number().integer();

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

const queryProductSchema = Joi.object({
  limit,
  offset,
  price,
  price_min,
  // Esta es una restricción, que pide que se mande junto a un price_min un price_max
  price_max: price_max.when('price_min', {
    is: Joi.number().integer().required(),
    then: Joi.required(),
  }),
});

module.exports = {
  createProductSchema,
  updateProductSchema,
  deleteProductSchema,
  getProductSchema,
  queryProductSchema,
};
