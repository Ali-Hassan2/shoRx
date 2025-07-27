const express = require("express");
const router = express.Router();
const adminmiddleware = require("../Middlewares/adminMiddleware");
const {
  creatingblog,
  gettingblog,
  updatingblog,
  deletingblog,
} = require("../Controller/blogsController");
router.post("/createblog", adminmiddleware, creatingblog);
router.get("/gettingblog", gettingblog);
router.put("/updateblog", updatingblog);
router.delete("/deleteblog", deletingblog);

module.exports = router;
