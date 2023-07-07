const User = require("../models/userModel");
const bcrypt = require("bcrypt");

exports.signup = async (req, res) => {
  try {
    const { firstName, lastName, email, confirmPassword, imageId, keyword } =
      req.body;
    // checking if user is already registered

    let password = confirmPassword;
    const isUserExisted = await User.findOne({ email });
    if (isUserExisted) {
      return res.status(409).json({
        status: 409,
        success: false,
        message: "User Already Exist",
      });
    }

    // hasing password using bcrypt
    let hashedPassword;
    try {
      hashedPassword = await bcrypt.hash(password, 10);
    } catch (err) {
      return res.status(500).json({
        status: 500,
        success: false,
        message: "Error While Hashing Password",
      });
    }

    // creating a new user in database
    const newUser = await User.create({
      firstName,
      lastName,
      password: hashedPassword,
      email,
      imageSet: imageId,
      keyword,
    });

    return res.status(200).json({
      status: 200,
      success: true,
      message: "Entry Created For New User",
      newUser,
    });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      success: false,
      message: "Internal Server Error",
    });
  }
};
