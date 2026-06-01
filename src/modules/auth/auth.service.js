const bcrypt = require('bcryptjs');
const AppError = require('../../utils/AppError');
const prisma = require('../../config/prisma');
const { saltRounds } = require('../../config/env');

const createUser = async ({ name, email, password, role = 'user' }) => {
  const existingUser = await prisma.user.findUnique({ where: { email } });

  if (existingUser) {
    throw new AppError(409, 'Email is already registered');
  }

  const hashedPassword = await bcrypt.hash(password, saltRounds);

  return prisma.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
      role,
    },
  });
};

const getUserByEmail = async (email) => prisma.user.findUnique({ where: { email } });

module.exports = { createUser, getUserByEmail };
