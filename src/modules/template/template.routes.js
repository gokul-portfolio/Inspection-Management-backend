const express = require('express');
const router = express.Router();
const { protect } = require('../../middleware/auth.middleware');
const { authorizeRole } = require('../../middleware/role.middleware');
const validateRequest = require('../../middleware/validate.middleware');
const templateController = require('./template.controller');
const { createTemplateValidation, updateTemplateValidation } = require('./template.validation');

router.use(protect);
router.get('/', templateController.getAllTemplates);
router.post('/', authorizeRole('admin', 'user'), createTemplateValidation, validateRequest, templateController.createTemplate);
router.get('/:id', templateController.getTemplate);
router.put('/:id', authorizeRole('admin', 'user'), updateTemplateValidation, validateRequest, templateController.updateTemplate);
router.delete('/:id', authorizeRole('admin', 'user'), templateController.deleteTemplate);

module.exports = router;
