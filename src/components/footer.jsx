import React from 'react';
import { IoPersonSharp } from 'react-icons/io5';
import { FaPhoneFlip, FaLocationDot } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';
import { BsLinkedin, BsGithub, BsTwitter, BsInstagram } from 'react-icons/bs';
import { FaRegCopyright } from 'react-icons/fa';

function Footer() {
  return (
    <div className='mt-5 lg:mt-11 text-white'>
      <h1 className='mr-4 text-4xl lg:mr-11 lg:text-6xl font-bold text-green-500 flex justify-end'>
        Contact Me
      </h1>
      <div className='flex flex-col lg:flex-row p-2 lg:p-3'>
        <div className='lg:w-1/2 ssm:w-fit mx-7 flex items-center'>
          <div>
            <h1 className='text-2xl text-center py-2 lg:py-5 lg:text-4xl'>
              Are you satisfied by my work?
            </h1>
            <p className='text-sm text-center pb-3 lg:text-2xl'>
              Contact me and I will give you a quick response. Let's collaborate
              and build quality in Programming and Website Development.
            </p>
          </div>
        </div>
        <div className='w-full lg:w-1/2 lg:my-5 text-center lg:mx-11 lg:p-7 p-5 bg-black rounded-3xl'>
          <div className='text-pink-600 py-3'>
            <hr className='border-t-2 border-pink-600' />
            <h1 className='text-1xl text-pink-600 flex justify-end'>
              get in Touch
            </h1>
          </div>
          <div className='flex align-center text-center justify-between py-2'>
            <div className='flex'>
              <IoPersonSharp size={25} className='text-pink-600' />
              <span className='ml-2 lg:ml-4 text-1xl lg:text-2xl'>Name</span>
            </div>
            <div>
              <span className='justify-end text-green-500 text-1xl lg:text-2xl'>
                Gideon Kipsang Missoy
              </span>
            </div>
          </div>
          <div className='flex align-center text-center justify-between py-2'>
            <div className='flex'>
              <FaLocationDot size={25} className='text-pink-600' />
              <span className='ml-2 lg:ml-4 text-1xl lg:text-2xl'>Address</span>
            </div>
            <div>
              <span className='justify-end text-green-500 text-1xl lg:text-2xl'>
                Nairobi, Kenya
              </span>
            </div>
          </div>
          <div className='flex align-center text-center justify-between py-2'>
            <div className='flex'>
              <MdEmail size={25} className='text-pink-600' />
              <span className='ml-2 lg:ml-4 text-1xl lg:text-2xl'>Email</span>
            </div>
            <div>
              <span className='justify-end text-green-500 text-1xl lg:text-2xl'>
                gideon.missoy@gmail.com
              </span>
            </div>
          </div>
          <div className='flex align-center text-center  justify-between py-2'>
            <div className='flex'>
              <FaPhoneFlip size={25} className='text-pink-600' />
              <span className='ml-2 lg:ml-4 text-1xl lg:text-2xl'>
                Phone Number
              </span>
            </div>
            <div>
              <span className='justify-end text-green-500 text-1xl lg:text-2xl'>
                +254704158777
              </span>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className='flex justify-center mt-4 space-x-4 cursor-pointer pb-5 lg:pb-11'>
          <a href='https://github.com/GideonMissoy' target='_blank'>
            <BsGithub
              size={30}
              className='border-6 hover:border-indigo-800 rounded-full'
            />
          </a>
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
        <div className='py-2 bg-black'>
          <div className='flex align-center justify-center '>
            <FaRegCopyright size={25} />
            <h1 className='ml-1 lg:ml-2'>
              Created By{' '}
              <a
                href='https://github.com/GideonMissoy'
                className='text-pink-500'
              >
                Gideon Missoy
              </a>{' '}
              | All rights reserved
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
