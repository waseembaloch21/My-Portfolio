import React from 'react';
import Saif from '../assets/images/Saif.jpeg';
import Adnan from '../assets/images/Adnan.jpeg';
import Taif from '../assets/images/Taif.jpeg';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Saif",
      role: "Full Stack Developer",
      message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis iure minus veritatis voluptas tempora architecto nobis voluptates totam illum sunt? Minus asperiores fuga quae sequi placeat pariatur modi explicabo consectetur",
      img: Saif
    },
    {
      name: "Adnan",
      role: "Full Stack Developer",
      message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis iure minus veritatis voluptas tempora architecto nobis voluptates totam illum sunt? Minus asperiores fuga quae sequi placeat pariatur modi explicabo consectetur",
      img: Adnan,
    },
    {
      name: "Taif ",
      role: "Frontend Developer",
      message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis iure minus veritatis voluptas tempora architecto nobis voluptates totam illum sunt? Minus asperiores fuga quae sequi placeat pariatur modi explicabo consectetur",
      img: Taif
    },
  ];

  return (
    <section className="bg-[#121212] py-16">
      <div className="container mx-auto px-4 text-center text-white">
        <h2 className="text-3xl font-bold mb-8">What My Friends Say </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <img
                src={testimonial.img}
                alt={testimonial.name}
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <p className="text-gray-400 mb-4">"{testimonial.message}"</p>
              <div className="text-center">
                <h3 className="text-xl font-semibold">{testimonial.name}</h3>
                <p className="text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;