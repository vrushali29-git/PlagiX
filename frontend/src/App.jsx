import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage/Homepage";
import Signup from "./components/Signup/Signup";   
import Author from "./components/Author/Author"

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/author" element={<Author/>} />
      </Routes>
    </Router>
  );
};

export default App;
