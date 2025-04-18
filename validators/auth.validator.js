const { ValidationError } = require('../errors');

function validateRegisterData({ username, email, password }) {
  if (!username || !email || !password) {
    throw new ValidationError('All fields (username, email, password) are required');
  }
}

module.exports = {
  validateRegisterData
};