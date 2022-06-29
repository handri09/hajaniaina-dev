import React from 'react';
import { BoxMD } from '.';

export default function ReactFundamentals() {
  return (
    <div className={`w-full py-4 px-3 bg-white shadow-sm hover:shadow-md rounded text-gray-700 flex flex-col gap-2 antialiased`}>
      <p className='font-bold tracking-widest border-b-2 border-violet-500 pb-2'>React Fundamentals</p>
      <p className='text-sm font-sans tracking-widest font-semibold'>PROJECTS</p>
      <p className='tracking-widest text-sm pl-5'>NyBokiko: Application hanarahana ireo boky vakiako.</p>
      <hr />

        {
          [
            [
              '/hajaniaina-dev/nanoreact/reactfundamentals/whyreact',
              'Fa maninona no React!',
              `Ho hitatsika ny fahatsaran ny react. Hanambatra function tsotra maromaro isika mba
              ahazoana complex fonction, hanoratra declarative code ihany koa, ary ahita ny fizotrin'ny données ao aminy react.
              Ka ahita fa ny React Dia JavaScript ihany.`
            ],
            [
              '/hajaniaina-dev/nanoreact/reactfundamentals/uirendering',
              'Rendering UI With React',
              `Hianatra isika ny fazahoana sy fi-render element aminy react. 
              Ahita ny antsoina hoe JSX ary hamorona Application React aminy 
              fampiasana ny "create-react-app". Hijery ny indray mitopy maso ny hoe Components.`
            ],
            [
              '/hajaniaina-dev/nanoreact/reactfundamentals/statemanagment',
              'State Management',
              `Hianatra ny fampiasana donées avy aminy components samy hafa isika.
              Oviana ary ahoana ny mampiasa PropTypes, ary ahoana ny fampiasa Controlled Components.`
            ],
            [
              '/hajaniaina-dev/nanoreact/reactfundamentals/lifecycle',
              'Lifecycle Events',
              `Eto isika dia hianatra ny hoe aiza ary oviana no "fetch data" ao aminy react.
              Ahita ireo karazana lifecycle hooks ka oviana no hampiasa azy.`
            ],
            [
              '/hajaniaina-dev/nanoreact/reactfundamentals/reactrouter',
              'React Router',
              `Hinatra hampiasa routing aminy react isika. Ho hitatsika ao ny BrowserRouter, 
              Link, ary ny Route components mba ahazoana render dynamic.`
            ],
            [
              '/hajaniaina-dev/nanoreact/reactfundamentals/nybokiko',
              'NyBokiko: Application hanarahana ireo Bokiko',
              `Amin'ity project ity, dia hamorona web application afahana misafidy sy 
              mametraka category amin ireo boky no vakiana na ho vakiana ianao.`
            ]
          ].map( (lesson, item) => (
            <BoxMD
              key={item}
              link={lesson[0]}
              title={lesson[1]}
              contents={lesson[2]}
              />  
          ))
        }
    </div>
  );
}