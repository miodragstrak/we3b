import React from "react";
import "./App.css";
import logo from "./bbb.png"; // Make sure to place your logo inside the src folder

function App() {
  return (
    <div className="container">
      <img src={logo} alt="Company Logo" className="logo" />
      <h1 className="slogan">Building the Future with AI & Blockchain</h1>
    </div>
  );
}

export default App;