const User = require("../models/User");
const { createError } = require("../utils/error");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Generate token
const generateToken = (id, isAdmin) => {
  return jwt.sign({ id, isAdmin }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};
// Register new user
exports.createUser = async (req, res, next) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    const newUser = {
      name: req.body.name || req.body.restaurant,
      email: req.body.email,
      password: hash,
      role: req.body.name ? "customer" : "restaurant",
    };

    const user = await User.create(newUser);

    res.status(201).json({
      success: true,
      user,
    });
  } catch (error) {
    next(error);
  }
};
// Login user
exports.loginUser = async (req, res, next) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email });
    if (!user) return next(createError(404, "User not found"));

    const isPasswordCorrect = await bcrypt.compare(
      req.body.password,
      user.password
    );

    if (!isPasswordCorrect)
      return next(createError(400, "Invalid credentials!"));

    const isAdmin = user.role === "admin" ? true : false;

    const token = generateToken(user._id, isAdmin);

    const { password, ...otherDetails } = user._doc;

    res
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .status(200)
      .json({ ...otherDetails });
  } catch (error) {
    next(error);
  }
};
// Get me
exports.getMe = async (req, res, next) => {
  try {
    const id = req.params.id;

    const user = await User.findById(id);

    res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    next(error);
  }
};
// Update me
exports.updateMe = async (req, res, next) => {
  try {
    const { name, email, photo } = req.body;
    const user = await User.findByIdAndUpdate(
      req.user.id,
      { name, email, photo },
      {
        new: true,
      }
    );

    res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    next(error);
  }
};
// Delete me
exports.deleteMe = async (req, res, next) => {
  try {
    await User.findByIdAndDelete(req.user.id);

    res.status(200).json({
      success: true,
      message: "User has beed deleted",
    });
  } catch (error) {
    next(error);
  }
};
