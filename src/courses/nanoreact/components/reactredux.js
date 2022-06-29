import React from 'react';
import { BoxMD } from '.';

export default function ReactRedux() {
  return(
    <div >
      <div className={`w-full py-4 px-3 bg-white shadow-sm hover:shadow-md rounded text-gray-700rounded-none border-b-2`}>
        <p className='font-bold tracking-widest border-b-2 border-violet-500 pb-2'>React & Redux</p>
        <div className='mt-2'>
          <p className='text-sm font-sans tracking-widest font-semibold'>PROJECTS</p>
          <p className='tracking-widest text-sm pl-5'>Would You Rather ...?</p>
        </div>
      </div>
      <div className={`w-full p-2 bg-white px-3 flex flex-col gap-3 py-3`}>
        {
          [
            [
              '/hajaniaina-dev/nanoreact/reactredux/managingstate',
              'Managing State',
              `Hianatra fika ahazoana state predictable isika, ary hanambatra izany state izany aminy toerana iray
              ka hanangana fitsipika`
            ],
            [
              '/hajaniaina-dev/nanoreact/reactredux/uiredux',
              'UI + Redux',
              `Hikirakira "Vanilla JavaScript" isika amin'ity indray mitoraka ity, ka ny "State Managment" 
              dia "Redux" avokoa no handrindra izany.`
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
    </div>
  );
}