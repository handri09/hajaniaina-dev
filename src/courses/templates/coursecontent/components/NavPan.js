import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { LessonLink } from '.';

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

        <div className='w-full flex flex-col gap-3 pt-3'>
          { 
            navs && navs.map( (nav, item) => (
              <LessonLink to={nav[1]} key={item} >{nav[0]}</LessonLink>
            ))
          }
        </div>

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
