import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Editors, NavBar } from './components';
import { Editor, Home } from './pages';

const Classroom = () => {  return <h1>Test</h1> };

function App() {
  return (
    <>
      <Routes>
        <Route path='hajaniaina-dev/' element={<NavBar />} >
          <Route index element={<Home />} />
          <Route path='classroom' element={<Classroom />} />
          <Route path='demos' element={<Editors />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;