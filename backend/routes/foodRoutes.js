const express = require("express");
const {
  createFood,
  getMyFood,
  deleteMyFood,
  getAllFoods,
  uploadPhoto,
  resizePhoto,
  getFood,
  getSimilarFood
} = require("../controllers/foodController");
const { verifyToken, verifyUser } = require("../utils/verifyToken");
const router = express.Router();

router.route("/").post(verifyToken, uploadPhoto, resizePhoto, createFood).get(verifyToken, getMyFood);
router.route('/:foodId').get(getFood)
router.route("/all/food").get(getAllFoods);
router.route("/similar/food").get(getSimilarFood);
router.route("/:id/:foodId").delete(verifyUser, deleteMyFood);

module.exports = router;
