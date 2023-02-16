const mongoose = require("mongoose");
const { isEmail } = require("validator");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide your name"],
  },
  Mobile: {
    type: Number,
    required: [true, "please enter a number"],
  },
  date: {
    type: Date,
    required: [true, "please enter a date"],
  },
});

const data = mongoose.model("yash", userSchema);

module.exports = data;
