import React from 'react';

function ReactDev() {
  const [open, setOpen] = React.useState(true);
  const onOpen = () => { 
    setOpen(prev => !prev)
  }

  return (
    <>
      <div className={`w-full bg-white h-screen flex`}>
        {/* <div className={`${ open ? 'flex w-60' : 'hidden'} bg-green-600 h-screen border-2 border-white`}></div> */}
        {/* <div className={`w-full bg-white`}>
          <div classname={`w-full h-10`}>test</div>
          <div className={`w-full h-screen max-w-screen-lg mx-auto border-2 mt-20`} onClick={onOpen}>Open</div>
        </div> */}
        <div className={`w-1/2 h-full bg-violet-400 pt-12`}>test</div>
        <div className={`w-1/2 h-full bg-violet-200 pt-12 flex flex-col justify-start items-center`}>
          <div className={`w-full bg-green-200 h-96`}>Test</div>
          <div className={`w-full bg-green-200 h-96`}>Test</div>
          <div className={`w-full bg-green-200 h-96`}>Test</div>
          <div className={`w-full bg-green-200 h-96`}>Test</div>
          <div className={`w-full bg-green-200 h-96`}>Test</div>
          <div className={`w-full bg-green-200 h-96`}>Test</div>
          <div className={`w-full bg-green-200 h-96`}>Test</div>
        </div>
      </div>
    </>
  )
}

export default ReactDev;