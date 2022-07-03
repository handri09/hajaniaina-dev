import React from 'react';
import { CourseContent } from '../../../templates' 

function Intro() {
  return (
    <>
      <CourseContent
        navs={[
          ['1. Tongasoa',''],
          ["2. Inona 'lay hoamboarina", 'what'],
          ['3. Ny Strategy', 'strategy'],
          ['4. Ny Fisainana React', 'mindset'],
          ['5. Ireo Fifanampiana', 'community'],
          ['6. Fahazoana Fifanampiana', 'community2']
        ]}/>
    </>
  );
}

export default Intro;
