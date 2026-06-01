const { ApiResponse } = require('../utils/apiResponse');
const AppError = require('../utils/AppError');

const notFoundHandler = (req, res, next) => {
  next(new AppError(404, 'Route not found'));
};

const errorHandler = (err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  const errors = err.errors || [];

  if (process.env.NODE_ENV !== 'production') {
    console.error(err);
  }

  return ApiResponse.error(res, statusCode, message, errors);
};

module.exports = { notFoundHandler, errorHandler };
