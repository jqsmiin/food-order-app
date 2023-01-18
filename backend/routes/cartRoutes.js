const express = require("express");
const {
  addFood,
  removeFood,
  getMyFood,
} = require("../controllers/cartController");
const { verifyToken } = require("../utils/verifyToken");
const router = express.Router();

router.route("/").get(verifyToken, getMyFood);
router.route("/:foodId").put(verifyToken, addFood);
router.route("/cartList/:foodId").put(verifyToken, removeFood);

module.exports = router;
