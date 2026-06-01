const prisma = require('../../config/prisma');

const createCorrectiveAction = async (data) => prisma.correctiveAction.create({ data });
const getCorrectiveActions = async (filter, skip, take) => prisma.correctiveAction.findMany({ where: filter, skip, take, orderBy: { createdAt: 'desc' } });
const countCorrectiveActions = async (filter) => prisma.correctiveAction.count({ where: filter });
const getCorrectiveActionById = async (id) => prisma.correctiveAction.findUnique({ where: { id } });
const updateCorrectiveAction = async (id, data) => prisma.correctiveAction.update({ where: { id }, data });
const deleteCorrectiveAction = async (id) => prisma.correctiveAction.delete({ where: { id } });

module.exports = { createCorrectiveAction, getCorrectiveActions, countCorrectiveActions, getCorrectiveActionById, updateCorrectiveAction, deleteCorrectiveAction };
