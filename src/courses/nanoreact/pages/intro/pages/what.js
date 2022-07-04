import React from 'react';
import { CourseContent } from '../../../../templates';
import src from '../../../../assests/reactjs/01.intro/project01.png';

function What() {
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
          ['title', 'What?'], 
          ['p', `An welcoming word. Everything can come here, so lets be patient.An welcoming word. Everything can come here, so lets be patient. 
          An welcoming word. Everything can come here, so lets be patient.`], 
          ['code', 'Final code'], 
          ['pic', src],
          ['p', 'Mifarana atreto eh'],
          ['video', 'https://www.youtube.com/embed/1bpLCkabaAg'],
          ['p', 'Tongasoa Rajo'],
          ['title', 'Titre ty'], 
        ]}
      />
    </>
  );
}

export default What;
