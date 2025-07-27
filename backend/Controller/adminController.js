const dotenv = require("dotenv");
const avalidation = require("../Validations/admin.validatio");
const Admin = require("../Models/admin.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const sendresponse = require("../Utils/sendresponse");
dotenv.config();

const creatingadmin = async (req, res) => {
  const name = req?.body?.name;
  const email = req?.body?.email;
  const password = req?.body?.password;
  const adminvalidation = avalidation.safeParse(req.body);
  if (!adminvalidation) {
    return res.status(400).send({
      success: false,
      message: "validation failed",
      errors: adminvalidation.errors.issues.map((err) => err.message),
    });
  }

  try {
    if (!email || !password) {
      return res.status(402).json({
        success: false,
        message: "Input failed",
      });
    }
    const existingAdmin = await Admin.find({ email });
    if (existingAdmin.length > 0) {
      return res.status(401).json({
        success: false,
        message: "Admin already exits",
        admin: existingAdmin,
      });
    }

    const hashedpassword = await bcrypt.hash(password, 10);
    const payload = {
      name: name,
      email: email,
      password: hashedpassword,
    };

    const new_admin = await Admin.create(payload);
    await new_admin.save();

    return res.status(200).json({
      success: true,
      message: "Admin created successfully",
      admin: {
        id: new_admin?._id,
        email: new_admin?.email,
      },
    });
  } catch (error) {
    console.log("There is an error while creating the admin", error);
    return res.status(500).send({
      success: false,
      message: "There is an Internal Server Error:",
      error: error?.message,
    });
  }
};

const proceedingadmin = async (req, res) => {
  try {
    const { email, password } = req?.body;

    if (!email || !password) {
      return sendresponse(res, 400, false, "Please complete the input");
    }

    // Make sure to select password
    const admin = await Admin.findOne({ email }).select("+password");

    if (!admin) {
      return sendresponse(res, 404, false, "Admin not found");
    }

    const isPasswordMatch = await bcrypt.compare(password, admin.password);
    if (!isPasswordMatch) {
      return sendresponse(res, 401, false, "Invalid credentials");
    }

    console.log("JWT secret:", process.env.JWT_PASSWORD);
    if (!process.env.JWT_PASSWORD) {
      throw new Error("JWT secret not defined");
    }

    const token = jwt.sign(
      { id: admin._id.toString() },
      process.env.JWT_PASSWORD,
      { expiresIn: "365d" }
    );

    const cookieOptions = {
      expires: new Date(Date.now() + 24 * 60 * 60 * 1000),
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "Strict",
    };

    res.cookie("jwt", token, cookieOptions);

    return sendresponse(
      res,
      200,
      true,
      "Admin logged in successfully",
      {
        id: admin._id,
        name: admin.name,
        email: admin.email,
      },
      [],
      { token }
    );
  } catch (error) {
    console.error("There is an error during admin login:", error);
    return sendresponse(res, 500, false, "Internal server error", null, [
      error?.message,
    ]);
  }
};

module.exports = { creatingadmin, proceedingadmin };
