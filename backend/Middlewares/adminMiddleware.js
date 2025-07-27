const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");
const sendresponse = require("../Utils/sendresponse");
dotenv.config();

const adminmid = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer")) {
    sendresponse(res, 404, false, "There is no token");
  }
  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_PASSWORD);
    console.log("The token decoded is:", decoded);
    req.adminmid = decoded.id;
    next();
  } catch (error) {
    console.log("There is an error", error);
    sendresponse(res, 500, false, [error?.message]);
  }
};
module.exports = adminmid;
