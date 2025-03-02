import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/global.css";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import { images } from "./assets/images";
import Navbar from "./components/Navbar";

function App() {

  return (
    <Router basename="/blobubo">
      <Navbar />
      <div className='min-h-screen w-full flex items-center justify-center'>
        <img src={images.logo} alt="Company Logo" className="logo" />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;