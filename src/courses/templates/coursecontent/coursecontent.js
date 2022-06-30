import React from 'react';
import { Link } from 'react-router-dom';
import arrow from '../../../../assets/open.png';

function CourseContent() {
  const [open, setOpen] = React.useState(true);
  const onOpen = () => { 
    setOpen(prev => !prev)
  }

  return (
    <>
      <div
        className={`
          w-full bg-white h-screen antialiased
          flex text-gray-700
        `}>
        <Nav open={open} navs={navs} />
      </div>
    </>
  );
}

export default CourseContent;

function Nav({ open, navs }) {
  return (
    <>
      <ol
        className={`
          ${ open ? '' : 'hidden' }
          w-72 h-full bg-violet-200 
          pt-14 flex flex-col
        `}>
        { 
          navs && navs.map( (nav, item) => (
            <li key={item}><Link to={'test'} className='px-5 py-2 text-sm'>{section.name}</Link></li>
          ))
        }
      </ol>
    </>
  );
}