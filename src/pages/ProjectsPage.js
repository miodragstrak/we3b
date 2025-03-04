import React from "react";
import "../styles/projects.css";
import { images } from "../assets/images";

const projects = [
  {
    id: 1,
    title: "NelutAI",
    fullTitle: "Transforming the Tourist Experience with AI-Powered Chatbot",
    description: "NelutAI, the award-winning AI chatbot designed to revolutionize how tourists interact with their travel destinations.",
    image: images.project1,
  },
  {
    id: 2,
    title: "StayDirect AI",
    fullTitle: "Innovating the PropTech Industry with AI-Driven Marketing Tools",
    description: "Property rental platform designed to streamline direct bookings for property owners and guests.",
    image: images.project2,
  },
  {
    id: 3,
    title: "VSEA Token",
    fullTitle: "Launching VSEA - Utility token of the SEA Nexus",
    description: "VSEA is the utility token of the SEA Nexus, used to power the network, reward accurate data, and build value. It’s an ASA - a token on the Algorand blockchain.",
    image: images.project3,
  },
  {
    id: 4,
    title: "TeslaWatt ERC20 Token",
    fullTitle: "TeslaWatt (TSW) ERC20 Token - New Payment Platform",
    description: "The company has created an ERC20 token and needed a payment process to be implemented on its website.",
    image: images.project4,
  },
  {
    id: 5,
    title: "RTI Blockchain",
    fullTitle: "RTI Blockchain",
    description: "RTI Blockchain makes the registration of load carrier transactions as simple and automated as internet banking..",
    image: images.project5,
  },
  // Add more projects as needed
];

const ProjectsPage = () => {
  return (
    <div className="projects-container">
      {projects.map((project) => (
        <div key={project.id} className="project-card">
          <div className="card-inner">
            <div className="card-front">
              <img src={project.image} alt={project.title} className="project-image" />
              <h3 className="project-title">{project.title}</h3>
            </div>
            <div className="card-back">
              <h3>{project.fullTitle}</h3>
              <p>{project.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectsPage;