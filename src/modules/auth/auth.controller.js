const generateToken = require('../../utils/generateToken');
const catchAsync = require('../../utils/catchAsync');
const { ApiResponse } = require('../../utils/apiResponse');
const authService = require('./auth.service');
const bcrypt = require('bcryptjs');
const AppError = require('../../utils/AppError');

const register = catchAsync(async (req, res, next) => {
  const user = await authService.createUser(req.body);
  const token = generateToken({ id: user.id, role: user.role });

  return ApiResponse.success(res, 201, 'User registered successfully', {
    user: { id: user.id, name: user.name, email: user.email, role: user.role },
    token,
  });
});

const login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;
  const user = await authService.getUserByEmail(email);

  if (!user || !(await bcrypt.compare(password, user.password))) {
    return next(new AppError(401, 'Invalid email or password'));
  }

  const token = generateToken({ id: user.id, role: user.role });

  return ApiResponse.success(res, 200, 'Login successful', {
    user: { id: user.id, name: user.name, email: user.email, role: user.role },
    token,
  });
});

module.exports = { register, login };
