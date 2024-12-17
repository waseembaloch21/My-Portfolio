import React, { useState } from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import emailjs from 'emailjs-com';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubscription = (e) => {
    e.preventDefault();

    if (!email) {
      setMessage('Please enter a valid email.');
      return;
    }

    emailjs
      .send(
        'service_ijsugv2', // Replace with your EmailJS service ID
        'template_jcw3dxg', // Replace with your EmailJS template ID
        { email }, // Data to send
        'dxlIerXfEdTyPTsYl' // Replace with your EmailJS public key
      )
      .then(() => {
        setMessage('Subscription successful! Thank you.');
        setEmail('');
      })
      .catch(() => {
        setMessage('Failed to subscribe. Please try again later.');
      });
  };

  return (
    <footer id='footer' className="bg-[#121212] text-white py-10">
      <div className="container mx-auto px-5 md:px-20">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start">
          {/* Logo and Description */}
          <div className="mb-6 md:mb-0 md:w-1/3">
            <h2 className="text-2xl font-bold mb-3">Waseem Baloch</h2>
            <p className="text-gray-400">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error commodi ut animi provident, nulla explicabo! Atque, quam. Pariatur, repellendus consectetur vero, nostrum, voluptatibus mollitia labore aliquid architecto consequatur ullam a?
            </p>
          </div>

          {/* Links Section */}
          <div className="flex md:w-1/3 md:justify-around mb-6 md:mb-0 gap-4">
            <div>
              <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
              <ul className="text-gray-400">
                <li className="mb-2 hover:text-white cursor-pointer">
                  <a href="#home">Home</a>
                </li>
                <li className="mb-2 hover:text-white cursor-pointer">
                  <a href="#about">About</a>
                </li>
                <li className="mb-2 hover:text-white cursor-pointer">
                  <a href="#services">Services</a>
                </li>
                <li className="mb-2 hover:text-white cursor-pointer">
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3">Resources</h3>
              <ul className="text-gray-400">
                <li className="mb-2 hover:text-white cursor-pointer">Privacy Policy</li>
                <li className="mb-2 hover:text-white cursor-pointer">Terms & Conditions</li>
                <li className="mb-2 hover:text-white cursor-pointer">Blog</li>
                <li className="mb-2 hover:text-white cursor-pointer">FAQs</li>
              </ul>
            </div>
          </div>

          {/* Newsletter Subscription */}
          <div className="md:w-1/3">
            <h3 className="text-lg font-semibold mb-3">Subscribe to my updates</h3>
            <form onSubmit={handleSubscription} className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-gray-800 text-white p-2 rounded-md outline-none w-full"
              />
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-md"
              >
                Subscribe
              </button>
            </form>
            {message && <p className="mt-3 text-sm text-gray-400">{message}</p>}
          </div>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center md:justify-between items-center mt-10">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Waseem Baloch. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            
            <a href="https://github.com/waseembaloch21" className="text-gray-400 hover:text-white">
              <FaGithub />
            </a>
        
            <a
              href="https://www.linkedin.com/in/waseem-rauf-6076172b5/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;