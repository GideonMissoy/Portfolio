import React from 'react';
import { MdDownloadForOffline } from 'react-icons/md';

function About() {
  return (
    <div className='lg:mx-11 ssm:mx-5 mt-7 text-white'>
      <div className='text-white py-5'>
        <h1 className='text-6xl font-bold text-green-500 flex justify-end'>
          About Me
        </h1>
      </div>
      <div className='flex lg:flex-row ssm:flex-col items-center mx-9'>
        <div className='lg:w-2/5 ssm:w-fit ssm:my-5 ssm:pb-5 mr-9'>
          <h1 className='text-3xl text-green-500 text-center'>
            I am <span className='text-pink-500'>&lt;FullStack&gt;</span>{' '}
            software developer with a bias for{' '}
            <span className='text-pink-500'>&lt;Backend/&gt;</span> Development.
          </h1>
          <div className='flex mt-7'>
            <div className='lg:w-1/2 ssm:w-1/2 p-8 rounded-3xl bg-gray-950 hover:border border-green-500 mr-5'>
              <h1 className='text-6xl'>
                <span className='text-green-500'>05+</span>
              </h1>
              <p className='text-white text-2xl pil-4'>PROJECTS COMPLETED</p>
            </div>
            <div className='lg:w-1/2 ssm:w-1/2 p-8 rounded-3xl bg-gray-950 hover:border border-green-500'>
              <h1 className='text-6xl'>
                <span className='text-green-500'>03+</span>
              </h1>
              <p className='text-white text-2xl pl-4'>YEARS OF EXPERIENCE </p>
            </div>
          </div>
          <div className='flex justify-center mt-7'>
            <h1 className='flex justify-center items-center pl-6 py-2 border border-green-500 hover:bg-green-700 cursor-pointer rounded-full'>
              <span className='font-bold pr-2'>DOWNLOAD MY CV</span>
              <MdDownloadForOffline size={35} />
            </h1>
          </div>
        </div>
        <div className='lg:w-3/5 ssm:w-fit lg:ml-5 bg-black p-7 rounded-3xl text-center'>
          <p className='py-2'>
            I am a software developer with a strong focus on modern web
            development technologies. My expertise lies in the backend
            development using Django, Node.js and TypeScript, as well as the
            frontend development utilizing JavaScript and React.js. My goal is
            to leverage these powerful technologies to create top-notch
            innovative and scalable solutions for a wide range of clients and
            industries.
          </p>
          <p className='py-2'>
            My educational background includes a BSc in Mathematics and Computer
            Science which has provided me with a solid foundation in
            programming, data structures, algorithms, and software engineering
            principles. Over the years, through bootcamps and online courses, I
            have continuously expanded my skill set and expertise, delving into
            various frameworks and technologies, including React Native for
            mobile app development. I am 1X{' '}
            <a
              href='https://powerlearnproject.org/'
              target='_blank'
              className='text-pink-400'
            >
              PowerLearnProject
            </a>{' '}
            certified in Software Development, a course that ran for 4 months,
            and 1X{' '}
            <a
              href='https://www.alxafrica.com/'
              target='_blank'
              className='text-pink-400'
            >
              ALX Africa
            </a>{' '}
            certified in Software Engineering, a course that ran for 12 months.
          </p>
          <p className='py-2'>
            I bring a unique blend of technical expertise and creative vision to
            web development. I am dedicated to delivering cutting-edge digital
            experiences and thrive on continuous growth and learning through new
            challenges. Passionate about applying new technologies to real-world
            issues, I find great fulfillment in diverse projects that showcase
            my creativity and problem-solving abilities. Motivated to contribute
            to organizational growth and industry advancement, I am committed to
            making meaningful contributions and pushing the boundaries of what
            is possible in the world of software development.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
