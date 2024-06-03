import React from 'react';
import Jenga from '../assets/Jenga.png';

function Projects() {
  return (
    <>
      <div className='mt-5 lg:mt-11 text-white'>
        <h1 className='mr-4 text-4xl lg:mr-11 lg:text-6xl font-bold text-green-500 flex justify-end'>
          My Projects
        </h1>
        <div className='flex flex-col mx-5 lg:flex-row lg:my-5'>
          <div className='w-full lg:w-1/2 p-5 my-5 text-center rounded-3xl bg-gray-950 lg:mr-7'>
            <img
              src={Jenga}
              alt=''
              className='border-5 border-white rounded-3xl'
            />
            <h1 className='text-center text-2xl text-green-500'>Jenga</h1>
            <p className='text-center'>
              Built with Django and React, with JWT Authentication. Links
              clients looking with contractors and materials. Uses M-pesa Api.
            </p>
          </div>
          <div className='w-full lg:w-1/2 p-5 my-5 text-center rounded-3xl bg-gray-950'>
            <img
              src={Jenga}
              alt=''
              className='border-5 border-white rounded-3xl'
            />
            <h1 className='text-center text-2xl text-green-500'>Mp3Huddle</h1>
            <p className='text-center'>
              Built with Django and React, with JWT Authentication. Creates a
              room to listen to music with friends. Uses Spotify, M-pesa and
              Paypal APIs
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
