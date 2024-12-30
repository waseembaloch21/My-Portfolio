import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import BackgroundCanvas from './BackgroundCanvas';

const HeaderSection = () => {
  return (
    <header className='h-screen  flex flex-col relative'>
      {/* Background Canvas */}
      {/* <BackgroundCanvas /> */}
      <div>
        <BackgroundCanvas />

      </div>
      {/* Navbar */}
      <div className='px-5 sm:px-20 md:px-32'>
        <Navbar />
      </div>

      {/* Hero Section */}
      <div className='flex-grow flex items-center px-5 sm:px-20 md:px-32'>
        <Hero />
      </div>
    </header>
  );
};

export default HeaderSection;