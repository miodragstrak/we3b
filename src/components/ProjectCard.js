import { useState } from "react";
import "../styles/card.css";
import "../assets/images"; 

const ProjectCard = ({ project }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className={`card ${flipped ? "flipped" : ""}`} onClick={() => setFlipped(!flipped)}>
      <div className="card-inner">
        {/* Front Side */}
        <div className="card-front">
          <img src={project.image} alt={project.shortTitle} className="rounded-xl" />
          <h2 className="text-xl font-semibold mt-4">{project.shortTitle}</h2>
        </div>
        {/* Back Side */}
        <div className="card-back">
          <h2 className="text-xl font-bold">{project.fullTitle}</h2>
          <p className="text-gray-600 mt-2">{project.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;