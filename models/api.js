const mongoose = require("mongoose");

const autoSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name must be provide"],
  },
  gender: {
    type: String,
    required: [true, "gender must be provide"],
  },
  age: {
    type: Number,
    required: [true, "age must be provide"],
  },
  Blood_Group: {
    type: String,
    required: [true, "Blood Group must be provide"],
  },
});

module.exports = mongoose.model("api", autoSchema);
