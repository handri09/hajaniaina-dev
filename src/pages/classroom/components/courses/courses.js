import React from 'react';
import { CourseCard, Nav } from './components';
import react from '../../../../assets/reactlogo.png'
import ds from '../../../../assets/ds.png';

function Courses() {
  return (
    <>
      <Nav />
      <CourseCard link={'/hajaniaina-dev/nanoreact'} react={ react } title={`React Developer`} completion={99} />
      <CourseCard link={'/hajaniaina-dev/nanods'} react={ ds } title={`Data Science with Python`} completion={100} />
      <CourseCard link={'/hajaniaina-dev/nanoaws'} react={ ds } title={`AWS Machine Learning`} completion={30} />
    </>
  )
}

export default Courses;