import React from 'react';

function Nav({ open, sections }) {
  return (
    <>
      <div className={` ${ open ? '' : 'hidden' } w-52 h-full bg-violet-200 pt-14 flex flex-col`}>
        { 
          sections && sections.map( (section, item) => (
            <div key={item} className='px-5 py-2'>{section}</div>
          ))
        }
      </div>
    </>
  );
}

export default Nav;