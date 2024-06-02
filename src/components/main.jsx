import React from 'react';
import { Nav } from './nav';
import Hero from './hero';
import About from './about';
import Services from './services';
import Experience from './experience';
import Skills from './skills';
import Projects from './projects';
import Footer from './footer';
import Background from '../assets/background.jpg';

const Main = () => {
  return (
    <div
      className='bg-cover bg-fixed bg-center bg-no-repeat min-h-screen'
      style={{ backgroundImage: `url(${Background})` }}
    >
      <Nav />
      <Hero />
      <About />
      <Services />
      <Experience />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
};

export default Main;
