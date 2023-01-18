const express = require("express");
const {
  createFood,
  getMyFood,
  deleteMyFood,
  getAllFoods,
} = require("../controllers/foodController");
const { verifyToken, verifyUser } = require("../utils/verifyToken");
const router = express.Router();

router.route("/").post(verifyToken, createFood).get(verifyToken, getMyFood);
router.route("/allFood").get(getAllFoods);
router.route("/:id/:foodId").delete(verifyUser, deleteMyFood);

module.exports = router;
