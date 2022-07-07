import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Editors, NavBar, NavClassRoom } from './components';
import { Home, Classroom, Learn, NoMatch } from './pages';
import { NanoReact, NanoMathss } from './courses';
import { NavPan } from './courses/templates/coursecontent/components';
import { 
    Intro, What, Strategy,
    Mindset, Community, Community2
  } from './courses/nanoreact/pages';

function App() {
  return (
    <>
      <Routes>
        <Route path='hajaniaina-dev/' element={<NavBar />} >
          <Route index element={<Home />} />
          <Route path='classroom' element={<Classroom />} />
          <Route path='demos' element={<Editors />} />
          <Route path='*' element={<NoMatch />} />
        </Route>
        <Route path='hajaniaina-dev/learn' element={<Learn />} />
        <Route path='hajaniaina-dev/nanomathss/' element={<NavClassRoom  />}>
          <Route index element={<NanoMathss />} />
          
          {/* <Route path='intro' element={<NavPan />} >
            <Route index element={<Intro />} />
          </Route> */}
        </Route>
        <Route path='hajaniaina-dev/nanoreact/' element={<NavClassRoom />}>
          <Route index element={<NanoReact />} /> 
          <Route path='intro' element={<NavPan />} >
            <Route index element={<Intro />} />
            <Route path='what' element={<What />} />
            <Route path='strategy' element={<Strategy />} />
            <Route path='mindset' element={<Mindset />} />
            <Route path='community' element={<Community />} />
            <Route path='community2' element={<Community2 />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;

function ReactCourse() {
  return (
    <div>React Developer</div>
  );
}
