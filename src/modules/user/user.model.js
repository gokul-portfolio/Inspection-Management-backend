const prisma = require('../../config/prisma');

const findUserById = (id) => prisma.user.findUnique({ where: { id } });
const findUserByEmail = (email) => prisma.user.findUnique({ where: { email } });
const listUsers = ({ skip, take }) => prisma.user.findMany({ skip, take, orderBy: { createdAt: 'desc' } });

module.exports = { findUserById, findUserByEmail, listUsers };
