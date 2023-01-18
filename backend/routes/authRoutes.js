const express = require("express");
const {
  createUser,
  loginUser,
  getMe,
  updateMe,
  deleteMe,
} = require("../controllers/authController");
const { verifyUser } = require("../utils/verifyToken");
const router = express.Router();

router.route("/").post(createUser);
router.post("/login", loginUser);
router
  .route("/:id")
  .get(verifyUser, getMe)
  .put(verifyUser, updateMe)
  .delete(verifyUser, deleteMe);

module.exports = router;
