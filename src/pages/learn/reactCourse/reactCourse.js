import React from 'react';

// styles
const box = 'w-full py-4 px-3 bg-white shadow-md hover:shadow-lg rounded text-gray-700';

function ReactCourse() {
  return (
    <>
      <div className={`pt-14 w-full max-w-screen-md mx-auto flex flex-col gap-5 px-3`}>
        <div className={`w-full border-b-2 border-violet-700 text-3xl text-gray-600 font-normal pt-3 pb-2`}>React Developer</div>
        <div className={`w-full py-4 shadow-md bg-white rounded flex items-center justify-center px-5 hover:shadow-lg`}>
          <div className={`w-1/2 flex flex-col gap-2`}>
            <p className={`text-xs text-gray-700 tracking-widest`}>PROGRAM COMPLETED</p>
            <p className='font-bold text-gray-700 tracking-widest'>You're all done!</p>
          </div>
          <div className={`w-1/2 flex justify-end`}>
            <p className={`text-sm font-bold text-gray-600 tracking-widest hover:bg-gray-100 px-3 py-2 rounded`}>GRADUATE</p>
          </div>
        </div>
        <div className={`w-full flex`}>
          <div className={`w-1/2`}>
            <p className={`text-2xl tracking-widest text-gray-600 font-extralight`}>Curriculum</p>
          </div>
          <div className={`w-1/2 flex justify-end uppercase text-sm tracking-widest font-bold text-gray-600 gap-5`}>
            <p className={`hover:border-b-4 border-violet-300`}>core</p>
            <p className={`hover:border-b-4 border-violet-300`}>elective</p>
          </div>
        </div>
        {/** Course Details */}
        <div className={`w-full flex flex-col gap-3`}>
          <Introduction />
          <ReactFundamentas />
        </div>

        <ReactRedux />

      </div>
    </>
  )
}

export default ReactCourse;

const Introduction = () => (
  <div className={`${box} flex flex-col gap-3 antialiased`}>
    <p className='font-bold tracking-widest border-b-2 border-violet-500 pb-2'>Introduction</p>
    <p className='text-sm pb-3 max-w-screen-sm'>
      Ny Program "React Developer" dia misy cours 3 ary projets 3. Isakin'ny projet iray dia opportunite hoan-tsika 
      hanehoana sy hanamafisana ireo lesona nianarana.
      Ireo Project vitanao kosa dia ho lasa anisan ireo "Career Portfolio" ho anao, izay haneho ny fahafehezanao ny 
      React an'ireo ho Mpampiasa anao.
      Manampy an'izay dia ireo "code reviewd projects" an ity program ity, dia hanampy anao aminy fivoaranao.
    </p>
    <hr />
    <div className={`${box} drop-shadow`}>
      <p className='font-bold'>Welcome to the React Nanodegree Program</p>
      <p className='text-sm max-w-screen-sm leading-relaxed'>
        Ho hitanao hoe inona ny tena mampiavaka ny react. 
        Hanoratra fonction tsotra isika mba ahazo fonction complexe, declarative code, ary ahita unidirectional data flow, ary ahita fa React dia Javascript ihany.
      </p>
    </div>
  </div>
);

const ReactFundamentas = () => (
  <div className={`${box} flex flex-col gap-2 antialiased`}>
    <p className='font-bold tracking-widest border-b-2 border-violet-500 pb-2'>React Fundamentals</p>
    <p className='text-sm font-sans tracking-widest font-semibold'>PROJECTS</p>
    <p className='tracking-widest text-sm pl-5'>NyBokiko: Application hanarahana ireo Bokiko</p>
    <hr />
    <div className={`${box} drop-shadow leading-relaxed`}>
      <p className='font-bold'>Fa maninona no React!</p>
      <p className='text-sm max-w-screen-sm leading-relaxed'>
        Ho hitatsika ny fahatsaran ny react. Hanambatra function tsotra maromaro isika mba
        ahazoana complex fonction, hanoratra declarative code ihany koa, ary ahita ny fizotrin'ny données ao aminy react.
        Ka ahita fa ny React Dia JavaScript ihany.
      </p>
    </div>
    <div className={`${box} drop-shadow leading-relaxed`}>
      <p className='font-bold'>Rendering UI With React</p>
      <p className='text-sm max-w-screen-sm leading-relaxed'>
        Hianatra isika ny fazahoana sy fi-render element aminy react. 
        Ahita ny antsoina hoe JSX ary hamorona Application React aminy 
        fampiasana ny "create-react-app". Hijery ny indray mitopy maso ny hoe Components.
      </p>
    </div>
    <div className={`${box} drop-shadow leading-relaxed`}>
      <p className='font-bold'>State Management</p>
      <p className='text-sm max-w-screen-sm leading-relaxed'>
        Hianatra ny fampiasana donées avy aminy components samy hafa isika.
        Oviana ary ahoana ny mampiasa PropTypes, ary ahoana ny fampiasa Controlled Components.
      </p>
    </div>
    <div className={`${box} drop-shadow leading-relaxed`}>
      <p className='font-bold'>Lifecycle Events</p>
      <p className='text-sm max-w-screen-sm leading-relaxed'>
        Eto isika dia hianatra ny hoe aiza ary oviana no "fetch data" ao aminy react.
        Ahita ireo karazana lifecycle hooks ka oviana no hampiasa azy.
      </p>
    </div>
    <div className={`${box} drop-shadow leading-relaxed`}>
      <p className='font-bold'>React Router</p>
      <p className='text-sm max-w-screen-sm leading-relaxed'>
        Hinatra hampiasa routing aminy react isika. Ho hitatsika ao ny BrowserRouter, 
        Link, ary ny Route components mba ahazoana render dynamic.
      </p>
    </div>
    <button className={`${box} drop-shadow leading-relaxed`}>
      <p className='font-bold text-left'>NyBokiko: Application hanarahana ireo Bokiko </p>
      <p className='text-sm max-w-screen-sm leading-relaxed text-left'>
        Amin'ity project ity, dia hamorona web application afahana misafidy sy 
        mametraka category amin ireo boky no vakiana na ho vakiana ianao.
      </p>
    </button>
  </div>
);

const ReactRedux = () => (
  <div>
  
    <div className={`${box} rounded-none border-b-2`}>
      <p className='font-bold tracking-widest border-b-2 border-violet-500 pb-2'>React & Redux</p>
      <div className='mt-2'>
        <p className='text-sm font-sans tracking-widest font-semibold'>PROJECTS</p>
        <p className='tracking-widest text-sm pl-5'>Would You Rather ...?</p>
      </div>
    </div>
    <div className={`w-full p-2 bg-white`}>
      <button className={`${box} drop-shadow leading-relaxed`}>
        <p className='font-bold text-left'>NyBokiko: Application hanarahana ireo Bokiko </p>
        <p className='text-sm max-w-screen-sm leading-relaxed text-left'>
          Amin'ity project ity, dia hamorona web application afahana misafidy sy 
          mametraka category amin ireo boky no vakiana na ho vakiana ianao.
        </p>
      </button>
    </div>
  </div>
);