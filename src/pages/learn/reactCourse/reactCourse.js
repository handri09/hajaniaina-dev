import React from 'react';

// styles
const box = 'w-full py-5 px-3 bg-white shadow-md hover:shadow-lg rounded text-gray-700';

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
            <p className={`text-2xl tracking-widest text-gray-600`}>Curriculum</p>
          </div>
          <div className={`w-1/2 flex justify-end uppercase text-sm tracking-widest font-bold text-gray-600 gap-5`}>
            <p className={`hover:border-b-4 border-violet-300`}>core</p>
            <p className={`hover:border-b-4 border-violet-300`}>elective</p>
          </div>
        </div>
        {/** Course Details */}
        <div className={`w-full flex flex-col gap-3`}>
          <div className={`${box} flex flex-col gap-3`}>
            <p className='font-bold tracking-widest border-b-2 border-violet-500 pb-2'>Introduction</p>
            <p className='text-sm pb-3 max-w-screen-sm'>
              The React Nanodegree program is comprised of 3 courses and 3 projects. Each project you build 
              will be an opportunity to demonstrate what you’ve learned in your lessons. Your completed projects 
              become part of a career portfolio that will demonstrate your mastery of React to potential 
              employers. In addition to the code reviewed projects of this Nanodegree program, you also 
              have access to mentors in the classroom, a community of students to learn alongside, and 
              career search support from Udacity.
            </p>
            <hr />
            <div className={`${box} drop-shadow`}>
              <p className='font-bold'>Welcome to the React Nanodegree Program</p>
              <p className='text-sm max-w-screen-sm'>
                You'll discover what makes React great. You will compose
                simple functions together to create complew ones, write declarative code, discover unidirectional data flow, and that React is just JavaScript. 
              </p>
            </div>
            <div className={`${box} drop-shadow`}>
              <p className='font-bold'>Welcome to the React Nanodegree Program</p>
              <p className='text-sm max-w-screen-sm'>
                You'll discover what makes React great. You will compose
                simple functions together to create complew ones, write declarative code, discover unidirectional data flow, and that React is just JavaScript. 
              </p>
            </div>
            <div className={`${box} drop-shadow`}>
              <p className='font-bold'>Welcome to the React Nanodegree Program</p>
              <p className='text-sm max-w-screen-sm'>
                You'll discover what makes React great. You will compose
                simple functions together to create complew ones, write declarative code, discover unidirectional data flow, and that React is just JavaScript. 
              </p>
            </div>
            <div className={`${box} drop-shadow`}>
              <p className='font-bold'>Welcome to the React Nanodegree Program</p>
              <p className='text-sm max-w-screen-sm'>
                You'll discover what makes React great. You will compose
                simple functions together to create complew ones, write declarative code, discover unidirectional data flow, and that React is just JavaScript. 
              </p>
            </div>
            <div className={`${box} drop-shadow`}>
              <p className='font-bold'>Welcome to the React Nanodegree Program</p>
              <p className='text-sm max-w-screen-sm'>
                You'll discover what makes React great. You will compose
                simple functions together to create complew ones, write declarative code, discover unidirectional data flow, and that React is just JavaScript. 
              </p>
            </div>
            <div className={`${box} drop-shadow`}>
              <p className='font-bold'>Welcome to the React Nanodegree Program</p>
              <p className='text-sm max-w-screen-sm'>
                You'll discover what makes React great. You will compose
                simple functions together to create complew ones, write declarative code, discover unidirectional data flow, and that React is just JavaScript. 
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ReactCourse;

function Accordion() {
  return (

    <div className="hs-accordion-group">
      <div className="hs-accordion active" id="hs-basic-with-title-and-arrow-stretched-heading-one">
        <button className="hs-accordion-toggle hs-accordion-active:text-blue-600 group py-3 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-left text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:text-blue-600 dark:text-gray-200 dark:hover:text-gray-400" aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-one">
          Accordion #1
          <svg className="hs-accordion-active:hidden hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          </svg>
          <svg className="hs-accordion-active:block hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          </svg>
        </button>
        <div id="hs-basic-with-title-and-arrow-stretched-collapse-one" className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300" aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-one">
          <p className="text-gray-800 dark:text-gray-200">
            <em>This is the third item's accordion body.</em> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
          </p>
        </div>
      </div>

      <div className="hs-accordion" id="hs-basic-with-title-and-arrow-stretched-heading-two">
        <button className="hs-accordion-toggle hs-accordion-active:text-blue-600 group py-3 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-left text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:text-blue-600 dark:text-gray-200 dark:hover:text-gray-400" aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-two">
          Accordion #2
          <svg className="hs-accordion-active:hidden hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          </svg>
          <svg className="hs-accordion-active:block hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          </svg>
        </button>
        <div id="hs-basic-with-title-and-arrow-stretched-collapse-two" className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-two">
          <p className="text-gray-800 dark:text-gray-200">
            <em>This is the third item's accordion body.</em> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
          </p>
        </div>
      </div>

      <div className="hs-accordion" id="hs-basic-with-title-and-arrow-stretched-heading-three">
        <button className="hs-accordion-toggle hs-accordion-active:text-blue-600 group py-3 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-left text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:text-blue-600 dark:text-gray-200 dark:hover:text-gray-400" aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-three">
          Accordion #3
          <svg className="hs-accordion-active:hidden hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          </svg>
          <svg className="hs-accordion-active:block hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          </svg>
        </button>
        <div id="hs-basic-with-title-and-arrow-stretched-collapse-three" className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-three">
          <p className="text-gray-800 dark:text-gray-200">
            <em>This is the third item's accordion body.</em> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
          </p>
        </div>
      </div>
    </div>
  );
}