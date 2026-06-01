const catchAsync = require('../../utils/catchAsync');
const { ApiResponse } = require('../../utils/apiResponse');
const correctiveActionService = require('./correctiveAction.service');

const createCorrectiveAction = catchAsync(async (req, res) => {
  const action = await correctiveActionService.createCorrectiveAction(req.body);
  return ApiResponse.success(res, 201, 'Corrective action created successfully', { action });
});

const getCorrectiveActions = catchAsync(async (req, res) => {
  const page = Math.max(parseInt(req.query.page, 10) || 1, 1);
  const limit = Math.max(parseInt(req.query.limit, 10) || 10, 1);
  const skip = (page - 1) * limit;
  const filter = {};

  if (req.query.status) {
    filter.status = req.query.status;
  }

  if (req.query.priority) {
    filter.priority = req.query.priority;
  }

  const actions = await correctiveActionService.getCorrectiveActions(filter, skip, limit);
  const total = await correctiveActionService.countCorrectiveActions(filter);

  return ApiResponse.success(res, 200, 'Corrective actions retrieved successfully', {
    actions,
    pagination: { page, limit, total, totalPages: Math.ceil(total / limit) },
  });
});

const getCorrectiveAction = catchAsync(async (req, res, next) => {
  const action = await correctiveActionService.getCorrectiveActionById(parseInt(req.params.id, 10));

  if (!action) {
    return next(new (require('../../utils/AppError'))(404, 'Corrective action not found'));
  }

  return ApiResponse.success(res, 200, 'Corrective action retrieved successfully', { action });
});

const updateCorrectiveAction = catchAsync(async (req, res, next) => {
  const action = await correctiveActionService.updateCorrectiveAction(parseInt(req.params.id, 10), req.body);

  if (!action) {
    return next(new (require('../../utils/AppError'))(404, 'Corrective action not found'));
  }

  return ApiResponse.success(res, 200, 'Corrective action updated successfully', { action });
});

const deleteCorrectiveAction = catchAsync(async (req, res, next) => {
  const action = await correctiveActionService.deleteCorrectiveAction(parseInt(req.params.id, 10));

  if (!action) {
    return next(new (require('../../utils/AppError'))(404, 'Corrective action not found'));
  }

  return ApiResponse.success(res, 200, 'Corrective action deleted successfully', { action });
});

module.exports = { createCorrectiveAction, getCorrectiveActions, getCorrectiveAction, updateCorrectiveAction, deleteCorrectiveAction };
