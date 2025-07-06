const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");

const authRoutes = require("./routes/authRoutes");
const userRoutes = require('./routes/userRoutes');
const contactRoutes = require('./routes/contactRoutes');
const trainerTraineeRoutes = require("./routes/trainerTraineeRoutes");

dotenv.config();

const app = express();
connectDB();

app.use(cors({
  origin: ['http://localhost:5173', 'https://cricguide.netlify.app'],
  credentials: true
}));

app.use(express.json());
app.use("/uploads", express.static("uploads"));

// Route usage
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/trainertrainee", trainerTraineeRoutes);

app.get("/", (req, res) => {
  res.send("CRICKET GUIDE API is running!");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
