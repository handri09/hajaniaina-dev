import React from 'react';
import { chapter } from './utils/data';
import { Link } from 'react-router-dom';
import arrow from '../../../../assets/open.png';
import {CourseContent } from '../../../templates' 

function Intro() {
  return (
    <>
      <CourseContent
        navs={[
          '1. Tongasoa',
          "2. Inona 'lay hoamboarina ",
          'c',
          'd',
          'e'
        ]}/>
    </>
  );
}

export default Intro;
