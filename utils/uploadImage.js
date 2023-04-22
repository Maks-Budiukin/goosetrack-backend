// const dotenv = require("dotenv");
const cloudinary = require("cloudinary");
// dotenv.config();

const { CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET, CLOUDINARY_NAME } =
  process.env;

cloudinary.config({
  cloud_name: CLOUDINARY_API_KEY,
  api_key: CLOUDINARY_NAME,
  api_secret: CLOUDINARY_API_SECRET,
});

module.exports = cloudinary;
