const mongoose = require("mongoose");

const commentsSchema = new mongoose.Schema(
  {
    blog_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "blogs",
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    createdDate: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

const Comment = mongoose.model("comments", commentsSchema);
module.exports = Comment;
