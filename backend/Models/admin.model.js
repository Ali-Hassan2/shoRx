const mongoose = require("mongoose");
const { lowercase, minLength } = require("zod");

const adminSchema = new mongoose.model(
  "admin",
  mongoose.Schema(
    {
      name: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        unique: true,
        required: [true, "Email is required."],
        trim: true,
        lowercase: true,
        match: [
          /^[a-zA-Z]+[0-9]+@shorx\.com$/,
          "Email must be in the format: name123@shorx.com",
        ],
      },
      password: {
        type: String,
        required: [true, "Password is required."],
        minLength: [6, "Password must be 6 chars long."],
        select: false,
      },
    },
    { timestamps: true }
  )
);

module.exports = adminSchema;
