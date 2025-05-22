import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import EventsApp from "../assets/images/Events-app.jpg";
import Furniture from "../assets/images/Furniture.avif";
// import TodoApp from "../assets/images/Todo-app.jpeg";
import WeatherApp from "../assets/images/Weather-App.avif";
// import ImageUpload from "../assets/images/ImageUpload.png";

const projects = [
  {
    title: "Events App",
    description:
      "The Event App is a modern FullStack app, responsive web application designed to help users discover, create, and manage events effortlessly.",
    image: EventsApp,
    link: "https://findfriend.vercel.app/",
    technologies: ["Next Js", "Shad.Cn"],
  },
  {
    title: "Furniture Web",
    description:
      "Furniture Web is a modern and responsive e-commerce website designed for browsing and purchasing furniture online. ",
    image: Furniture,
    link: "https://furniture-web-beta.vercel.app/",
    technologies: ["React JS", "Tailwind.CSS"],
  },
 
  {
    title: "Weather-App",
    description:
      "The Weather App is a responsive web application that provides real-time weather updates for any location worldwide. ",
    image: WeatherApp,
    link: "https://weather-app-two-phi-91.vercel.app/",
    technologies: ["React JS", "Tailwind.CSS"],
  },
 
];

const ProjectsSection = () => {

   useEffect(() => {
      AOS.init({
        duration: 1000,
        once: true,
      });
    }, []);

  return (

    <div id="projects" className="bg-[#121212] text-white py-10 px-5 mt-7 sm:px-20 md:px-32" data-aos="zoom-in" data-aos-delay="200">
      <h2 className="text-3xl font-bold font-serif  mb-8 text-center">My Projects</h2>
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
              <h3 className="text-xl font-serif font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-300 font-serif mb-3">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-3">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="bg-cyan-300 text-black text-xs font-serif font-medium py-1 px-3 rounded-full"
                  >
                    #{tech}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center font-serif bg-cyan-300 text-black py-3 px-6 rounded-lg hover:bg-cyan-600 transition"
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