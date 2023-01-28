const express = require("express");
const {
  createUser,
  loginUser,
  getMe,
  updateMe,
  deleteMe,
  uploadPhoto,
  resizePhoto,
} = require("../controllers/authController");
const { verifyUser, verifyToken } = require("../utils/verifyToken");
const router = express.Router();

router.route("/").post(createUser);
router.post("/login", loginUser);
router.route("/:id").get(verifyToken, getMe).put(verifyToken, uploadPhoto,resizePhoto, updateMe).delete(verifyUser, deleteMe);

module.exports = router;
