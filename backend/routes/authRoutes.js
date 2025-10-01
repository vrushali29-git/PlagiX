const express = require("express");
const router = express.Router();
const { registerStudent, registerTeacher,login } = require("../controllers/authController");

router.post("/register/student", registerStudent);
router.post("/register/teacher", registerTeacher);
router.post("/login", login);

module.exports = router;
