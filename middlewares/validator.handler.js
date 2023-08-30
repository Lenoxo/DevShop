const boom = require('@hapi/boom');

function validatorHandler(schema, property) {
  // Esta función anonima es un clojure. (Dato Curioso)
  return (req, res, next) => {
    const data = req[property];
    const { error } = schema.validate(data);
    if (error) {
      next(boom.badRequest(error));
    } else {
      next();
    }
  };
}

module.exports = validatorHandler;
