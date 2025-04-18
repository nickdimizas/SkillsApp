const User = require('../models/user.model');
const { ValidationError } = require('../errors');

async function checkUserExists(email, username) {
  const existing = await User.findOne({ $or: [{ email }, { username }] });

  if (existing) {
    throw new ValidationError('Email or username already in use');
  }
}
