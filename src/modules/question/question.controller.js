const catchAsync = require('../../utils/catchAsync');
const { ApiResponse } = require('../../utils/apiResponse');
const questionService = require('./question.service');

const createQuestion = catchAsync(async (req, res) => {
  const question = await questionService.createQuestion(req.body);
  return ApiResponse.success(res, 201, 'Question created successfully', { question });
});

const getAllQuestions = catchAsync(async (req, res) => {
  const page = Math.max(parseInt(req.query.page, 10) || 1, 1);
  const limit = Math.max(parseInt(req.query.limit, 10) || 10, 1);
  const skip = (page - 1) * limit;
  const filter = {};

  if (req.query.templateId) {
    filter.templateId = parseInt(req.query.templateId, 10);
  }

  const questions = await questionService.getQuestions(filter, skip, limit);
  const total = await questionService.countQuestions(filter);

  return ApiResponse.success(res, 200, 'Questions retrieved successfully', {
    questions,
    pagination: { page, limit, total, totalPages: Math.ceil(total / limit) },
  });
});

const getQuestion = catchAsync(async (req, res, next) => {
  const question = await questionService.getQuestionById(parseInt(req.params.id, 10));

  if (!question) {
    return next(new (require('../../utils/AppError'))(404, 'Question not found'));
  }

  return ApiResponse.success(res, 200, 'Question retrieved successfully', { question });
});

const updateQuestion = catchAsync(async (req, res, next) => {
  const question = await questionService.updateQuestion(parseInt(req.params.id, 10), req.body);

  if (!question) {
    return next(new (require('../../utils/AppError'))(404, 'Question not found'));
  }

  return ApiResponse.success(res, 200, 'Question updated successfully', { question });
});

const deleteQuestion = catchAsync(async (req, res, next) => {
  const question = await questionService.deleteQuestion(parseInt(req.params.id, 10));

  if (!question) {
    return next(new (require('../../utils/AppError'))(404, 'Question not found'));
  }

  return ApiResponse.success(res, 200, 'Question deleted successfully', { question });
});

const getQuestionsByTemplate = async (req, res, next) => {
  try {
    const questions = await questionService.getQuestionsByTemplate(
      req.params.templateId
    );

    return res.status(200).json({
      success: true,
      data: questions,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { createQuestion, getAllQuestions, getQuestion, updateQuestion, deleteQuestion, getQuestionsByTemplate };
