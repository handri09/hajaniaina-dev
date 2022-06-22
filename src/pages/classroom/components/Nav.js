import React, { useEffect, useState } from 'react';

function Nav() {
  const [nav, setNav] = useState('NANODEGREES');
  const onClick = (e) => {
    setNav(e);
  }

  useEffect(() => { 
    console.log(nav)
  }, [nav])
  
  return (
    <>
      <div className='w-full max-w-screen-lg mx-auto flex my-3 px-5'>
        <div className='w-full text-sm tracking-widest flex gap-5 justify-end items-center'>
          { ['NANODEGREES', 'PAID COURSES', 'FREE COURSES'].map( (item, i) => (
            <button key={i} className={`font-bold border-b-4 px-1 py-1 ${ nav === item ? 'border-violet-300' : 'border-transparent' }`} onClick={() => onClick(item)}>{ item }</button>
          )) }
        </div>
      </div>
    </>
  );
}

export default Nav;