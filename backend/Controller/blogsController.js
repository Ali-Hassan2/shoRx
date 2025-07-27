const sendresponse = require("../Utils/sendresponse");
const blogsval = require("../Validations/blogsvalidation");
const Blogs = require("../Models/blogs.model");
const Admin = require("../Models/admin.model");
const Blog = require("../Models/blogs.model");

const creatingblog = async (req, res) => {
  const blogsvalidation = blogsval.safeParse(req.body);
  if (!blogsvalidation.success) {
    return sendresponse(
      res,
      402,
      false,
      blogsvalidation.error.issues.map((err) => err.message)
    );
  }
  const adminId = req.adminmid;
  if (!adminId) {
    return sendresponse(
      res,
      403,
      false,
      "Unauthorized: only admins can create blogs."
    );
  }
  const {
    title,
    content,
    image,
    author,
    category,
    tags,
    publish_Date,
    update_Date,
    summary,
    slug,
    likes,
  } = req.body;

  try {
    const existingBlog = await Blogs.findOne({ title });
    if (existingBlog) {
      return sendresponse(
        res,
        403,
        false,
        "Blog with this title already exists."
      );
    }
    const newBlog = await Blogs.create({
      title,
      content,
      image,
      author,
      category,
      tags: Array.isArray(tags) ? tags : [],
      publish_Date,
      update_Date,
      summary,
      slug,
      likes,
    });
    await newBlog.save();

    return sendresponse(res, 200, true, "Blog created successfully", newBlog);
  } catch (error) {
    console.error(error);
    return sendresponse(res, 500, false, [error.message]);
  }
};
const gettingblog = async (req, res) => {
  try {
    const blogs = await Blogs.find({});
    sendresponse(res, 200, true, "Blogs reterived successfully.", blogs);
  } catch (error) {
    console.log("There is an error while getting blogs", error);
    sendresponse(res, 500, false, "Please resolve this error", [
      error?.message,
    ]);
  }
};
const updatingblog = async () => {};
const deletingblog = async () => {};

module.exports = { creatingblog, gettingblog, updatingblog, deletingblog };
