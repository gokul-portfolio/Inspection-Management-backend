const express = require('express');
const router = express.Router();

const { protect } = require('../../middleware/auth.middleware');
const { authorizeRole } = require('../../middleware/role.middleware');
const validateRequest = require('../../middleware/validate.middleware');

const questionController = require('./question.controller');

const {
  createQuestionValidation,
  updateQuestionValidation,
} = require('./question.validation');

router.use(protect);

router.get('/', questionController.getAllQuestions);


router.get(
  '/template/:templateId',
  questionController.getQuestionsByTemplate
);

router.get('/:id', questionController.getQuestion);


router.post(
  '/',
  authorizeRole('admin', 'user'),
  createQuestionValidation,
  validateRequest,
  questionController.createQuestion
);


router.put(
  '/:id',
  authorizeRole('admin', 'user'),
  updateQuestionValidation,
  validateRequest,
  questionController.updateQuestion
);

router.delete(
  '/:id',
  authorizeRole('admin', 'user'),
  questionController.deleteQuestion
);

module.exports = router;