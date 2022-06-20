import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Editors, NavBar } from './components';

const Classroom = () => {  return <h1>Test</h1> };

function App() {
  return (
    <>
      <Routes>
        <Route path='hajaniaina-dev/' element={<NavBar />} >
          <Route index element={<Editors />} />
          <Route path='classroom' element={<Classroom />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;