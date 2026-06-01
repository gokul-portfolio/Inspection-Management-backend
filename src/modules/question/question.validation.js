const { body } = require('express-validator');

const createQuestionValidation = [
  body('templateId').isInt().withMessage('Template ID is required'),
  body('questionText').trim().notEmpty().withMessage('Question text is required'),
  body('fieldType').trim().notEmpty().withMessage('Field type is required'),
  body('required').optional().isBoolean().withMessage('Required must be a boolean'),
  body('options')
  .optional()
  .isArray()
  .withMessage('Options must be an array'),
];

const updateQuestionValidation = [
  body('questionText').optional().trim().notEmpty().withMessage('Question text cannot be empty'),
  body('fieldType').optional().trim().notEmpty().withMessage('Field type cannot be empty'),
  body('required').optional().isBoolean().withMessage('Required must be a boolean'),
  body('options')
  .optional()
  .isArray()
  .withMessage('Options must be an array'),
];

module.exports = { createQuestionValidation, updateQuestionValidation };
