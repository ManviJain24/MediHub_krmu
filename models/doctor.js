const mongoose = require("mongoose");
const { isEmail } = require("validator");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please provide your title"],
  },
  firstName: {
    type: String,
    required: [true, "please provide your firstName"],
  },
  lastName: {
    type: String,
    required: [true, "please provide your lastName"],
  },
  dob: {
    type: Date,
    required: [true, "please provide your DOB"],
  },
  gender: {
    type: String,
    required: [true, "please provide your lastName"],
  },
  email: {
    type: String,
    required: [true, "Please enter an email"],
    lowercase: true,
    validate: [isEmail, "Please enter a valid email"],
  }
 
});

const doctor = mongoose.model("doctor", userSchema);

module.exports = doctor;
