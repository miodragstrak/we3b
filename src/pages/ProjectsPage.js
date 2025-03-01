import { images } from "../assets/images";

const projects = [
  {
    id: 1,
    shortTitle: "AI Assistant",
    fullTitle: "AI-Powered Virtual Assistant",
    description: "An advanced AI chatbot for businesses.",
    image: images.project1,  // ✅ Use imported image
  },
  {
    id: 2,
    shortTitle: "Blockchain ID",
    fullTitle: "Decentralized Identity System",
    description: "A blockchain-based identity verification system.",
    image: images.project2,  // ✅ Use imported image
  },
];

const ProjectsPage = () => {
  return (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mx-auto max-w-6xl">
    {projects.map((project) => (
      <ProjectCard key={project.id} project={project} />
      ))}
  </div>
  );
};

export default ProjectsPage;