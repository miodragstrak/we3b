import React from "react";
import { Routes, Route } from "react-router-dom"; // Remove BrowserRouter from here
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import "./styles/global.css";

function App() {
  return (
    <>
      <Header /> {/* Fixed at the top */}
      <div className="content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;