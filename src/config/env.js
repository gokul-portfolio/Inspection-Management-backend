require('dotenv').config();

module.exports = {
  port: parseInt(process.env.PORT, 10) || 5000,
  databaseUrl: process.env.DATABASE_URL,
  jwtSecret: process.env.JWT_SECRET || 'audit-management-secret',
  jwtExpiresIn: process.env.JWT_EXPIRES_IN || '7d',
  saltRounds: parseInt(process.env.SALT_ROUNDS || '10', 10),
};
