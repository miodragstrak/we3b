import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import logo from "./bbb.png"; // Make sure to place your logo inside the src folder

function App() {
  return (
    <Router basename="/blobubo">
      <div>
      <img src={logo} alt="Company Logo" className="logo" />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;