const prisma = require('../../config/prisma');

const getAllUsers = async (skip, take) => prisma.user.findMany({ skip, take, orderBy: { createdAt: 'desc' } });
const getUserCount = async () => prisma.user.count();
const getUserById = async (id) => prisma.user.findUnique({ where: { id } });
const getUserByEmail = async (email) => prisma.user.findUnique({ where: { email } });

module.exports = { getAllUsers, getUserCount, getUserById, getUserByEmail };
