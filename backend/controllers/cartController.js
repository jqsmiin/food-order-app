const User = require("../models/User");
const Food = require("../models/Food");
const Cart = require("../models/Cart");

// Add a item to cart
exports.addFood = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const foodId = req.params.foodId;

    const cart = await User.findByIdAndUpdate(
      userId,
      { $push: { cart: foodId } },
      { new: true }
    );

    console.log(cart);

    res.status(200).json({
      success: true,
      cart,
    });
  } catch (error) {
    next(error);
  }
};
// Add a item to cart
exports.removeFood = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const foodId = req.params.foodId;

    const cart = await User.findByIdAndUpdate(
      userId,
      { $pull: { cart: foodId } },
      { new: true }
    );

    res.status(200).json({
      success: true,
      cart,
    });
  } catch (error) {
    next(error);
  }
};
// Get all cart items for one user
exports.getMyFood = async (req, res, next) => {
  try {
    const userId = req.user.id;

    const user = await User.findById(userId);

    const { cart } = user;

    console.log(cart);

    const food = await Food.find({ _id: cart });

    console.log(food);

    res.status(200).json({
      success: true,
      food,
    });
  } catch (error) {
    next(error);
  }
};
