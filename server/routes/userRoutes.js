const express = require("express");
const router = express.Router();

const { signup } = require("../controllers/signup");
const { login } = require("../controllers/login");

router.post("/usersignup", signup);
router.post("/userlogin", login);

module.exports = router;