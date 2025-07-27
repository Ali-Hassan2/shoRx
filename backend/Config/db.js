const mongoose = require("mongoose");
const dotenv = require("dotenv");

const connect_db = async () => {
  try {
    const uri = process.env.MONGODB_URI;
    if (!uri) {
      throw new Error("Cannot connect to mongo db uri not found");
      process.exit(1);
    }

    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MONGODB Connected");
  } catch (error) {
    console.log("There is an error while connecting to mongodb", error);
    process.exit(1);
  }
};

const disconnect_db = async () => {
  try {
    await mongoose.disconnect();
    console.log("MONGODB Disconnected.");
  } catch (error) {
    console.log("There is an error while disconnecting db.", error);
  }
};

module.exports = { connect_db, disconnect_db };
