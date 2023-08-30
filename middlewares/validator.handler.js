const boom = require('@hapi/boom');

function validatorHandler(schema, property) {
  // Esta función anonima es un clojure. (Dato Curioso)
  return (req, res, next) => {
    const data = req[property];
    // abortEarly en false permite enviar en un solo mensaje, todos los errores detectados por Joi.
    const { error } = schema.validate(data, { abortEarly: false });
    if (error) {
      next(boom.badRequest(error));
    } else {
      next();
    }
  };
}

module.exports = validatorHandler;
