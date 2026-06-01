const prisma = require('../../config/prisma');

const createTemplate = async (data) => prisma.template.create({ data });
const getTemplates = async (where, skip, take) => prisma.template.findMany({ where, skip, take, orderBy: { createdAt: 'desc' }, include: { questions: true } });
const countTemplates = async (where) => prisma.template.count({ where });
const getTemplateById = async (id) => prisma.template.findUnique({ where: { id }, include: { questions: true } });
const updateTemplate = async (id, data) => prisma.template.update({ where: { id }, data });
const deleteTemplate = async (id) => prisma.template.delete({ where: { id } });

module.exports = { createTemplate, getTemplates, countTemplates, getTemplateById, updateTemplate, deleteTemplate };
