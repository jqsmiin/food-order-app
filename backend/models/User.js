const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "User must have a name!"],
    },
    email: {
      type: String,
      required: [true, "User must have a email!"],
    },
    password: {
      type: String,
      required: [true, "User must have a password!"],
    },
    role: {
      type: String,
      required: true,
      enum: ["customer", "restaurant", "admin"],
      default: "customer",
    },
    profilePhoto: {
      type: String,
      default: "user.png",
    },
    cart: {
      type: [String],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
