import User from "../models/userModel.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

export const signup = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
      return res.status(401).json({
        message: "All Fields are required",
        success: false,
      });
    }
    const userExist = await User.findOne({ email });
    if (userExist) {
      return res.status(401).json({
        message: "User Already Exists",
        success: false,
      });
    }
    const hashedPassword = await bcryptjs.hash(password, 10);
    const newUser = await User.create({
      username,
      email,
      password: hashedPassword,
    });
    return res.status(201).json({
      message: "User Registration Successful",
      newUser,
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Something Went Wrong",
      success: false,
    });
  }
};

export const signin = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(401).json({
        message: "All Fields are required",
        success: false,
      });
    }
    const userExist = await User.findOne({ email });
    if (!userExist) {
      return res.status(401).json({
        message: "User Doesnot Exist",
        success: false,
      });
    }
    const validPassword = await bcryptjs.compare(password, userExist.password);
    if (!validPassword) {
      return res.status(401).json({
        message: "Invalid Email or Password",
        success: false,
      });
    }
    const token = jwt.sign({ id: userExist._id }, "muzammilshaikh", {
      expiresIn: "30d",
    });
    const {password: hashedPassword, ...rest} = userExist._doc
    res
      .cookie("access_token", token, { httpOnly: true })
      .status(200)
      .json({
        success: true,
        rest});
  } catch (error) {
    return res.status(500).json({
      message: "Something Went Wrong",
      success: false,
      error
    });
  }
};

export const signout = (req, res) => {
  res.clearCookie('access_token').status(200).json({
    message: "Signout Success"
  })
}