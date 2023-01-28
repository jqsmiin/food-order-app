const User = require("../models/User");
const Food = require("../models/Food");
const multer = require("multer");
const sharp = require('sharp');
const { query } = require("express");

const multerStorage = multer.memoryStorage();

const upload = multer({
  storage: multerStorage,
});

exports.uploadPhoto = upload.single("images");

exports.resizePhoto = (req, res, next) => {
  if (!req.file) return next();

  const imgName = req.file.originalname.split(".")[0];
  const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);

  req.file.filename = imgName + "-" + `${uniqueSuffix}.jpeg`;

  sharp(req.file.buffer)
    .resize(500, 500, { withoutEnlargement: true })
    .toFormat("jpeg")
    .jpeg({ quality: 90 })
    .toFile(`public/images/${req.file.filename}`);

  next();
};

// Create food
exports.createFood = async (req, res, next) => {
  // Get user id and restaurant name
  let images
  const user = await User.findById(req.user.id);
  if (req.file) images = req.file.filename

  console.log(images)

  const userId = user._id.toString();
  const restaurantName = user.name;

  const newFood = {
    restaurant: restaurantName,
    user: userId,
    productTitle: req.body.productTitle,
    category: req.body.category,
    images: images,
    description: req.body.description,
    price: req.body.price,
  };

  const food = await Food.create(newFood);

  res.status(201).json({
    success: true,
    food,
  });
};
// Get my food
exports.getMyFood = async (req, res, next) => {
  try {
    // Get user id
    const userId = req.user.id;
    // Get food where userId === user
    const usersFood = await Food.find({ user: userId });
    res.status(200).json({
      success: true,
      results: usersFood.length,
      usersFood,
    });
  } catch (error) {
    next(error);
  }
};
// Delete my food
exports.deleteMyFood = async (req, res, next) => {
  try {
    // Find food and delete it
    await Food.findByIdAndDelete(req.params.foodId);
    res.status(200).json({
      success: true,
      message: "Food deleted successfully",
    });
  } catch (error) {
    next(error);
  }
};
exports.getAllFoods = async (req, res, next) => {
  try {
    const limit = req.query.limit * 1
    // Find food and delete it
    const food = await Food.find().limit(limit)
    res.status(200).json({
      success: true,
      results: food.length,
      food,
    });
  } catch (error) {
    next(error);
  }
};
// Get Single Food
exports.getFood = async (req, res, next) => {
  try {
    // Get food id
    const id = req.params.foodId;
    const food = await Food.findById(id);
    res.status(200).json({
      success: true,
      food,
    });
  } catch (error) {
    next(error);
  }
};
// Get similar food
exports.getSimilarFood = async (req, res, next) => {
  try {
    // Get food id
    console.log(req.query)
    let queryStr = JSON.stringify(req.query)
    queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, match => `$${match}`);
    console.log(queryStr)
    const food = await Food.find(JSON.parse(queryStr))
    res.status(200).json({
      success: true,
      food,
    });
  } catch (error) {
    next(error);
  }
};