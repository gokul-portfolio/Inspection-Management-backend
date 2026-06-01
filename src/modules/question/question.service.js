const prisma = require('../../config/prisma');

const createQuestion = async (data) => {
  return prisma.templateQuestion.create({
    data,
  });
};

const getQuestions = async (filter, skip, take) => {
  return prisma.templateQuestion.findMany({
    where: filter,
    skip,
    take,
    orderBy: {
      createdAt: 'desc',
    },
    include: {
      template: true,
    },
  });
};

const countQuestions = async (filter) => {
  return prisma.templateQuestion.count({
    where: filter,
  });
};

const getQuestionById = async (id) => {
  return prisma.templateQuestion.findUnique({
    where: {
      id,
    },
    include: {
      template: true,
    },
  });
};

const updateQuestion = async (id, data) => {
  return prisma.templateQuestion.update({
    where: {
      id,
    },
    data,
  });
};

const deleteQuestion = async (id) => {
  return prisma.templateQuestion.delete({
    where: {
      id,
    },
  });
};

const getQuestionsByTemplate = async (templateId) => {
  return prisma.templateQuestion.findMany({
    where: {
      templateId: Number(templateId),
    },
    orderBy: {
      id: 'asc',
    },
  });
};

module.exports = {
  createQuestion,
  getQuestions,
  countQuestions,
  getQuestionById,
  updateQuestion,
  deleteQuestion,
  getQuestionsByTemplate,
};