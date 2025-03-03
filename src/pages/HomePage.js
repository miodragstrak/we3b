import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to Our Website</h1>
      <p>AI & Blockchain Solutions</p>
      <Link to="/projects">
        View Projects
      </Link>
    </div>
  );
};

export default HomePage;