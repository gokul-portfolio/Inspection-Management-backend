const express = require('express');
const router = express.Router();

const authRoutes = require('../modules/auth/auth.routes');
const userRoutes = require('../modules/user/user.routes');
const templateRoutes = require('../modules/template/template.routes');
const questionRoutes = require('../modules/question/question.routes');
const correctiveActionRoutes = require('../modules/correctiveAction/correctiveAction.routes');
const dashboardRoutes = require('../modules/dashboard/dashboard.routes');

router.use('/auth', authRoutes);
// user
router.use('/users', userRoutes);
// template
router.use('/templates', templateRoutes);
// question
router.use('/questions', questionRoutes);
// corrective action
router.use('/actions', correctiveActionRoutes);
// dashboard
router.use('/dashboard', dashboardRoutes);

module.exports = router;
