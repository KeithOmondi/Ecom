const express = require("express")
const User = require("../model/user")
const router = express.Router()
const cloudinary = require("cloudinary")
const ErrorHandler = require("../utils/ErrorHandler")
const catchAsyncErrors = require("../middleware/catchAsyncErrors")

//CREATING USER ACCOUNT
router.post("/create-user", async (req, res, next) => {
    try {
      const { name, email, password, avatar } = req.body;
      const userEmail = await User.findOne({ email });
  
      if (userEmail) {
        return next(new ErrorHandler("User already exists", 400));
      }
  
      const myCloud = await cloudinary.v2.uploader.upload(avatar, {
        folder: "avatars",
      });
  
      const user = {
        name: name,
        email: email,
        password: password,
        avatar: {
          public_id: myCloud.public_id,
          url: myCloud.secure_url,
        },
      }; // Removed the extra comma here
  
      const activationToken = createActivationToken(user);
      const activationUrl = `http://localhost:3000/activation/${activationToken}`;
  
      try {
        await sendEmail({
          email: user.email,
          subject: "Activate your account",
          message: `Hello ${user.name}, click the link to activate your account: ${activationUrl}`,
        });
        res.status(201).json({
          success: true,
          message: `Please check your email (${user.email}) to activate your account`,
        });
      } catch (error) {
        return next(new ErrorHandler(error.message, 500));
      }
    } catch (error) {
      return next(new ErrorHandler(error.message, 400));
    }
  });

  //CREATE ACTIVATION TOKEN
  const createActivationToken = (ueser) => {
    return jwt.sign(user, process.env.ACTIVATION_SECRET, {
        expiresIn: "5m",
    });
  };

  //ACTIVATE USER ACCOUNT
  router.post(
    "/activation",
    catchAsyncErrors(async (req, res, next) => {
      try {
        const { activation_token } = req.body;
        const newUser = jwt.verify(
          activation_token,
          process.env.ACTIVATION_SECRET
        ); // Corrected jwt.verify function name
        if (!newUser) {
          return next(new ErrorHandler("Invalid token", 400));
        }
        const { name, email, password, avatar } = newUser; // Corrected 'emial' to 'email'
  
        let user = await User.findOne({ email });
  
        if (user) {
          return next(new ErrorHandler("User already exists", 400)); // Corrected error message
        }
        user = await User.create({
          name,
          email,
          password,
          avatar,
        });
        sendToken(user, 201, res);
      } catch (error) {
        return next(new ErrorHandler(error.message, 500)); // Corrected 'eror' to 'error'
      }
    })
  );
  
  module.exports = router;
