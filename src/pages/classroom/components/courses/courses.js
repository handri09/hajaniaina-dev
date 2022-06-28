import React from 'react';
import { CourseCard, Nav } from './components';
import react from '../../../../assets/reactlogo.png'
import ds from '../../../../assets/ds.png';

function Courses() {
  return (
    <>
      <Nav />
      <CourseCard link={'react'} react={ react } title={`React Developer`} completion={99} />
      <CourseCard link={'datascience'} react={ ds } title={`Data Science with Python`} completion={100} />
      <CourseCard link={'awsml'} react={ ds } title={`AWS Machine Learning`} completion={30} />
    </>
  )
}

export default Courses;