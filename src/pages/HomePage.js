import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold">Welcome to Our Website</h1>
      <p className="text-gray-600 mt-2">AI & Blockchain Solutions</p>
      <Link to="/projects" className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg">
        View Projects
      </Link>
    </div>
  );
};

export default HomePage;