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
      <div className='flex items-center justify-between mx-11 py-5 lg:flex-row'>
        <div className='text-white text-3xl tracking-wider flex items-center px-7 hover:pointer align-center'>
          <a href='#' className='flex'>
            <CgNametag /> <span className='text-pink-600'>&lt;Dev</span>
            Missoy<span className='text-pink-600'>/&gt;</span>
          </a>
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
