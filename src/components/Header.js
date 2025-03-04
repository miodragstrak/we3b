import React from "react";
import Navbar from "./Navbar";
import "../styles/header.css";
import { images } from "../assets/images";

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <img src={images.bbblogo} alt="Company Logo" className="logo" />
        <img src={images.lllogo} alt="Company Logo" className="logo" />
      </div>
        <h1 className="company-name">Block Build Bor x Ledger Lemur</h1>
      <Navbar />
    </header>
  );
};

export default Header;