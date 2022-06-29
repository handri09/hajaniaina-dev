import React from 'react';
import { BoxMD } from '.';
 
export default function ReactNative() {
  return (
    <div>
      <div className={`w-full py-4 px-3 bg-white shadow-sm hover:shadow-md rounded text-gray-700 rounded-none border-b-2`}>
        <p className='font-bold tracking-widest border-b-2 border-violet-500 pb-2'>React Native</p>
        <div className='mt-2'>
          <p className='text-sm font-sans tracking-widest font-semibold'>PROJECTS</p>
          <p className='tracking-widest text-sm pl-5'>Mobile FlashCards</p>
        </div>
      </div>
      <div className={`w-full p-2 bg-white px-3 flex flex-col gap-3`}>
        {
          [
            [
              '/hajaniaina-dev/nanoreact/reactnative/upandrunning',
              'Up and Running with React Native',
              `Hianatra ny ideologie ao ambadikin'ny React Native sy ny fiasany ary ny fanomboana application iOS na Android isika.`
            ],
            [
              '/hajaniaina-dev/nanoreact/reactnative/reactvsnative',
              'React vs React Native',
              `Hijery ny maha samy hafa ny Application hoan'ny Web ary Native isika, ary ny difference an'ny React sy React Native API.`
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