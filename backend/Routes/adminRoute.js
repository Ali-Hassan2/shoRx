const express = require("express");
const adminMiddleware = require("../Middlewares/adminMiddleware");
const {
  creatingadmin,
  proceedingadmin,
  adminlogout,
} = require("../Controller/adminController");
const router = express.Router();

router.post("/signup", adminMiddleware, creatingadmin);
router.post("/logout", adminlogout);
router.post("/login", proceedingadmin);

module.exports = router;
