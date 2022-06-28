import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Editors, NavBar } from './components';
import { Home, Classroom, Learn } from './pages';

function App() {
  return (
    <>
      <Routes>
        <Route path='hajaniaina-dev/' element={<NavBar />} >
          <Route index element={<Home />} />
          <Route path='classroom' element={<Classroom />} />
          <Route path='demos' element={<Editors />} />
        </Route>
        <Route path='hajaniaina-dev/learn' element={<Learn />} />
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
