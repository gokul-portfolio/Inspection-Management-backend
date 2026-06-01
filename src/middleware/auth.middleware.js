const jwt = require('jsonwebtoken');
const AppError = require('../utils/AppError');
const prisma = require('../config/prisma');
const { jwtSecret } = require('../config/env');

const protect = async (req, res, next) => {
  try {
    const authorization = req.headers.authorization;

    if (!authorization || !authorization.startsWith('Bearer ')) {
      throw new AppError(401, 'Authorization token is missing or invalid');
    }

    const token = authorization.split(' ')[1];
    const decoded = jwt.verify(token, jwtSecret);
    const user = await prisma.user.findUnique({ where: { id: decoded.id } });

    if (!user) {
      throw new AppError(401, 'User not found');
    }

    req.user = user;
    next();
  } catch (error) {
    next(new AppError(401, 'Unauthorized access'));
  }
};

module.exports = { protect };
