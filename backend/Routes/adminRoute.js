const express = require("express");
const {
  creatingadmin,
  proceedingadmin,
} = require("../Controller/adminController");
const router = express.Router();

router.post("/signup", creatingadmin);
router.post("/login", proceedingadmin);

module.exports = router;
