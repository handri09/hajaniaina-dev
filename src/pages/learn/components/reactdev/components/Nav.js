import React from 'react';
import { chapter } from '../utils/data';

function Nav({ open, sections, chap, les }) {
  console.log(chap, les)
  return (
    <>
      <div className={` ${ open ? '' : 'hidden' } w-52 h-full bg-violet-200 pt-14 flex flex-col`}>
        { 
          chapter[chap] && chapter[chap].lessons[0].sections.map( (section, item) => (
            <div key={item} className='px-5 py-2'>{section.name}</div>
          ))
        }
      </div>
    </>
  );
}

export default Nav;