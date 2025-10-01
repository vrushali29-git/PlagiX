const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const Student = require("./models/Student");
const Teacher = require("./models/Teacher");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect DB
connectDB();

// 👉 Student Registration
app.post("/api/register/student", async (req, res) => {
  try {
    const { firstName, lastName, username, password, email, phone } = req.body;

    if (!firstName || !lastName || !username || !password || !email || !phone) {
      return res.status(400).json({ message: "All fields are required." });
    }

    const existingUser = await Student.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: "Username already exists." });
    }

    const student = new Student({
      firstName,
      lastName,
      username,
      password,
      email,
      phone,
    });

    await student.save();
    res.status(201).json({ message: "Student registered successfully!" });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

// 👉 Teacher Registration
app.post("/api/register/teacher", async (req, res) => {
  try {
    const { name, organization, username, password, email, phone } = req.body;

    if (!name || !organization || !username || !password || !email || !phone) {
      return res.status(400).json({ message: "All fields are required." });
    }

    const existingUser = await Teacher.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: "Username already exists." });
    }

    const teacher = new Teacher({
      name,
      organization,
      username,
      password,
      email,
      phone,
    });

    await teacher.save();
    res.status(201).json({ message: "Teacher registered successfully!" });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

// Start server
const PORT = 5000;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
