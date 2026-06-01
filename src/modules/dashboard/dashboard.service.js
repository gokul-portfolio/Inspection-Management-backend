const prisma = require('../../config/prisma');

const getTemplateCount = () => prisma.template.count();
const getQuestionCount = () => prisma.templateQuestion.count();
const getActionCount = () => prisma.correctiveAction.count();
const getActionCountByStatus = (status) => prisma.correctiveAction.count({ where: { status } });

module.exports = { getTemplateCount, getQuestionCount, getActionCount, getActionCountByStatus };
