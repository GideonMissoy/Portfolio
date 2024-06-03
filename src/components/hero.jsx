import React from 'react';
import { BsLinkedin, BsGithub, BsTwitter, BsInstagram } from 'react-icons/bs';
import Profile from '../assets/Portfolio.jpeg';
import { FaXTwitter } from 'react-icons/fa6';

const Hero = () => {
  return (
    <section
      className='flex flex-col lg:justify-around lg:items-center lg:mx-7 lg:space-x-11
   lg:flex-row text-white my-4 lg:my-7'
    >
      <div className='px-2 lg:px-0 w-full lg:w-2/3'>
        <div className='lg:pl-7'>
          <p className='text-1xl mb:2 lg:text-3xl lg:mb-5 text-pink-700 lg:pl-8'>
            Hello. I am
          </p>
          <h1 className='text-4xl lg:text-8xl mb-2 lg:px-7'>Gideon Missoy</h1>
          <hr className='py-2 border-1 border-pink-700 w-4/5 lg:w-full' />
          <h1 className='px-3 text-sm lg:px-7 lg:text-2xl'>
            a Full Stack Software Developer with a bias for backend development.
            I specialize in creating reliable and scalable web applications,
            ensuring they perform seamlessly and efficiently.
          </h1>
        </div>
        <div className='py-7 text-center'>
          <p className='text-center'>
            Let's build quality in programming and website development with our
            services
          </p>
          <button className='justify-center bg-green-500 hover:bg-green-700 text-black rounded-full lg:px-6 px-5 py-2 my-5'>
            Hire Me
          </button>
          <br />
          <div className='flex justify-center mt-4 space-x-4 cursor-pointer'>
            <BsGithub
              size={30}
              className='border-6 hover:border-indigo-800 rounded-full'
            />
            <BsLinkedin
              size={30}
              className='border-6 hover:border-indigo-800 rounded-full'
            />
            <FaXTwitter
              size={30}
              className='border-6 hover:border-indigo-800 rounded-full'
            />
            <BsInstagram
              size={30}
              className='border-6 hover:border-indigo-800 rounded-full'
            />
          </div>
        </div>
      </div>
      <div className='w-full lg:w-1/3 flex justify-center lg:pr-7'>
        <img
          src={Profile}
          alt=''
          width={225}
          className='w-4/5 border-3 rounded-full lg:max-h-65 object-cover lg:border-7 border-white'
        />
      </div>
    </section>
  );
};

export default Hero;
