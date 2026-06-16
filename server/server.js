import mongoose from "mongoose";
import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: ".env" });

mongoose
  .connect(process.env.DATABASE)
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((err) => {
    console.log("Connection Failed:", err);
  });

mongoose.connection.on("error", (err) => {
  console.error("MongoDB connection error:", err);
});

import app from "./src/app.js";

const server = app.listen(process.env.PORT, () => {
  console.log(`Express running → On PORT : ${process.env.PORT}`);
});
