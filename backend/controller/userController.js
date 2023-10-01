const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ErrorHandler = require("../utils/errorHandler");
const sendToken = require("../utils/jwtToken");
const userSchema = require("../models/userModel");
exports.CreateUser = catchAsyncErrors(async (req, res, next) => {
  const { name, email, password } = req.body;
  const data = await userSchema.create({
    name: name,
    email: email,
    password: password
  });
  res.status(200).json({
    success: true,
    data
  });
});
exports.loginUser = catchAsyncErrors(async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return next(new ErrorHandler("Please enter password and email", 400));
  }

  const user = await userSchema.findOne({ email }).select("+password");
  console.log(user);

  if (!user) {
    return next(new ErrorHandler("Invalid Email or Password", 401));
  }

  const isPasswordMatched = await user.comparePassword(password);

  if (!isPasswordMatched) {
    return next(new ErrorHandler("email or password is incorrect", 401));
  }

  sendToken(user, 200, res);
});

exports.logOut = catchAsyncErrors(async (req, res, next) => {
  res.cookie("token", null, {
    expires: new Date(Date.now()),
    httpOnly: true
  });

  res.status(200).json({
    success: true,
    message: "Logged Out"
  });
});
