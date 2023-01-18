const User = require("../models/User");
const Food = require("../models/Food");

// Create food
exports.createFood = async (req, res, next) => {
  // Get user id and restaurant name
  const user = await User.findById(req.user.id);

  const userId = user._id.toString();
  const restaurantName = user.name;

  const newFood = {
    restaurant: restaurantName,
    user: userId,
    productTitle: req.body.productTitle,
    category: req.body.category,
    images: req.body.images,
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
    // Find food and delete it
    const food = await Food.find();
    res.status(200).json({
      success: true,
      results: food.length,
      food,
    });
  } catch (error) {
    next(error);
  }
};
