import React from 'react';
import { FaWhatsapp } from 'react-icons/fa'; 
import HeaderSection from './Components/HeaderSection';
import ProjectsSection from './Components/ProjectsSection';
import ServicesSection from './Components/ServicesSection';
import Testimonials from './Components/Testimonials';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

const App = () => {
  return (
    <div>
      <HeaderSection/>
      <ProjectsSection/>
      <ServicesSection/>
      <Testimonials/>
      <Contact/>
      <Footer/>
      
      {/* WhatsApp Icon */}
      <a 
        href="https://wa.me/923324572782" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="fixed bottom-4 right-4 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition duration-300 sm:h-20  sm:w-20 flex flex-col justify-center items-center  "
      >
        <FaWhatsapp size={40} />
      </a>
    </div>
  );
};

export default App;