import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function NavPan({ open, navs }) {
  return (
    <>
      <div
        className={`
          ${ open ? '' : 'hidden' }
          w-72 h-full bg-sky-900 
          pt-12 flex flex-col
        `}>
        <div
          className={`
            text-gray-50 font-bold text-sm 
            tracking-widest pl-3 bg-sky-700
            py-3 pt-4
          `}>
          <p className=''>CONCEPTS</p>
        </div>
        { 
          navs && navs.map( (nav, item) => (
            <Link to={nav[1]} key={item} className={`px-5 py-3 text-md text-white antialiased font-sans`}>{nav[0]}</Link>
          ))
        }
        <div className={`w-full h-full flex justify-center items-end`}>
          <div
            className={`w-full 
              text-gray-50 font-bold text-sm 
              tracking-widest pl-3 bg-sky-700
              py-3
            `}>
            <p className='w-full'>RESOURCES</p>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default NavPan;