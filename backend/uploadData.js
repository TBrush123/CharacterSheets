const mongoose = require("mongoose");
const fs = require("fs");
require("dotenv").config();

// Load MongoDB Model
const Class = require("./models/Class"); // Adjust the path to your schema

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI);

const uploadClasses = async () => {
  try {
    // Read the JSON file
    const classesData = JSON.parse(fs.readFileSync("uploadData/classes.json", "utf-8"));

    // Insert into DB
    await Class.insertMany(classesData);
    console.log("✅ Classes uploaded successfully!");

    // Close DB connection
    mongoose.connection.close();
  } catch (err) {
    console.error("❌ Error uploading classes:", err);
    mongoose.connection.close();
  }
};

// Run the function
uploadClasses();
