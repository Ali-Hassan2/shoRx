const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const morgan = require("morgan");
const fileUpload = require("express-fileupload");
const cookieParser = require("cookie-parser");
const cloudinary = require("cloudinary").v2;
const { connect_db, disconnect_db } = require("./Config/db");
const adminRouter = require("./Routes/adminRoute");
const chatRouter = require("./Routes/chatRoute");
const blogsRouter = require("./Routes/blogsRoute");
dotenv.config();

const app = express();
const port = process.env.PORT || 5000;
app.use(
  cors({
    origin: "http://localhost:3000", // frontend URL
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    credentials: true,
  })
);

// agar cookies/session use kar rahe ho to:
app.use(express.json());
app.use(morgan("dev"));
app.use(cookieParser());
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
    limits: { fileSize: 50 * 1024 * 1024 },
  })
);

//cloudinary Configuration
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});
// routes here
app.use("/admin", adminRouter);
app.use("/chat", chatRouter);
app.use("/blog", blogsRouter);

app.get("/", (req, res) => {
  res.send("Yes you are there.");
});

let server;

const startServer = async () => {
  try {
    await connect_db();

    server = app.listen(port, () => {
      console.log(`Server is running at port ${port}`);
    });
  } catch (error) {
    console.error("Error while starting server:", error);
    process.exit(1);
  }
};

const shutting_down_server = async () => {
  try {
    console.log("Shutting down the server...");

    if (server) {
      server.close(() => {
        console.log("HTTP server closed.");
      });
    }

    await disconnect_db();
    process.exit(0);
  } catch (error) {
    console.error("Error while shutting down server:", error);
    process.exit(1);
  }
};

process.on("SIGINT", shutting_down_server);
process.on("SIGTERM", shutting_down_server);

startServer();
