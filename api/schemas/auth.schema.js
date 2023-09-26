const Joi = require('joi');

const token = Joi.string().required();
const newPassword = Joi.string().min(8).max(40).required();

const updatePasswordSchema = Joi.object({
  token,
  newPassword,
});

module.exports = {
  updatePasswordSchema,
};
