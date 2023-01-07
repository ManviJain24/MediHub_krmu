const mongoose = require("mongoose");

const bed = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name must be provide"],
  },
  email: {
    type: String,
    required: [true, "Email must be provide"],
  },
  phone_number: {
    type: String,
    required: [true, "Phone Number must be provide"],
  },
  city: {
    type: String,
    required: [true, "Blood Group must be provide"],
  },

});

const Beds = mongoose.model("beds", bed);


module.exports = Beds;
// const data = mongoose.model("yash", userSchema);
