import "../styles/card.css";

const ProjectCard = ({ project }) => {

  return (
    <div>
      <img src={project.image} alt={project.shortTitle} />
      <div>
        <h2>{project.fullTitle}</h2>
        <p>{project.description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;