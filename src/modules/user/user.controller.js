const catchAsync = require('../../utils/catchAsync');
const { ApiResponse } = require('../../utils/apiResponse');
const userService = require('./user.service');

const getCurrentUser = catchAsync(async (req, res) => {
  const user = req.user;
  return ApiResponse.success(res, 200, 'Current user retrieved', { user });
});

const getUsers = catchAsync(async (req, res) => {
  const page = Math.max(parseInt(req.query.page, 10) || 1, 1);
  const limit = Math.max(parseInt(req.query.limit, 10) || 10, 1);
  const skip = (page - 1) * limit;
  const users = await userService.getAllUsers(skip, limit);
  const total = await userService.getUserCount();

  return ApiResponse.success(res, 200, 'Users retrieved successfully', {
    users,
    pagination: { page, limit, total, totalPages: Math.ceil(total / limit) },
  });
});

const getUser = catchAsync(async (req, res, next) => {
  const user = await userService.getUserById(parseInt(req.params.id, 10));

  if (!user) {
    return next(new (require('../../utils/AppError'))(404, 'User not found'));
  }

  return ApiResponse.success(res, 200, 'User retrieved successfully', { user });
});

module.exports = { getCurrentUser, getUsers, getUser };
