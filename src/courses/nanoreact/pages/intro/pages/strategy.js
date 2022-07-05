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
          ['title', "Tongasoa Eto amin'ny Program React"], 
          ['title2', "Mianatra Strategy"], 
          ['p', `Amin'ity projet ity, dia hamorona application React hatraminy voalohany ianao, ary hampiasa "React Component" mba afahanao mandao UI (User Interface).
            Hanamboatra fitoerana boky virtoaly kely ianao mba hampirimana ireo bokynao ary mba afahana manaraka izay boky vakianao sy irianao ho vakiana. 
            Misy Books API azo ampiasaina ao afahana manao recherche ireo boky ka afahana mclassé azy ireo tsirairay araka ny fanirianao.
            Farany, hampiasa ny "React State" ianao afahana mandrindra ireo boky ao anaty category tsirairay.`],
        ]}

        links = {{
            prev: '/hajaniaina-dev/nanoreact/intro/what',
            next: '/hajaniaina-dev/nanoreact/intro/mindset'
          }
        }
      />
    </>
  );
}

export default Strategy;
