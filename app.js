const express = require('express');
const path = require('path');
const requestLogger = require('./middlewares/requestLogger');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

const authRoutes = require('./routes/authRoutes');
app.use('/', authRoutes);

module.exports = app;