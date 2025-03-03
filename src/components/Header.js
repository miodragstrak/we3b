import React from "react";
import Navbar from "./Navbar";
import "../styles/header.css";
import { images } from "../assets/images";

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <img src={images.logo} alt="Company Logo" className="logo" />
      </div>
      <Navbar />
    </header>
  );
};

export default Header;