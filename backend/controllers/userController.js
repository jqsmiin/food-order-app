const User = require("../models/User");

// Get all users
exports.getAllUsers = async (req, res, next) => {
  try {
    const user = await User.find();

    res.status(200).json({
      status: "success",
      results: user.length,
      user,
    });
  } catch (error) {
    next(error);
  }
};
// Get single user
exports.getSingleUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);

    res.status(200).json({
      status: "success",
      user,
    });
  } catch (error) {
    next(error);
  }
};
// Update user
exports.updateUser = async (req, res, next) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    res.status(200).json({
      status: "success",
      user,
    });
  } catch (error) {
    next(error);
  }
};
// Delete user
exports.deleteUser = async (req, res, next) => {
  try {
    await User.findByIdAndDelete(req.params.id);

    res.status(200).json({
      status: "success",
      message: "User has beed deleted",
    });
  } catch (error) {
    next(error);
  }
};
