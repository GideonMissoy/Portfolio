import { CgNametag } from 'react-icons/cg';
import { HiMenu } from 'react-icons/hi';
import { IoCloseCircle } from 'react-icons/io5';
import { useState } from 'react';

export const Nav = () => {
  const [toggle, setToggle] = useState(false);

  function openMenu() {
    setToggle(true);
  }

  function closeMenu() {
    setToggle(false);
  }

  return (
    <>
      <div
        className='flex items-center justify-between px-11 py-3 lg:flex-row
      '
      >
        <div className='text-white font-mono text-3xl tracking-wider flex items-center'>
          <CgNametag /> DevMissoy
        </div>
        <div className='space-x-3'>
          <div className='ssm:hidden lg:block space-x-2'>
            <a
              href='#'
              className='text-white hover:bg-indigo-800
          rounded-full px-5 py-2 text-xl'
            >
              Skills
            </a>
            <a
              href='#'
              className='text-white hover:bg-indigo-800
          rounded-full px-5 py-2 text-xl'
            >
              Projects
            </a>
            <a
              href='#'
              className='text-white hover:bg-indigo-800
          rounded-full px-5 py-2 text-xl'
            >
              Testimonials
            </a>
          </div>
          <div className='ssm:block lg:hidden'>
            {toggle ? (
              <IoCloseCircle
                onClick={closeMenu}
                size={30}
                className='cursor-pointer'
              />
            ) : (
              <HiMenu onClick={openMenu} size={30} className='cursor-pointer' />
            )}
          </div>
        </div>
      </div>
      <div className='ssm:block lg:hidden'>
        {toggle ? (
          <div className='flex justify-between ml-10'>
            <ul>
              <li className='text-white hover:bg-indigo-800 rounded-full text-xl mb-2 px-5 cursor-pointer'>
                Skills
              </li>
              <li className='text-white hover:bg-indigo-800 rounded-full text-xl mb-2 px-5 cursor-pointer'>
                Projects
              </li>
              <li className='text-white hover:bg-indigo-800 rounded-full text-xl mb-2 px-5 cursor-pointer'>
                Testimonials
              </li>
            </ul>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </>
  );
};
