import React from 'react';
import { Link } from 'react-router-dom';
import arrow from '../../../../assets/open.png';

function CoursePage() {
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
        
      </div>
    </>
  );
}

export default CoursePage;