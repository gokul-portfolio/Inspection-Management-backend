const { body } = require('express-validator');

const createCorrectiveActionValidation = [
  body('title').trim().notEmpty().withMessage('Title is required'),
  body('description').trim().notEmpty().withMessage('Description is required'),
  body('priority').trim().notEmpty().withMessage('Priority is required'),
  body('status').trim().notEmpty().withMessage('Status is required'),
  body('dueDate').optional().isISO8601().toDate().withMessage('Due date must be a valid date'),
];

const updateCorrectiveActionValidation = [
  body('title').optional().trim().notEmpty().withMessage('Title cannot be empty'),
  body('description').optional().trim().notEmpty().withMessage('Description cannot be empty'),
  body('priority').optional().trim().notEmpty().withMessage('Priority cannot be empty'),
  body('status').optional().trim().notEmpty().withMessage('Status cannot be empty'),
  body('dueDate').optional().isISO8601().toDate().withMessage('Due date must be a valid date'),
];

module.exports = { createCorrectiveActionValidation, updateCorrectiveActionValidation };
