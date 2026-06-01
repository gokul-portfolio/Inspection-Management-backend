const express = require('express');
const router = express.Router();
const { registerValidation, loginValidation } = require('./auth.validation');
const validateRequest = require('../../middleware/validate.middleware');
const authController = require('./auth.controller');

router.post('/register', registerValidation, validateRequest, authController.register);
router.post('/login', loginValidation, validateRequest, authController.login);

module.exports = router;
