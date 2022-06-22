import React from 'react';

function CourseCard(props) {
  const { react, title, completion } = props;
  return (
    <div className={`w-full max-w-screen-md mx-auto p-2`}>
      <button className={`w-full rounded flex flex-col shadow-md hover:shadow-lg`}>
        <div className={`w-full h-full bg-white rounded flex`}>
          <div className={`w-1/4 py-5 flex justify-center items-center`}>
            <img src={react} alt='react' className='' style={{ width: '60px' }} />
          </div>
          <div className={`w-full flex flex-col justify-center items-center gap-1`}>
            <div className='w-full flex justify-start items-center'><p className='tracking-widest text-gray-600 text-left'>{ title }</p></div>
            <div className='w-full flex jsutify-start items-center'><p className='tracking-widest p-1 text-gray-600 text-xs border border-gray-700 font-bold rounded bg-gray-100 hover:bg-gray-200'>NANODEGREE</p></div>
          </div>
          <div className={`w-full flex justify-center items-center`}>
            <div className={`w-1/2 h-full flex justify-end items-center`}>
              <button className=''>
                <p className='text-blue-500 text-sm tracking-widest font-bold font-sans hover:bg-gray-100 p-2 rounded-md'>VIEW CERTIFICATE</p>
              </button>
            </div>
            <div className={`w-1/2 h-full flex justify-center items-center`}>
              <button className='px-4 py-2 shadow-md rounded hover:shadow-lg'>
                <p className='text-sm tracking-widest font-bold text-gray-600'>REVIEW</p>
              </button>
            </div>
          </div>
        </div>
        <div className={`w-full h-1/3 bg-gray-100 rounded px-10 py-5 flex flex-col`}>
          <input className='w-full' type='range' value={completion} />
          <p className='text-xs text-gray-600 tracking-widest text-left' >{completion}% Complete</p>
        </div>
      </button>
    </div>
  );
}

export default CourseCard;