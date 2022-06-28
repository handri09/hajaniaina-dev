import React from 'react';
import { Nav, Header, Course } from './components';

function ReactDev() {
  const [open, setOpen] = React.useState(true);
  const onOpen = () => { 
    setOpen(prev => !prev)
  }

  return (
    <>
      <div className={`w-full bg-white h-screen flex  antialiased text-gray-700`}>
        <Nav open={open} sections={['1.rewr', '2.wrwe fe', '3.dslovln vs']} chap={102} les={''}/>
        
        {/* Course Content*/}
        <div className={`w-full h-full bg-white flex flex-col justify-start items-center overflow-scroll px-2 pt-14`}>
          <Header open={open} onOpen={() => onOpen()} />
          <Course chap={102}/>
        </div>
        
      </div>
    </>
  )
}

export default ReactDev;
