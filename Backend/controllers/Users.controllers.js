const express = require("express");
const UserController = express.Router();
const { UserModel } = require("../models/User.model");
const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");
require("dotenv").config();

// Signup

UserController.post("/signup", async (req, res) => {
  try {
    const { email, password, confirmpassword } = req.body;
    console.log(email, password, confirmpassword);
    const isUserExist = await UserModel.findOne({ email, confirmpassword });
    if (isUserExist) {
      return res
        .status(200)
        .json({ message: "User already exists. Please Login" });
    }
    bcrypt.hash(password, 10, async function (err, hash) {
      if (err) {
        return res.status(404).json({ message: err });
      }
      const user = new UserModel({
        email,
        password: hash,
        confirmpassword,
      });
      await user.save();
      res.status(200).json({ message: "Registration Successful" });
    });
  } catch (error) {
    res.status(404).json({ message: error });
  }
});

// Login

UserController.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const isUserExist = await UserModel.findOne({ email });
    if (isUserExist) {
      bcrypt.compare(password, isUserExist.password, function (err, result) {
        if (err) {
          return res.status(404).json({ message: err });
        }
        if (result) {
          var token = jwt.sign(
            { userId: isUserExist._id },
            process.env.JWT_SECRET
          );
          res.status(200).json({ message: "Login Successful", token });
        }else{
            res.status(200).json({ message: "Invalid Password" });
        }
      });
    } else {
      res.status(200).json({ message: "No User Found!" });
    }
  } catch (error) {
    res.status(404).json({ message: error });
  }
});

module.exports = { UserController };
