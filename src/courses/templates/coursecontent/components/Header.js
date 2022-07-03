import React from 'react';
import arrow from '../../../../assets/open.png';

function Headers({ open, onOpen }) {
  return (
    <div className={`w-full flex justify-center items-center pt-1`}>
      <div className={`w-10 text-left pl-2`} onClick={onOpen}><img src={arrow} alt='open' className={`${open ? 'rotate-180' : '' }`} /></div>
      <div className={`w-full flex justify-center`}>
        <div className={`w-full flex justify-end max-w-screen-md pr-5`}>
          <p className={`text-sm uppercase tracking-widest font-semibold text-violet-500`}>Send Page Feedback</p>
        </div>
      </div>
      <div className={`hidden md:block w-10 text-right pr-2`}>?</div>
    </div>
  );
}

export default Headers;