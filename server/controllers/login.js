const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // performing validation
    if (!email || !password) {
      return res.status(400).json({
        status: 400,
        success: false,
        message: "Please fill all the details carefully",
      });
    }

    // retrive user from db
    let isUserRegistered = await User.findOne({ email });

    // if user is not registered
    if (!isUserRegistered) {
      return res.status(404).json({
        status: 404,
        success: false,
        message: "User Is Not Registered, Please Signup",
      });
    }

    let payload = {
      firstName: isUserRegistered.firstName,
      lastName: isUserRegistered.lastName,
      email: isUserRegistered.email,
      imageUrl: isUserRegistered.imageSet,
    };

    // matching password
    if (await bcrypt.compare(password, isUserRegistered.password)) {
      // password matched
      const token = jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: "100h",
      });

      isUserRegistered = isUserRegistered.toObject();
      isUserRegistered.token = token;
      isUserRegistered.password = undefined;

      return res.status(200).json({
        status: 200,
        success: true,
        message: "User Logged In Successfully",
        token,
        isUserRegistered,
      });
    } else {
      return res.status(401).json({
        status: 401,
        success: false,
        message: "Password not match",
      });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      status: 500,
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};
