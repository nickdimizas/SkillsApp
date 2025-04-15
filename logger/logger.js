const path = require('path');
const { format, createLogger, transports } = require('winston');
const DailyRotateFile = require('winston-daily-rotate-file');
require('winston-mongodb');

const { combine, timestamp, label, prettyPrint, json } = format;

const fileRotateForErrors = new DailyRotateFile({
  filename: path.join(__dirname, '../logs/errors-%DATE%.log'),
  datePattern: "YYYY-MM-DD",
  maxFiles: "7d",
  level: "error"
});

const fileRotateForInfo = new DailyRotateFile({
  filename: path.join(__dirname, '../logs/info-%DATE%.log'),
  datePattern: "YYYY-MM-DD",
  maxFiles: "7d",
  level: "info"
});

const logger = createLogger({
  format: combine(
    label({ label: "Skill Hub app" }),
    timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
    prettyPrint()
  ),
  transports: [
    new transports.Console(),
    fileRotateForErrors,
    fileRotateForInfo,
    new transports.MongoDB({
      level: "info",
      db: process.env.MONGODB_URI,
      collection: 'server_logs',
      format: combine(
        timestamp(),
        json()
      )
    })
  ]
});

module.exports = logger;
