const mongoose = require("mongoose");
const { isEmail } = require("validator");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide your name"],
  },
Mobile:{
    type: Number,
    required: [true,'please enter a number']
},
  email: {
    type: String,
    required: [true, "Please enter an email"],
    lowercase: true,
    validate: [isEmail, "Please enter a valid email"],
  },
  date:{
    type : Date,
    required: [true,'please enter a date']
  }
});



const data = mongoose.model("yash", userSchema);

module.exports = data;
