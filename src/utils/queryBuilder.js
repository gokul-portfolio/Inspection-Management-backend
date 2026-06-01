const buildTemplateFilter = ({ name }) => {
  const filter = {};

  if (name) {
    filter.name = { contains: name, mode: 'insensitive' };
  }

  return filter;
};

module.exports = { buildTemplateFilter };
