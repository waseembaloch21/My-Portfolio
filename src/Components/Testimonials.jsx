import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Saif from '../assets/images/Saif.jpeg';
import Adnan from '../assets/images/Adnan.jpeg';
import Noman from '../assets/images/NomanV2.png';

const testimonials = [
  {
    name: "Saif",
    role: "   Web And App Devloper ",
    message: " I specialize in building interactive and user-friendly websites. My goal is to help businesses establish a strong online presence through modern and scalable web solutions.",
    img: Saif
  },
  {
    name: "Adnan",
    role: "Full Stack Developer",
    message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis iure minus veritatis voluptas tempora architecto nobis voluptates totam illum sunt? Minus asperiores fuga quae sequi placeat pariatur modi explicabo consectetur",
    img: Adnan,
  },
  {
    name: "Noman Amman ",
    role: " IT Service Analyst | Innovator | Problem Solver",
    message: " Bridging technology and strategy to create efficient, secure, and scalable IT solutions. I specialize in elevating digital infrastructures and service management.",
    img: Noman,
  },
];
const Testimonials = () => {

 useEffect(() => {
      AOS.init({
        duration: 1000,
        once: true,
      });
    }, []);
  return (
    <section className="bg-[#121212] py-16">
      <div className="container mx-auto px-4 text-center text-white"data-aos="zoom-in" data-aos-delay="200">
        <h2 className="text-3xl font-serif font-bold mb-8">What My Friends Say </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg text-center hover:shadow-2xl transition-transform transform hover:scale-105">
              <img
                src={testimonial.img}
                alt={testimonial.name}
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <p className="text-gray-400 font-serif mb-4">"{testimonial.message}"</p>
              <div className="text-center">
                <h3 className="text-xl font-serif font-semibold">{testimonial.name}</h3>
                <p className="text-gray-500 font-serif">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;