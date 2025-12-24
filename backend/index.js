import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import bookRoutes from "./routes/book.route.js";
import userRoutes from "./routes/user.route.js";

dotenv.config();

const app = express();
app.use(cors());
const PORT = process.env.PORT || 4000;
const URI = process.env.MONOGDB_URI;
//connect to monogodb
try {
  mongoose.connect(URI);
  console.log("Connected to MongoDB");
} catch (err) {
  console.error("Error connecting to MongoDB:", err);
}

//defining routes
app.use(express.json());

app.use("/book", bookRoutes);
app.use("/user", userRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
