// middleware/errorHandler.js
const logger = require('../utils/logger');

const errorHandler = (error, req, res, next) => {
 
  const status = error.status || 500;
  const name = error.name || 'InternalServerError';
  const message = error.message || 'Something went wrong';

  
  logger.error(`[${req.method}] ${req.originalUrl} - ${name}: ${message}`);

  
  if (process.env.NODE_ENV === 'development') {
    logger.debug(error.stack); 
  }

  res.status(status).json({
    error: {
      name,
      message,
      status
    }
  });
};

module.exports = errorHandler;
