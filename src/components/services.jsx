import React from 'react';
import { DiAptana } from 'react-icons/di';
import { DiCss3 } from 'react-icons/di';
import { DiDatabase } from 'react-icons/di';

function Services() {
  return (
    <>
      <div className='mt-5 lg:mt-11 text-white'>
        <h1 className='mr-4 text-4xl lg:mr-11 lg:text-6xl font-bold text-green-500 flex justify-end'>
          My Services
        </h1>
        <div className='flex flex-col lg:flex-row text-white mx-3 lg:mx-11'>
          <div className='w-full lg:w-1/3 my-5 text-center justify-center lg:mr-11 lg:px-7 px-4 rounded-3xl  bg-gray-950 hover:bg-gray-900'>
            <div className='flex justify-center py-1'>
              <DiCss3 size={47} />
            </div>
            <h1 className='text-3xl text-center py-2 px-5'>
              <span className='text-pink-500'>&lt;Frontend&gt;</span>{' '}
              Development
            </h1>
            <p className='px-2 pb-3'>
              I enjoy crafting engaging, responsive and highly interactive
              applications that provide an exceptional user experience using
              HTML5, CSS3, JavaScript, React.js and Tailwindcss.
            </p>
          </div>
          <div className='w-full lg:w-1/3 my-5 text-center justify-center lg:mr-11 lg:px-7 px-4 rounded-3xl  bg-gray-950 hover:bg-gray-900'>
            <div className='flex justify-center py-1'>
              <DiAptana size={47} />
            </div>
            <h1 className='text-3xl text-center py-2 px-5'>
              <span className='text-pink-500'>&lt;Backend/&gt;</span>{' '}
              Development
            </h1>
            <p className='px-2 pb-3'>
              I am a backend developer with experience in developing scalable,
              secure and reliable systems using Django, Node.js and TypeScript.
            </p>
          </div>
          <div className='w-full lg:w-1/3 my-5 text-center justify-center lg:px-7 px-4 rounded-3xl  bg-gray-950 hover:bg-gray-900'>
            <div className='flex justify-center py-1'>
              <DiDatabase size={47} />
            </div>
            <h1 className='text-3xl text-center py-2 px-5'>
              <span className='text-pink-500'>Database</span> Administrator
            </h1>
            <p className='px-2 pb-3'>
              With expertise in SQL Server, PostgreSQL, MongoDB and MySQL, I
              ensure data integrity, performance optimization, and seamless
              integration to support scalable and robust application systems.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
