const express = require('express');
const app = express();

const cors = require('cors');
const personRouter = require('./routes/personRouter');
const errorHandlingMiddleware = require('./middleware/errorHandler');
const middleware = require('./middleware/middlewares');

app.use(cors());
app.use(express.static('dist'));
app.use(express.json());
app.use(middleware.requestLogger);

app.use('/api/v1/persons', personRouter);

app.use(middleware.unknownEndpoint);
app.use(errorHandlingMiddleware);

module.exports = app;
