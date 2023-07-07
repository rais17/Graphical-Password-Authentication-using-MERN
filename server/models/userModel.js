const mongoose = require("mongoose");

const userModel = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  imageSet: {
    type: [String],
    default: [],
  },
  keyword: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("User", userModel);