import React from "react";
import { FaLaptopCode, FaMobileAlt, FaPalette, FaChartBar } from "react-icons/fa";

const services = [
  {
    title: "Web Development",
    description:
      "Building responsive and user-friendly web applications using modern frontend technologies like React.js and Tailwind CSS.",
    icon: <FaLaptopCode className="text-blue-400 text-4xl mx-auto" />,
  },
  {
    title: "Responsive Design",
    description:
      "Ensuring your website looks great on all devices with fully responsive and mobile-first design principles.",
    icon: <FaMobileAlt className="text-green-400 text-4xl mx-auto" />,
  },
  {
    title: "UI/UX Design",
    description:
      "Creating visually appealing and user-centered designs to enhance the user experience and interface.",
    icon: <FaPalette className="text-pink-400 text-4xl mx-auto" />,
  },
  {
    title: "Performance Optimization",
    description:
      "Optimizing web applications for speed and performance to provide a seamless user experience.",
    icon: <FaChartBar className="text-yellow-400 text-4xl mx-auto" />,
  },
];

const ServicesSection = () => {
  return (
    <div id="services" className="bg-black text-gray-100 py-10 px-5 sm:px-20 md:px-32">
      <h2 className="text-3xl font-bold mb-8 text-center">My Services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-gray-800 shadow-lg rounded-lg p-6 text-center hover:shadow-2xl transition-transform transform hover:scale-105"
          >
            <div className="mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-2 text-gray-100">{service.title}</h3>
            <p className="text-gray-400">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;