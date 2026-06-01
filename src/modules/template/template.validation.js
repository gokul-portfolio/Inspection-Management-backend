const { body } = require('express-validator');

const createTemplateValidation = [
  body('name').trim().notEmpty().withMessage('Template name is required'),
  body('description').optional().isString(),
];

const updateTemplateValidation = [
  body('name').optional().trim().notEmpty().withMessage('Template name cannot be empty'),
  body('description').optional().isString(),
];

module.exports = { createTemplateValidation, updateTemplateValidation };
