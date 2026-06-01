const express = require('express');
const router = express.Router();
const { protect } = require('../../middleware/auth.middleware');
const { authorizeRole } = require('../../middleware/role.middleware');
const userController = require('./user.controller');

router.get('/me', protect, userController.getCurrentUser);
router.get('/', protect, authorizeRole('admin'), userController.getUsers);
router.get('/:id', protect, authorizeRole('admin'), userController.getUser);

module.exports = router;
