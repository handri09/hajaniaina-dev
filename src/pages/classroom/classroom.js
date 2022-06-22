import React from 'react';
import { Nav } from './components';

function Classroom() {
  return (
    <>
      <Nav />
      <div className='w-full max-w-screen-lg mx-auto px-1 my-1'>

        <div className='w-full bg-white rounded shadow-md flex'>
          <h1 className='text-center text-violet-700'>Classroom</h1>
        </div>

      </div>
    </>
  )
}

export default Classroom;