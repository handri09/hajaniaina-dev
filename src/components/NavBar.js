import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import CustomLink from './CustomLink';
import logo from '../assets/logo.png'

function NavBar() {
  return (
    <>
      {/* <div className={`w-full shadow-md bg-white sticky top-0`}>
        <div className='w-full max-w-screen-2xl mx-auto flex justify-center items-center px-5'>
          <div className="w-full flex p-1 h-full items-center">
            <img src={logo} alt='logo' className='px-3 h-14'/>
            <p className='px-2 text-2xl font-bold text-violet-800'></p>
          </div>
          <div className='flex flex-row gap-1'>
            <CustomLink to=''>Home</CustomLink>
            <CustomLink to='demos/'>Demos</CustomLink>
            <CustomLink to='classroom/'>Classroom</CustomLink>
          </div>
        </div>
      </div> */}
      <Outlet />
    </>
  )
}

export default NavBar;