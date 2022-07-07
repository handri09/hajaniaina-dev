import React from 'react';

function Header(props) {
  return (
    <>
      <div className={`w-full border-b-2 border-violet-700 text-3xl text-gray-600 font-normal pt-3 pb-2`}>React Developer</div>
      <div className={`w-full py-4 shadow-md bg-white rounded flex items-center justify-center px-5 hover:shadow-lg`}>
        <div className={`w-1/2 flex flex-col gap-2`}>
          <p className={`text-xs text-gray-700 tracking-widest`}>PROGRAM COMPLETED</p>
          <p className='font-bold text-gray-700 tracking-widest'>You're all done!</p>
        </div>
        <div className={`w-1/2 flex justify-end`}>
          <p className={`text-sm font-bold text-gray-600 tracking-widest hover:bg-gray-100 px-3 py-2 rounded`}>GRADUATE</p>
        </div>
      </div>
      <div className={`w-full flex`}>
        <div className={`w-1/2`}>
          <p className={`text-2xl tracking-widest text-gray-600 font-extralight`}>Curriculum</p>
        </div>
        <div className={`w-1/2 flex justify-end uppercase text-sm tracking-widest font-bold text-gray-600 gap-5`}>
          <p className={`hover:border-b-4 border-violet-300`}>core</p>
          <p className={`hover:border-b-4 border-violet-300`}>elective</p>
        </div>
      </div>
    </>
  );
}

export default Header;
