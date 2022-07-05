import React from 'react';
import { CourseContent } from '../../../../templates';
import nybokiko from '../../../../assests/reactjs/01.intro/project01.png';
import wyr from '../../../../assests/reactjs/01.intro/project02WYR.png';

function What() {
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
          ['title', 'Ireo Project Hoataonao'], 
          ['video', 'https://www.youtube.com/embed/tgbNymZ7vqY'],
          ['title2', 'Project: NyBokiko (React Fundamentals)'], 
          ['p', `Amin'ity projet ity, dia hamorona application React hatraminy voalohany ianao, ary hampiasa "React Component" mba afahanao mandao UI (User Interface).
            Hanamboatra fitoerana boky virtoaly kely ianao mba hampirimana ireo bokynao ary mba afahana manaraka izay boky vakianao sy irianao ho vakiana. 
            Misy Books API azo ampiasaina ao afahana manao recherche ireo boky ka afahana mclassé azy ireo tsirairay araka ny fanirianao.
            Farany, hampiasa ny "React State" ianao afahana mandrindra ireo boky ao anaty category tsirairay.`],
          ['pic', nybokiko],
          ['title2', 'Project: Would Your Rather? (React & Redux)'], 
          ['p', `Ity Project ity indray dia hanamafy ny fahaizanao ny React sy Redux, fotoana ihany koa haneoanao ny creativité anao aminy style sy design.
           Hanamafy ny "predictablilité" an'ny staten'ny application anao, hametraka ny regle rehetra : getting, listening, ary updating an'ilay store.
            Eo no ahitanao hoe inona avy ireo "State" tokony hipetraka ao aminy "Redux" ary ireo tokony ho ao amin'ny "React Component".`],
          ['pic', wyr],
          ['title', 'Ireo Fahaizana ho Azonao'], 
          ['p', `Ireo Projet ireo dia hanazatra anao hamorona React Application, ary hapitombo ny fahaizanao React miaraka aminy Redux.
           Mandritra ity projet ity ianao dia:`],
          ['list', 
            [ 'Hampitombo Experience',
              'Hianatra handrava Obstacle maro', 
              'Ahay andavaka ny React Documentation mba hamahana olana.', 
              'Hampitombo ny fahaizanao mampiana-tena na autodidacte', 
              'Ahazo matokisan-tena'
            ]
          ]
        ]}
        links = {{
            prev: '/hajaniaina-dev/nanoreact/intro',
            next: '/hajaniaina-dev/nanoreact/intro/strategy'
          }
        }
      />
    </>
  );
}

export default What;
