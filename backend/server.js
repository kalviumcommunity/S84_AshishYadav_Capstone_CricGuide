const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const contactRoutes = require("./routes/contactRoutes");

const trainerTraineeRoutes = require("./routes/trainerTraineeRoutes");

dotenv.config();

const app = express();
app.use(
  cors({
    origin: "https://cricguide.netlify.app",
    credentials: true, // if you're using cookies or sessions
  })
);
app.use("/api/contact", contactRoutes);
app.use(express.json());
app.use("/uploads", express.static("uploads"));
app.use("/api/trainertrainee", trainerTraineeRoutes);
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("CRICKET GUIDE API is running!");
});

connectDB();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
