import { CgNametag } from 'react-icons/cg';
import { IoMdArrowDropdownCircle } from 'react-icons/io';

export const Nav = () => {
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
            <IoMdArrowDropdownCircle size={27} />
          </div>
        </div>
      </div>
    </>
  );
};
