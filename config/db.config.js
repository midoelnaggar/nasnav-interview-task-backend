const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    mongoose.set("strictQuery", false);
    await mongoose.connect(
      "mongodb+srv://mido:Asdcxz%40123@cluster0.ueg3sq8.mongodb.net/nasnav-task?retryWrites=true&w=majority",
      () => {
        console.log(`MongoDB connected successfully`);
      }
    );
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDB;
