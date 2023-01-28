const User = require("../models/User");
const { createError } = require("../utils/error");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const sharp = require("sharp");

const multerStorage = multer.memoryStorage();

// const multerFilter = (req, file, cb) => {
//     if (file.mimetype.startsWith('image')) {
//         cb(null, true)
//     } else {
//         const msg = 'Not an image!, Please upload only images'
//         cb(msg, false)
//     }
// }

const upload = multer({
  storage: multerStorage,
});

exports.uploadPhoto = upload.single("profilePhoto");

exports.resizePhoto = (req, res, next) => {
  if (!req.file) return next();

  const imgName = req.file.originalname.split(".")[0];
  const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);

  req.file.filename = imgName + "-" + `${uniqueSuffix}.jpeg`;

  sharp(req.file.buffer)
    .resize(500, 500, { withoutEnlargement: true })
    .toFormat("jpeg")
    .jpeg({ quality: 90 })
    .toFile(`public/images/${req.file.filename}`);

  next();
};

// Generate token
const generateToken = (id, isAdmin) => {
  return jwt.sign({ id, isAdmin }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};
// Register new user
exports.createUser = async (req, res, next) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    const newUser = {
      name: req.body.name || req.body.restaurant,
      email: req.body.email,
      password: hash,
      role: req.body.name ? "customer" : "restaurant",
    };

    const user = await User.create(newUser);

    res.status(201).json({
      success: true,
      user,
    });
  } catch (error) {
    next(error);
  }
};
// Login user
exports.loginUser = async (req, res, next) => {
  try {
    const { email } = req.body;
    console.log(req.body);
    const user = await User.findOne({ email });
    if (!user) return next(createError(404, "User not found"));

    const isPasswordCorrect = await bcrypt.compare(
      req.body.password,
      user.password
    );

    if (!isPasswordCorrect)
      return next(createError(400, "Invalid credentials!"));

    const isAdmin = user.role === "admin" ? true : false;

    const token = generateToken(user._id, isAdmin);

    const { password, ...otherDetails } = user._doc;

    res
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .status(200)
      .json({ ...otherDetails });
  } catch (error) {
    next(error);
  }
};
// Get me
exports.getMe = async (req, res, next) => {
  try {
    const id = req.params.id;

    const user = await User.findById(id);

    res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    next(error);
  }
};
// Update me
exports.updateMe = async (req, res, next) => {
  try {
    let photo
    const { name, email } = req.body;
    if(req.file) photo = req.file.filename
    const user = await User.findByIdAndUpdate(
      req.user.id,
      { name, email, profilePhoto : photo },
      {
        new: true,
      }
    );


    res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    next(error);
  }
};
// Delete me
exports.deleteMe = async (req, res, next) => {
  try {
    await User.findByIdAndDelete(req.user.id);

    res.status(200).json({
      success: true,
      message: "User has beed deleted",
    });
  } catch (error) {
    next(error);
  }
};
