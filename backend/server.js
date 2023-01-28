const express = require("express");
const colors = require("colors");
const cors = require("cors");
const dotenv = require("dotenv").config();
const mongoose = require("mongoose");
const authRoute = require("./routes/authRoutes");
const userRoute = require("./routes/userRoutes");
const cartRoute = require("./routes/cartRoutes");
const foodRoute = require("./routes/foodRoutes");
const cookieparser = require("cookie-parser");
const bodyParser = require("body-parser");
const PORT = process.env.port || 8000;

const connect = async () => {
  try {
    await mongoose.set("strictQuery", false);
    await mongoose.connect(process.env.MONGO_URL);
    console.log(`Connected to MongoDb`.cyan.underline);
  } catch (error) {
    console.log(`Error : ${error.message}`);
    process.exit(1);
  }
};

const app = express();

const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(cookieparser());
app.use(bodyParser.json({ limit: "50mb" }));
app.use(
  bodyParser.urlencoded({
    limit: "50mb",
    extended: true,
  })
);
app.use("/static", express.static("public/images"));
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/food", foodRoute);
app.use("/api/cart", cartRoute);

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!";

  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
  connect();
});
