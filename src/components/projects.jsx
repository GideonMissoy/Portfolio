import React from 'react';
import Jenga from '../assets/Jenga.png';

function Projects() {
  return (
    <>
      <div className='text-white mt-5'>
        <h1 className='text-6xl font-bold text-green-500 flex justify-end mb-5'>
          My Projects
        </h1>
        <div className='flex mx-11'>
          <div className='lg:w-1/3 ssm:w-fit p-5 rounded-3xl bg-gray-950 lg:mr-7'>
            <img
              src={Jenga}
              alt=''
              className='border-5 border-white rounded-3xl'
            />
            <h1 className='text-center text-2xl text-green-500'>Jenga</h1>
            <p className='text-center'>
              Built with Django and React, with JWT Authentication
            </p>
          </div>
          <div className='lg:w-1/3 ssm:w-fit p-5 rounded-3xl bg-gray-950 lg:mr-7'>
            <img
              src={Jenga}
              alt=''
              className='border-5 border-white rounded-3xl'
            />
            <h1 className='text-center text-2xl text-green-500'>Mp3Huddle</h1>
            <p className='text-center'>
              Built with Django and React, with JWT Authentication
            </p>
          </div>
          <div className='lg:w-1/3 ssm:w-fit p-5 rounded-3xl bg-gray-950 '>
            <img
              src={Jenga}
              alt=''
              className='border-5 border-white rounded-3xl'
            />
            <h1 className='text-center text-2xl text-green-500'>BusBooking</h1>
            <p className='text-center'>
              Built with Django and React, with JWT Authentication
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
