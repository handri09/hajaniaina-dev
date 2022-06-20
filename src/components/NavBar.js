import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import CustomLink from './CustomLink';

function NavBar() {
  return (
    <>
      <div
        className={`w-screen max-w-screen-2xl shadow-md flex justify-end items-center px-5 py-3 bg-white`}>
        <div className='flex flex-row gap-1'>
          <CustomLink to=''>Home</CustomLink>
          <CustomLink to='classroom/'>Classroom</CustomLink>
        </div>
      </div>
      <Outlet />
    </>
  )
}

export default NavBar;