import React from 'react';
import { CourseContent } from '../../../../templates';
import src from '../../../../assests/reactjs/01.intro/project01.png';

function Community2() {
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
          ['title', 'Community2'], 
          ['p', `An welcoming word. Everything can come here, so lets be patient.An welcoming word. Everything can come here, so lets be patient. 
            An welcoming word. Everything can come here, so lets be patient.`], 
          ['code', 'Final code'], 
          ['pic', src],
          ['p', 'Mifarana atreto eh'],
          ['video', 'https://www.youtube.com/embed/1bpLCkabaAg'],
          ['p', 'Tongasoa Rajo'],
          ['title', 'Titre ty'], 
        ]}
        links = {{
            prev: '/hajaniaina-dev/nanoreact/intro/community',
            next: '/hajaniaina-dev/nanoreact/intro/community2'
          }
        }
      />
    </>
  );
}

export default Community2;
