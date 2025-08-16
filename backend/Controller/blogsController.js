const sendresponse = require("../Utils/sendresponse");
const blogsval = require("../Validations/blogsvalidation");
const Blogs = require("../Models/blogs.model");
const cloudinary = require("cloudinary").v2;

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
    const { image } = req.files;
    if (!req?.files || Object.keys(req.files).length === 0) {
      return sendresponse(res, 402, false, "No images found");
    }
    const allowed_format = ["image/png", "image/jpeg"];
    if (!allowed_format.includes(image.mimetype)) {
      sendresponse(res, 400, false, "Format not allowed");
    }

    const uploadResult = await cloudinary.uploader.upload(image.tempFilePath);
    if (!uploadResult || uploadResult.error) {
      sendresponse(res, 400, false, "There is an error while uploading image.");
    }
    const existingBlog = await Blogs.findOne({ title });
    if (existingBlog) {
      return sendresponse(
        res,
        403,
        false,
        "Blog with this title already exists.",
        existingBlog
      );
    }
    const newBlog = await Blogs.create({
      title,
      content,
      image: {
        public_id: uploadResult.public_id,
        url: uploadResult.url,
      },
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

const getsingle = async (req, res) => {
  console.log("i hitted hard.");
  const { id } = req.params;
  if (!id) {
    console.log("No id there man.");
    return sendresponse(res, 404, false, "Id not provided.");
  }
  try {
    console.log("The id is:", id);
    if (id) {
      const blog = await Blogs.findById(id);
      if (!blog) {
        return res.status(404).send({
          success: false,
          message: "No blog.",
        });
      } else {
        return res.status(200).json({
          success: true,
          message: "Block data fetched,",
          data: blog,
        });
      }
    }
  } catch (error) {
    console.log("There is an error", error);
    return sendresponse(res, 500, false, null, "Internal Server error.");
  }
};
const updatingblog = async () => {};
const deletingblog = async () => {};

module.exports = {
  creatingblog,
  gettingblog,
  updatingblog,
  deletingblog,
  getsingle,
};
