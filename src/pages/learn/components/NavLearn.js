import React from 'react';
import logo from '../../../assets/logo.png'

function NavLearn() {
  return (
    <div className={`w-full bg-violet-900 flex`}>
      <div className={`hidden w-1/3 md:flex justify-start pl-5 items-center`}>
        <p className={`text-white text-xl`}>Hajaniaina-dev</p>
      </div>
      <div className={`w-full flex justify-center items-center`}>

        <form className={`w-full px-2 p-1`}>   
          <label for='default-search' className='mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300'>Search</label>
          <div className='relative'>
            <div className='flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none'>
              <svg className='w-5 h-5 text-gray-500 dark:text-gray-400' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'></path></svg>
            </div>
            <input type='search' id='default-search' className='block p-4 pl-10 w-full text-sm text-gray-900 bg-violet-200 rounded-lg border border-gray-300 focus:ring-violet-500 focus:border-violet-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-violet-500 dark:focus:border-violet-500' placeholder='Search Mockups, Logos...' required />
            <button type='submit' className='text-white absolute right-2.5 bottom-2.5 bg-violet-700 hover:bg-violet-800 focus:ring-4 focus:outline-none focus:ring-violet-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-violet-600 dark:hover:bg-violet-700 dark:focus:ring-violet-800'>Search</button>
          </div>
        </form>

      </div>
      <div className={`hidden md:w-1/3 md:flex justify-end pr-5 items-center `}>
        <p className={`text-white text-xl`}>LogOff</p>
      </div>
    </div>
  )
}

export default NavLearn;