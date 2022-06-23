import React from 'react';
import { CourseCard, Nav } from './components';
import react from '../../../../assets/reactlogo.png'
import ds from '../../../../assets/ds.png';

function Courses() {
  return (
    <>
      <Nav />
      <CourseCard react={ react } title={`React Developer`} completion={99} />
      <CourseCard react={ ds } title={`Data Science with Python`} completion={100} />
    </>
  )
}

export default Courses;