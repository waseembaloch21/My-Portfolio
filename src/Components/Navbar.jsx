import React, { useState } from 'react';
import MyLogo from '../assets/images/Logo.jpeg';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Function to toggle the menu
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className='flex justify-between items-center px-5 py-3 shadow-md'>
            {/* Logo and Name */}
            <a href="#home" className='flex items-center gap-3'>
                <img
                    className='rounded-full w-14 md:w-16 border-2 border-blue-600'
                    src={MyLogo}
                    alt="Waseem Baloch Logo"
                    aria-label="Waseem Baloch Logo"
                />
                <span className='font-poppins text-lg md:text-xl font-semibold '>Waseem Baloch</span>
            </a>

            {/* Desktop Navigation Menu */}
            <nav>
                <ul className='hidden md:flex gap-6 font-poppins text-base'>
                    <li>
                        <a href="#home" className='hover:text-blue-600 hover:underline cursor-pointer text-xl font-bold'>Home</a>
                    </li>
                    <li>
                        <a href="#projects" className='hover:text-blue-600 hover:underline cursor-pointer text-xl font-bold'>Projects</a>
                    </li>
                    <li>
                        <a href="#services" className='hover:text-blue-600 hover:underline cursor-pointer text-xl font-bold'>Services</a>
                    </li>
                    <li>
                        <a href="#contact" className='hover:text-blue-600 hover:underline cursor-pointer text-xl font-bold'>Contact</a>
                    </li>
                </ul>
            </nav>

            {/* Mobile Menu (Hamburger Icon) */}
            <div className='md:hidden'>
                <button className='text-2xl focus:outline-none' onClick={toggleMenu} aria-label="Toggle Navigation Menu"> ☰ </button>
            </div>

            {/* Full-Screen Mobile Navigation Menu */}
            {isMenuOpen && (
                <div className='fixed top-0 left-0 w-full h-full bg-black text-white flex flex-col items-center justify-center z-50'>
                    {/* Close Button */}
                    <button
                        className='absolute top-5 right-5 text-3xl text-white focus:outline-none'
                        onClick={toggleMenu}
                        aria-label="Close Navigation Menu"
                    >
                        ✖
                    </button>

                    <ul className='flex flex-col gap-6 font-poppins text-xl  text-center'>
                        <li>
                            <a href="#home" className='hover:text-gray-400 cursor-pointer' onClick={toggleMenu}>Home</a>
                        </li>
                        <li>
                            <a href="#projects" className='hover:text-gray-400 cursor-pointer' onClick={toggleMenu}>Projects</a>
                        </li>
                        <li>
                            <a href="#services" className='hover:text-gray-400 cursor-pointer' onClick={toggleMenu}>Services</a>
                        </li>
                        <li>
                            <a href="#contact" className='hover:text-gray-400 cursor-pointer' onClick={toggleMenu}>Contact</a>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Navbar;