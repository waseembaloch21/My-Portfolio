import React from "react";
import EventsApp from "../assets/images/Events-app.jpg";
import Furniture from "../assets/images/Furniture.avif";
import TodoApp from "../assets/images/Todo-app.jpeg";
import WeatherApp from "../assets/images/Weather-App.avif";

const projects = [
  {
    title: "Events App",
    description:
      "A web-based application to manage events records , developed using Next.js.",
    image: EventsApp,
    link: "https://findfriend.vercel.app/",
    technologies: ["Next.Js", "Tailwind.CSS"],
  },
  {
    title: "Furniture Web",
    description:
      "A professional website designed for a funiro web, focusing on modern UI and user experience.",
    image: Furniture,
    link: "https://furniture-web-beta.vercel.app/",
    technologies: ["React.js", "Tailwind.CSS"],
  },
  {
    title: "Todo App",
    description:
      "An e-commerce platform showcasing digital assets with features like product listing and responsive design.",
    image: TodoApp,
    link: "https://todo-app-seven-silk-87.vercel.app/",
    technologies: ["React.js", "Tailwind.CSS"],
  },
  {
    title: "Weather-App",
    description:
      "A modern and sleek website designed for a travel agency, highlighting their services and destinations.",
    image: WeatherApp,
    link: "",
    technologies: ["React.js", "Tailwind.CSS"],
  },
];

const ProjectsSection = () => {
  return (
    <div id="projects" className="bg-[#121212] text-white py-10 px-5 sm:px-20 md:px-32">
      <h2 className="text-3xl font-bold mb-8 text-center">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <img 
              src={project.image}
              alt={project.title}
              className="w-full h-52 object-cover rounded-xl p-2 "
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-300 mb-3">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-3">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="bg-blue-600 text-white text-xs font-medium py-1 px-3 rounded-full"
                  >
                    #{tech}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600 transition"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;