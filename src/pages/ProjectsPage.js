import React from "react";
import { images } from "../assets/images";
import ProjectCard from "../components/ProjectCard";

const projects = [
  {
    id: 1,
    shortTitle: "NelutAI",
    fullTitle: "NelutAI: Transforming the Tourist Experience with AI-Powered Chatbot",
    description: "NelutAI, the award-winning AI chatbot designed to revolutionize how tourists interact with their travel destinations.",
    image: images.project1,  // ✅ Use imported image
  },
  {
    id: 2,
    shortTitle: "StayDirect AI",
    fullTitle: "StayDirect AI: Innovating the PropTech Industry with AI-Driven Marketing Tools",
    description: "Property rental platform designed to streamline direct bookings for property owners and guests.",
    image: images.project2,  // ✅ Use imported image
  },
];

const ProjectsPage = () => {
  return (
    <div>
      <h1>Our Projects</h1>
      <div>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;