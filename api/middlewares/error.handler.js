const { ValidationError } = require('sequelize');

function logErrors(error, req, res, next) {
  console.error(error);
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

function sequelizeErrorHandler(error, req, res, next) {
  if (error instanceof ValidationError) {
    // const { fields, parent } = error;
    // res.status(409).json({
    //   message: 'Conflict with sent data',
    //   fields,
    //   details: parent.detail,
    // });
    const statusCode = 409;
    res.status(statusCode).json({
      statusCode,
      message: error.message,
      details: error.errors,
    });
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

module.exports = {
  errorHandler,
  logErrors,
  boomErrorHandler,
  sequelizeErrorHandler,
};
