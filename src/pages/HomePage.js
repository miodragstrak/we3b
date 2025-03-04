import React from "react";
import "../styles/homepage.css"; 
// import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="homepage">
      <h1 className="slogan"> Welcome to the World of Digital Innovation </h1>
      <p className="text"> Empowering businesses with AI-driven automation, blockchain, and IoT to build a smarter, more connected future. </p>
      <p className="text"> We specialize in digital transformation, process automation, and workflow optimization, 
        ensuring seamless operations. At the cutting edge of technology, we develop innovative solutions that enhance connectivity, 
        security, and intelligent automation for a future-ready business landscape.</p>
    </div>
  );
};

export default HomePage;