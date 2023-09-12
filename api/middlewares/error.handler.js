function logErrors(error, req, res, next) {
  const { name, parent, fields } = error;
  console.error(name);
  next(error);
}

function boomErrorHandler(error, req, res, next) {
  if (error.isBoom) {
    const { output } = error;
    res.status(output.statusCode).json(output.payload);
  } else {
    next(error);
  }
}

function errorHandler(error, req, res, next) {
  res.status(500).json({
    message: error.message,
    stack: error.stack,
  });
}

function sequelizeErrorHandler(error, req, res, next) {
  const { name, parent, fields } = error;
  if (false) {
    // console.log(name), console.log(parent), console.log(fields);
  } else {
    next(error);
  }
}

module.exports = {
  errorHandler,
  logErrors,
  boomErrorHandler,
  sequelizeErrorHandler,
};
