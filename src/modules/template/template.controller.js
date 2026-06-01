const catchAsync = require('../../utils/catchAsync');
const { ApiResponse } = require('../../utils/apiResponse');
const templateService = require('./template.service');
const { buildTemplateFilter } = require('../../utils/queryBuilder');

const createTemplate = catchAsync(async (req, res) => {
  const template = await templateService.createTemplate(req.body);
  return ApiResponse.success(res, 201, 'Template created successfully', { template });
});

const getAllTemplates = catchAsync(async (req, res) => {
  const page = Math.max(parseInt(req.query.page, 10) || 1, 1);
  const limit = Math.max(parseInt(req.query.limit, 10) || 10, 1);
  const skip = (page - 1) * limit;
  const where = buildTemplateFilter(req.query);
  const templates = await templateService.getTemplates(where, skip, limit);
  const total = await templateService.countTemplates(where);

  return ApiResponse.success(res, 200, 'Templates retrieved successfully', {
    templates,
    pagination: { page, limit, total, totalPages: Math.ceil(total / limit) },
  });
});

const getTemplate = catchAsync(async (req, res, next) => {
  const template = await templateService.getTemplateById(parseInt(req.params.id, 10));

  if (!template) {
    return next(new (require('../../utils/AppError'))(404, 'Template not found'));
  }

  return ApiResponse.success(res, 200, 'Template retrieved successfully', { template });
});

const updateTemplate = catchAsync(async (req, res, next) => {
  const template = await templateService.updateTemplate(parseInt(req.params.id, 10), req.body);

  if (!template) {
    return next(new (require('../../utils/AppError'))(404, 'Template not found'));
  }

  return ApiResponse.success(res, 200, 'Template updated successfully', { template });
});

const deleteTemplate = catchAsync(async (req, res, next) => {
  const template = await templateService.deleteTemplate(parseInt(req.params.id, 10));

  if (!template) {
    return next(new (require('../../utils/AppError'))(404, 'Template not found'));
  }

  return ApiResponse.success(res, 200, 'Template deleted successfully', { template });
});

module.exports = { createTemplate, getAllTemplates, getTemplate, updateTemplate, deleteTemplate };
