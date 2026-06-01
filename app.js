const express = require('express');
const cors = require('cors');
const routes = require('./src/routes');
const { requestLogger } = require('./src/config/logger');
const { notFoundHandler, errorHandler } = require('./src/middleware/error.middleware');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(requestLogger);

app.use('/api', routes);

app.get("/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "API Working Fine"
  });
});

app.use(notFoundHandler);
app.use(errorHandler);

module.exports = app;
