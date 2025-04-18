const express = require('express');
const app = express();
const path = require('path');
const helmet = require('helmet');
const cors = require('cors');
const requestLogger = require('../middlewares/request.logger');
const errorHandler = require('../middlewares/error.handler');
const authRoutes = require('../routes/auth.routes');



app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(helmet());
app.use(cors());


app.use(requestLogger);

app.use(express.static(path.join(__dirname, 'public')));


app.use('/api/auth', authRoutes);

app.use(errorHandler);

module.exports = app;