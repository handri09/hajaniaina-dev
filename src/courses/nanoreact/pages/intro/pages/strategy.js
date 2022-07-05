import React from 'react';
import { CourseContent } from '../../../../templates';

function Strategy() {
  return (
    <>
      <CourseContent
        navs={[
          ['1. Tongasoa','/hajaniaina-dev/nanoreact/intro', true],
          ["2. Inona 'lay hoamboarina", '/hajaniaina-dev/nanoreact/intro/what', false],
          ['3. Ny Strategy', '/hajaniaina-dev/nanoreact/intro/strategy', false],
          ['4. Ny Fisainana React', '/hajaniaina-dev/nanoreact/intro/mindset', false],
          ['5. Ireo Fifanampiana', '/hajaniaina-dev/nanoreact/intro/community', false],
          ['6. Fahazoana Fifanampiana', '/hajaniaina-dev/nanoreact/intro/community2', false]
        ]}

        data={[
          ['title', 'Strategy'], 
        ]}
      />
    </>
  );
}

export default Strategy;
