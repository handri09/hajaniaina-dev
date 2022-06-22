import React from 'react';
import { Nav } from './components';
import react from '../../assets/reactlogo.png'

function Classroom() {
  return (
    <>
      <Nav />

      <div
        className={`
          w-full max-w-screen-md mx-auto border-2 border-green-600
          p-2`}>
        <div className={`w-full border-2 border-red-600 rounded flex flex-col`}>

          <div className={`w-full h-full bg-white rounded flex`}>
            <div className={`w-1/4 py-5 flex justify-center items-center`}>
              <img src={react} alt='react' className='' style={{ width: '60px' }} />
            </div>
            <div className={`w-full flex flex-col justify-center items-center gap-1`}>
              <div className='w-full flex justify-start items-center'><p className='tracking-widest text-gray-600 text-left'>React Developer</p></div>
              <div className='w-full flex jsutify-start items-center'><p className='tracking-widest p-1 text-gray-600 text-xs border border-gray-700 font-bold rounded bg-gray-100 hover:bg-gray-200'>NANODEGREE</p></div>
            </div>
            <div className={`w-full flex justify-center items-center`}>
              <div className={`w-1/2 h-full flex justify-end items-center`}>
                <button className=''>
                  <p className='text-blue-500 text-sm tracking-widest font-bold font-sans'>VIEW CERTIFICATE</p>
                </button>
              </div>
              <div className={`w-1/2 h-full flex justify-center items-center`}>
                <button className='px-4 py-2 shadow-md rounded'>
                  <p className='text-sm tracking-widest font-bold text-gray-600'>REVIEW</p>
                </button>
              </div>
            </div>
          </div>

          <div className={`w-full h-1/3 bg-gray-100 rounded px-10 py-5 flex flex-col`}>
            <input className='w-full ' type='range' value={95}/>
            <p className='text-xs text-gray-600 tracking-widest text-left' >95% Complete</p>
          </div>
        </div>
      </div>


      <div className='w-full max-w-screen-md mx-auto px-1 my-1'>

        <button className='w-full flex flex-col hover:drop-shadow-lg '>
          <div className='w-full h-full bg-white flex justify-center items-stretch border'>
            <div className='flex justify-center items-center py-2 px-2 border'>
              <img src={react} alt='react' className='w-full' />
            </div>

            <div className='flex flex-col gap-1 p-1 justify-center border'>
              <p className='tracking-widest text-gray-600 text-left border'>React Developer</p>
              <div className='flex jsutify-start'><p className='tracking-widest p-1 text-gray-600 text-xs border border-gray-700 font-bold inline rounded bg-gray-100 hover:bg-gray-200'>NANODEGREE</p></div>
            </div>

            <div className='w-full border flex justify-center items-center'>
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