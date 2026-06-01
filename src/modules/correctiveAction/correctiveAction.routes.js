const express = require('express');
const router = express.Router();
const { protect } = require('../../middleware/auth.middleware');
const { authorizeRole } = require('../../middleware/role.middleware');
const validateRequest = require('../../middleware/validate.middleware');
const correctiveActionController = require('./correctiveAction.controller');
const { createCorrectiveActionValidation, updateCorrectiveActionValidation } = require('./correctiveAction.validation');

router.use(protect);
router.get('/', correctiveActionController.getCorrectiveActions);
router.post('/', authorizeRole('admin', 'user'), createCorrectiveActionValidation, validateRequest, correctiveActionController.createCorrectiveAction);
router.get('/:id', correctiveActionController.getCorrectiveAction);
router.put('/:id', authorizeRole('admin', 'user'), updateCorrectiveActionValidation, validateRequest, correctiveActionController.updateCorrectiveAction);
router.delete('/:id', authorizeRole('admin', 'user'), correctiveActionController.deleteCorrectiveAction);

module.exports = router;
