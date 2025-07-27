const express = require("express");
c;
const router = express.Router();

const { gettingresponses } = require("../Controller/chatController");
router.post("/getresponse", gettingresponses);

module.exports = router;
