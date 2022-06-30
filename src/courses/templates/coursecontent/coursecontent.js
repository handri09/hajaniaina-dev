import React from 'react';
import arrow from '../../../assets/open.png';
import { NavPan } from './components';


function CourseContent({ navs}) {
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
          <Header open={open} onOpen={() => onOpen()} />
          <Course chap={102}/>
        </div>
      </div>
    </>
  );
}

export default CourseContent;

function Header({ open, onOpen }) {
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

function Course({ chap }) {
  return (
  <div className={`w-full max-w-screen-md flex flex-col gap-5`}>
    <div className={`w-full border-b-2 border-violet-700 pt-3 text-2xl`}>Why React ?</div>
    <div className={`w-full tracking-wide`}>
      <p>From <a href='https://en.wikipedia.org/wiki/Function_composition_(computer_science)'>Wikipedia</a>, Composition is:</p>
      <p className={`p-3 font-mono`}><em>to combine simple functions to build more complicated ones</em></p>
    </div>
  </div>
  );
}