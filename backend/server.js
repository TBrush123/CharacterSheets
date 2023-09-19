require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const app = express();
const characterRoutes = require("./Routes/characters");

app.use(express.json());
app.use("/api/characters/", characterRoutes);

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

mongoose
  .connect(process.env.uri, {
    usenewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(
    app.listen(process.env.PORT, () => {
      console.log(process.env.PORT);
    })
  )
  .catch((error) => console.log(error));
