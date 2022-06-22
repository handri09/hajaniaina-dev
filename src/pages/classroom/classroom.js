import React from 'react';
import { Nav } from './components';
import react from '../../assets/reactlogo.png'

function Classroom() {
  return (
    <>
      <Nav />
      <div className='w-full max-w-screen-md mx-auto px-1 my-1 rounded-lg'>
        <button className='w-full rounded-lg shadow-md flex flex-col hover:drop-shadow-lg'>

          <div className='w-full h-full bg-white flex'>
            <div className='flex py-5 px-3'>
              <img src={react} alt='react' className='h-20' />
            </div>
            <div className='flex flex-col gap-1 p-1 h-full justify-center border'>
              <p className='tracking-widest text-gray-600'>React Developer</p>
              <div className='flex jsutify-start'><p className='tracking-widest p-1 text-gray-600 text-xs border border-gray-700 font-bold inline rounded bg-gray-100 hover:bg-gray-200'>NANODEGREE</p></div>
            </div>
            <div className='w-full'>
              <p className=''>THE REST</p>
            </div>
          </div>

          <div className='w-full h-1/3 bg-gray-100 px-10 py-5 flex flex-col'>
            <input className='w-full ' type='range' value={95}/>
            <p className='text-xs text-gray-600 tracking-widest text-left' >95% Complete</p>
          </div>

        </button>
      </div>
    </>
  )
}

export default Classroom;