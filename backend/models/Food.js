const mongoose = require("mongoose");
const { Schema } = mongoose;

const foodSchema = new Schema(
  {
    restaurant: {
      type: mongoose.Schema.Types.String,
      required: true,
      ref: "User",
    },
    productTitle: {
      type: String,
      required: [true, "Please write product title!"],
    },
    category: {
      type: String,
      required: true,
      enum: ["drink", "desert", "fast food", "chinese cuisine"],
      default: "fast food",
    },
    images: {
      type: [String],
      default: "food.png",
    },
    description: {
      type: String,
    },
    price: {
      type: Number,
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Food", foodSchema);
