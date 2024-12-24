import React, { useEffect, useRef, useState } from 'react';
import MyLogo from '../assets/images/Logo.jpeg';
import { TiSocialLinkedin } from "react-icons/ti";
import { FaTwitter } from "react-icons/fa";
import { ImGithub } from "react-icons/im";
import { FaReact } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';
import { SiJavascript } from 'react-icons/si';
import { SiHtml5 } from 'react-icons/si';
import { SiCss3 } from 'react-icons/si';
import { FaFigma } from 'react-icons/fa';
import { SiBootstrap } from 'react-icons/si';
import { FaGit } from 'react-icons/fa';
import resume from '../assets/images/Waseem resume.pdf';
import Typed from 'typed.js';

const Hero = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const typedElementRef = useRef(null);

    useEffect(() => {
        const typed = new Typed(typedElementRef.current, {
            strings: ["Front-End Developer", "Web Developer", "Responsive Designer"],
            typeSpeed: 50,
            backSpeed: 30,
            loop: true,
        });
        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <div className='flex flex-col md:flex-row justify-between items-center font-poppins gap-5 md:gap-20 px-5'>
            {/* Left - Content */}
            <div className='text-center md:text-left'>
                <h1 className='text-3xl md:text-5xl font-bold mb-2 md:mb-4'>Waseem Baloch</h1>
                <h3 ref={typedElementRef} className='text-xl md:text-2xl font-semibold text-gray-300 mb-4'></h3>
                <p className='text-gray-400 leading-7 mb-6'>I create beautiful, responsive, and user-friendly web interfaces using modern frontend technologies.</p>
                <button 
                    onClick={() => setIsModalOpen(true)} 
                    className="cv"
                >
                    About Me
                </button>
                <a href={resume} download>
                <button  
                    className="cv"
                >
                  Download CV
                </button>
                </a>
            </div>

            {/* Mid - Image */}
            <img className="w-60 h-60 rounded-full border-4 border-gray-200 shadow-lg" src={MyLogo} alt="Developer" />

            {/* Right - Social Icons */}
            <div className="flex flex-row md:flex-col items-center gap-5 text-gray-400">
                <a href="https://www.linkedin.com/in/waseem-rauf-6076172b5/">
                    <TiSocialLinkedin />
                </a>

                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-3xl hover:text-blue-400 cursor-pointer transition transform hover:scale-110">
                    <FaTwitter />
                </a>

                <a href="https://github.com/waseembaloch21" target="_blank" rel="noopener noreferrer" className="text-3xl hover:text-gray-300 cursor-pointer transition transform hover:scale-110">
                    <ImGithub />
                </a>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-gray-900 text-white rounded-lg shadow-lg p-8 w-11/12 md:w-2/3 lg:w-1/2 relative flex flex-col md:flex-row gap-8">
                        {/* Left - Information */}
                        <div className="flex-1">
                            <button 
                                onClick={() => setIsModalOpen(false)} 
                                className="absolute top-4 right-4 text-gray-400 hover:text-gray-200 text-4xl"
                            >
                                &times;
                            </button>
                            <h2 className="text-2xl font-bold mb-4">About Me</h2>
                            <p className="text-gray-300 mb-6">
                                I am a passionate Front-End Developer specialized in creating responsive and user-friendly web interfaces. My core skills include:
                            </p>
                            <div className='flex justify-center items-center'>
                            <ul className="list-disc list-inside text-gray-400 mb-4">
                                <li className="flex items-center gap-2 text-blue-600 text-2xl"><FaReact /> React.js</li>
                                <li className="flex items-center gap-2 text-blue-400 text-2xl"><SiTailwindcss /> Tailwind CSS</li>
                                <li className="flex items-center gap-2 text-yellow-400 text-2xl"><SiJavascript /> JavaScript</li>
                                <li className="flex items-center gap-2 text-orange-500 text-2xl"><SiHtml5 /> HTML5</li>
                                <li className="flex items-center gap-2 text-blue-500 text-2xl"><SiCss3 /> CSS3</li>
                                <li className="flex items-center gap-2 text-purple-600 text-2xl"><FaFigma /> Figma</li>
                                <li className="flex items-center gap-2 text-indigo-600 text-2xl"><SiBootstrap /> Bootstrap</li>
                                <li className="flex items-center gap-2 text-gray-600 text-2xl"><FaGit /> Git & GitHub</li>
                            </ul>

                            {/* Right - Image */}
                        <div className="flex-1 flex justify-center items-center">
                            <img 
                                className=" hidden sm:block w-60 h-60 rounded-full border-4 border-gray-200 shadow-lg" 
                                src={MyLogo} 
                                alt="Waseem Baloch" 
                            />
                        </div>
                        </div>

                            <p className="text-gray-300">
                                <strong>Education:</strong> Self-learning.
                            </p>
                        </div>

                        
                    </div>
                </div>
            )}
        </div>
    );
}

export default Hero;