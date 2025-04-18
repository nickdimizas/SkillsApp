const bcrypt = require('bcrypt');
const User = require('../models/user.model');
const { validateRegisterData } = require('../validators/auth.validator');
const { checkUserExists } = require('../services/auth.service');

const registerUser = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;

    validateRegisterData({ username, email, password });
    await checkUserExists(email, username);

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, email, password: hashedPassword });

    await newUser.save();
    res.status(201).json({ message: 'User registered successfully' });

  } catch (err) {
    next(err);
  }
};
