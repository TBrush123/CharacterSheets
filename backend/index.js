require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const characterRoutes = require("./routes/characters");
const generatorRoutes = require("./routes/generator")

const app = express();
const PORT = process.env.PORT || 3000;


app.use(cors());
app.use(express.json());
app.use("/api/characters", characterRoutes);
app.use("/api/generator", generatorRoutes);

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("✅ Connected to MongoDB"))
    .catch((err) => console.error("❌ MongoDB Connection Error:", err));

    
app.get("/", (req, res) => {
    res.send("DnD Character Generator API is running!");
});
app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
})