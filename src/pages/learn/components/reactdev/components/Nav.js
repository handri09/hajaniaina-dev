import React from 'react';
import { chapter } from '../utils/data';
import { Link } from 'react-router-dom';

function Nav({ open, sections, chap, les }) {
  console.log(chap, les)
  return (
    <>
      <div className={` ${ open ? '' : 'hidden' } w-72 h-full bg-violet-200 pt-14 flex flex-col`}>
        { 
          chapter[chap] && chapter[chap].lessons[0].sections.map( (section, item) => (
            <Link to={section.id.toString()} key={item} className='px-5 py-2 text-sm'>{section.name}</Link>
          ))
        }
      </div>
    </>
  );
}

export default Nav;

