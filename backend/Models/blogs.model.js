const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    image: String,
    author: {
      type: String,
    },
    category: String,
    tags: {
      type: [String],
      default: [],
    },
    publish_Date: {
      type: Date,
      default: Date.now,
    },
    update_Date: {
      type: Date,
    },
    summary: String,
    slug: {
      type: String,
      required: true,
      unique: true,
    },
    likes: {
      type: Number,
      default: 0,
    },
    likedIP: [String],
  },
  { timestamps: true }
);

const Blog = mongoose.model("blogs", blogSchema);
module.exports = Blog;
