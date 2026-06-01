const express = require('express');
const router = express.Router();
const { protect } = require('../../middleware/auth.middleware');
const dashboardController = require('./dashboard.controller');

router.use(protect);
router.get('/', dashboardController.getDashboard);

module.exports = router;
