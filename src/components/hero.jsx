import React from 'react';
import { BsLinkedin, BsGithub, BsTwitter, BsInstagram } from 'react-icons/bs';
import Profile from '../assets/Portfolio.jpeg';

const Hero = () => {
  return (
    <section
      className='flex justify-around items-center mx-7 space-x-11
   lg:flex-row ssm:flex-col ssm:space-y-7 text-white'
    >
      <div className='lg:w-2/3 ssm:w-fit'>
        <div className='pl-7'>
          <p className='text-3xl mb-5 text-pink-700 pl-8'>Hello. I am</p>
          <h1 className='text-8xl mb-2 pl-7'>Gideon Missoy</h1>
          <hr className='py-2 border- border-white' />
          <h1 className='px-7'>
            a Full Stack Software Developer with a strong inclination towards
            backend development. I specialize in creating reliable and scalable
            web applications, ensuring they perform seamlessly and efficiently.
          </h1>
        </div>
        <div>
          <br />
          <br />
        </div>
        <div className='py-7 text-center'>
          <p>
            Let's build quality in programming and website development with our
            services
          </p>
          <button className='bg-green-500 hover:bg-green-700 text-black rounded-full px-5    py-2 my-5'>
            Show More...
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
            <BsTwitter
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
      <div className='w-1/3 items-center ssm:w-fit pr-7'>
        <img
          src={Profile}
          alt=''
          width={225}
          max_height={250}
          className='rounded-full w-full height-455px border-7 border-white'
        />
      </div>
    </section>
  );
};

export default Hero;
