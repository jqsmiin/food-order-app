const { mongoose } = require("mongoose");
const { Schema } = mongoose;

const cartSchema = new Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    myOrders: {
      type: [mongoose.Schema.Types.ObjectId],
      required: true,
      ref: "Food",
    },
    totalPrice: {
      type: [Number],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Cart", cartSchema);
