import React from 'react';
import logo from '../assets/logo.png';
import { Link, Outlet } from 'react-router-dom';

function NavClassRoom() {
  return (
    <>
      <div className={`w-full bg-sky-900 flex fixed top-0 z-50`}>
        <div className={`hidden w-1/3 md:flex justify-start pl-5 items-center`}>
          <p className={`text-white text-xl`}>Hajaniaina-dev</p>
        </div>
        <div className={`w-full flex justify-center items-center`}>

          <form className={`w-full max-w-screen-lg mx-auto px-2 p-1`}>   
            <label for='default-search' className='mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300'>Search</label>
            <div className='relative'>
              <div className='flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none'>
                <svg className='w-6 h-6 text-gray-500 dark:text-gray-400' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'></path></svg>
              </div>
              <input type='search' id='default-search' className='block p-2 pl-10 w-full text-md text-gray-900 bg-sky-200 rounded-lg border border-gray-300 focus:ring-sky-500 focus:border-sky-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-sky-500 dark:focus:border-sky-500' placeholder='Search ...' />
              <button type='submit' className='text-white absolute right-2.5 bottom-2 bg-sky-700 hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-sky-300 font-medium rounded-lg text-sm px-4 py-1 dark:bg-sky-600 dark:hover:bg-sky-700 dark:focus:ring-sky-800'>Search</button>
            </div>
          </form>

        </div>
        <div className={`hidden md:w-1/3 md:flex justify-end pr-5 items-center `}>
          <Link to='/hajaniaina-dev' className={`text-white text-xl`}>LogOff</Link>
        </div>
      </div>
      <Outlet />
    </>
  )
}

export default NavClassRoom;