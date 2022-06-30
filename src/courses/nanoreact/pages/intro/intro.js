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
          '3. Ny Strategy',
          '4. Ny Fisainana React',
          '5. Ireo Fifanampiana',
          '6. Fahazoana Fifanampiana'
        ]}/>
    </>
  );
}

export default Intro;
