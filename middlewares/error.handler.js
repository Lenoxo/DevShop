function logErrors(error, req, res, next) {
  console.error(error);
  next(error);
}

function errorHandler(error, req, res, next) {
  // Más adelante, se corregirá este status code hardcodeado.
  res.status(500).json({
    message: error.message,
    stack: error.stack,
  });
}

module.exports = { errorHandler, logErrors };
