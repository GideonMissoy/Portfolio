import React from 'react';
import { DiAptana } from 'react-icons/di';
import { DiCss3 } from 'react-icons/di';
import { DiDatabase } from 'react-icons/di';

function Services() {
  return (
    <>
      <div className='mx-11 mt-7'>
        <div className='text-white py-5'>
          <h1 className='text-6xl font-bold text-green-500 flex justify-end'>
            My Services
          </h1>
        </div>
        <div className='flex ssm:flex-col lg:flex-row text-white'>
          <div className='lg:w-1/3 ssm:w-fit justify-center mr-11 px-7 py-4 rounded-3xl  bg-gray-950 hover:bg-gray-900 hover:px-8 hover:py-5'>
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
          <div className='lg:w-1/3 ssm:w-fit justify-center mr-11 px-7 py-4 rounded-3xl bg-gray-950 hover:bg-gray-900 hover:px-8 hover:py-5'>
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
          <div className='lg:w-1/3 ssm:w-fit justify-center px-7 py-4 bg-gray-950 hover:bg-gray-900 rounded-3xl hover:px-8 hover:py-5'>
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
