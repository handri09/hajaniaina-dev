import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Editors, NavBar, NavClassRoom } from './components';
import { Home, Classroom, Learn, NoMatch } from './pages';
import { NanoReact } from './courses';
import { Intro, Tongasoa } from './courses/nanoreact/pages'

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
        <Route path='hajaniaina-dev/nanoreact/' element={<NavClassRoom />}>
          <Route index element={<NanoReact />} /> 
          <Route path='intro' element={<Intro />} >
            <Route index element={<Tongasoa />} />
            <Route path='what' element={<Classroom />} />
            <Route path='strategy' element={<Classroom />} />
            <Route path='mindset' element={<Classroom />} />
            <Route path='community' element={<Classroom />} />
            <Route path='community2' element={<Classroom />} />
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
