import "../styles/card.css";

const ProjectCard = ({ project }) => {

  return (
    <div className="w-64 bg-white shadow-lg rounded-xl overflow-hidden mx-auto">
      <img src={project.image} alt={project.shortTitle} className="w-full h-40 object-contain p-2" />
      <div className="p-4 text-center">
        <h2 className="text-lg font-semibold">{project.fullTitle}</h2>
        <p className="text-gray-600">{project.description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;