import React from 'react';
import { NavLearn, ReactDev } from './components';
import ReactCourse from './reactCourse/reactCourse';

function Learn() {
  return (
    <>
      <NavLearn />
      {/* <ReactDev /> */}
      <ReactCourse />
    </>
  );
}

export default Learn;