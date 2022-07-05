import React from 'react';
import arrow from '../../../../assets/open.png';

function Headers({ open, onOpen }) {
  return (
    <div className={`w-full flex justify-center items-center pt-1`}>
      <div className={`w-10 text-left md:pl-2`} onClick={onOpen}><img src={arrow} alt='open' className={`${open ? 'rotate-180' : '' }`} /></div>
      <div className={`w-full flex justify-center`}>
        <div className={`w-full flex justify-end max-w-screen-md pr-1 lg:pr-5`}>
          <p className={`hidden md:block text-sm uppercase tracking-widest font-semibold text-sky-700`}>Send Page Feedback</p>
          <p className={`md:hidden text-sm uppercase tracking-widest font-semibold text-sky-700`}>Feedback</p>
        </div>
      </div>
      <div className={`hidden md:block w-10 text-right pr-2`}>?</div>
    </div>
  );
}

export default Headers;