import React from 'react';
import { IoPersonSharp } from 'react-icons/io5';
import { FaPhoneFlip } from 'react-icons/fa6';
import { FaLocationDot } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';

function Footer() {
  return (
    <div className='text-white'>
      <h1 className='text-6xl font-bold text-green-500 flex justify-end'>
        Contact Me
      </h1>
      <div className='flex'>
        <div className='lg:w-1/2 ssm:w-fit lg:ml-11 p-7 bg-black rounded-3xl'>
          <div className='text-pink-600 py-3'>
            <hr className='border-t-2 border-pink-600' />
            <h1 className='text-1xl text-pink-600 flex justify-end'>
              get in Touch
            </h1>
          </div>
          <div className='flex align-center text-center justify-between py-2'>
            <div className='flex'>
              <IoPersonSharp size={30} className='text-pink-600' />
              <span className='ml-4 text-2xl'>Name</span>
            </div>
            <div>
              <span className='justify-end text-green-500 text-2xl'>
                Gideon Kipsang Missoy
              </span>
            </div>
          </div>
          <div className='flex align-center text-center justify-between py-2'>
            <div className='flex'>
              <FaLocationDot size={30} className='text-pink-600' />
              <span className='ml-4 text-2xl'>Address</span>
            </div>
            <div>
              <span className='justify-end text-green-500 text-2xl'>
                Nairobi, Kenya
              </span>
            </div>
          </div>
          <div className='flex align-center text-center justify-between py-2'>
            <div className='flex'>
              <MdEmail size={30} className='text-pink-600' />
              <span className='ml-4 text-2xl'>Name</span>
            </div>
            <div>
              <span className='justify-end text-green-500 text-2xl'>
                gideon.missoy@gmail.com
              </span>
            </div>
          </div>
          <div className='flex align-center text-center  justify-between py-2'>
            <div className='flex'>
              <FaPhoneFlip size={30} className='text-pink-600' />
              <span className='ml-4 text-2xl'>Phone Number</span>
            </div>
            <div>
              <span className='justify-end text-green-500 text-2xl'>
                +254704158777
              </span>
            </div>
          </div>
        </div>
        <div className='lg:w-1/2 ssm:w-fit'>2</div>
      </div>
    </div>
  );
}

export default Footer;
