const AppError = require('../utils/AppError');

const authorizeRole = (...allowedRoles) => (req, res, next) => {
  if (!req.user || !allowedRoles.includes(req.user.role)) {
    return next(new AppError(403, 'Forbidden'));
  }
  next();
};

module.exports = { authorizeRole };
