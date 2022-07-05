import React from 'react';
import { NavPan, Headers, CourseBody } from './components';

function CourseContent({ navs, data, links }) {
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
        <NavPan open={open} navs={navs} />
        
        {/* Course Content*/}
        <div className={`w-full h-full bg-white flex flex-col justify-start items-center overflow-scroll px-2 pt-14`}>
          <Headers open={open} onOpen={() => onOpen()} />
          <CourseBody 
            data={data}
            links={links}
          />
        </div>
      </div>
    </>
  );
}

export default CourseContent;
