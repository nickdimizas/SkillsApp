const express = require('express');
const app = express();
const path = require('path');
const requestLogger = require('./middlewares/request-logger');
const errorHandler = require('./middlewares/error-handler');
const registerRoutes = require('./routes/register-routes');



app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use(requestLogger);

app.use(express.static(path.join(__dirname, 'public')));


app.use('/', authRoutes);

app.use(errorHandler);

module.exports = app;