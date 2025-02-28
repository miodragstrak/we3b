import React from "react";

const projects = [
  {
    id: 1,
    title: "NelutAI: Transforming the Tourist Experience with AI-Powered Chatbot",
    description: "NelutAI, the award-winning AI chatbot designed to revolutionize how tourists interact with their travel destinations.",
    image: "/Nelutai.png"
  },
  {
    id: 2,
    title: "StayDirect AI: Innovating the PropTech Industry with AI-Driven Marketing Tools",
    description: "Property rental platform designed to streamline direct bookings for property owners and guests",
    image: "/SDAI.png"
  },
];

const ProjectsPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-3xl font-bold text-center mb-8">Our Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {projects.map((project) => (
          <div key={project.id} className="bg-white p-4 rounded-2xl shadow-lg">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover rounded-xl"
            />
            <h2 className="text-xl font-semibold mt-4">{project.title}</h2>
            <p className="text-gray-600 mt-2">{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;