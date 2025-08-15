const express = require("express");
const router = express.Router();
const adminmiddleware = require("../Middlewares/adminMiddleware");
const {
  creatingblog,
  gettingblog,
  updatingblog,
  deletingblog,
  getsingle,
} = require("../Controller/blogsController");
router.post("/createblog", adminmiddleware, creatingblog);
router.get("/getsingleblog/:id", getsingle);
router.get("/gettingblog", gettingblog);
router.put("/updateblog", updatingblog);
router.delete("/deleteblog", deletingblog);

module.exports = router;
