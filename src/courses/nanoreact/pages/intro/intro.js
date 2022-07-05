import React from 'react';
import { CourseContent } from '../../../templates';
import src from '../../../assests/reactjs/01.intro/project01.png';

function Intro() {
  return (
    <>
      <CourseContent
        navs={[
          ['1. Tongasoa','', true],
          ["2. Inona 'lay hoamboarina", 'what', false],
          ['3. Ny Strategy', 'strategy', false],
          ['4. Ny Fisainana React', 'mindset', false],
          ['5. Ireo Fifanampiana', 'community', false],
          ['6. Fahazoana Fifanampiana', 'community2', false]
        ]}

        data={[
          ['title', "Tongasoa eto amin'ny Program React"], 
          ['video', 'https://www.youtube.com/embed/1bpLCkabaAg'],
        ]}

        links = {{
            prev: '/hajaniaina-dev/nanoreact',
            next: '/hajaniaina-dev/nanoreact/intro/what'
          }
        }
        
      />
    </>
  );
}

export default Intro;
