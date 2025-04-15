const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    required: [true, "Username is required field"],
    maxlength: 20,
    unique: true,
    trim: true,
    lowercase: true
  },
  password: {
    type: String,
    required: [true, "Password is required field"],
    maxlength: 20,
  },
  email: {
    type: String,
    required: [true, "Email is required field"],
    maxlength: 20,
    unique: true,
    trim: true,
    lowercase: true
  }
},
{
  collection: 'users',
  timestamps: true
});

module.exports = mongoose.model("User", userSchema)