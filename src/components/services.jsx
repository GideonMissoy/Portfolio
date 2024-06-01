import React from 'react';

function Services() {
  return (
    <>
      <div className='mx-11 mt-7'>
        <div className='text-white py-5'>
          <h1 className='text-6xl'>My Services</h1>
        </div>
        <div className='flex ssm:flex-col lg:flex-row text-white'>
          <div className='lg:w-1/3 ssm:w-fit justify-center mr-11 bg-{#003001}'>
            <h1 className='text-3xl px-5 py-3'>&lt;Backend&gt; Development</h1>
            <p>
              I am a backend developer with experience in developing scalable,
              secure and reliable systems using Django, Node.js and TypeScript.
            </p>
          </div>
          <div className='lg:w-1/3 ssm:w-fit justify-center mr-11 bg-{#003001}'>
            <h1 className='text-3xl px-5 py-3'>Frontend Development</h1>
            <p>
              I enjoy crafting engaging, responsive and highly interactive
              applications that provide an exceptional user experience using
              HTML5, CSS3, JavaScript, React.js and Tailwindcss.
            </p>
          </div>
          <div className='lg:w-1/3 ssm:w-fit justify-center bg-{#003001}'>
            <h1 className='text-3xl px-5 py-3'>Database Administrator</h1>
            <p>
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
