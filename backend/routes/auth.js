const express = require("express");
const bcrypt = require("bcryptjs");
const Student = require("../models/Student");
const Teacher = require("../models/Teacher");

const router = express.Router();

// Register
router.post("/register", async (req, res) => {
  try {
    const { role, username, password, ...rest } = req.body;

    if (role === "student") {
      const existing = await Student.findOne({ username });
      if (existing) return res.status(400).json({ message: "Student already exists" });

      const hashedPassword = await bcrypt.hash(password, 10);
      const newStudent = new Student({ username, password: hashedPassword, ...rest });
      await newStudent.save();
      return res.status(201).json({ message: "Student registered successfully" });
    }

    if (role === "teacher") {
      const existing = await Teacher.findOne({ username });
      if (existing) return res.status(400).json({ message: "Teacher already exists" });

      const hashedPassword = await bcrypt.hash(password, 10);
      const newTeacher = new Teacher({ username, password: hashedPassword, ...rest });
      await newTeacher.save();
      return res.status(201).json({ message: "Teacher registered successfully" });
    }

    return res.status(400).json({ message: "Invalid role" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
