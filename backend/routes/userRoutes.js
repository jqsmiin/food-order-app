const express = require("express");
const {
  getAllUsers,
  getSingleUser,
  updateUser,
  deleteUser,
} = require("../controllers/userController");
const { verifyAdmin } = require("../utils/verifyToken");
const router = express.Router();

router.route("/").get(verifyAdmin, getAllUsers);

router
  .route("/:id")
  .get(verifyAdmin, getSingleUser)
  .put(verifyAdmin, updateUser)
  .delete(verifyAdmin, deleteUser);

module.exports = router;
