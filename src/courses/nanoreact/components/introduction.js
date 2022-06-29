import React from 'react';
import { BoxMD } from '.';

export default function Introduction() {
  return (
    <div className={`w-full py-4 px-3 bg-white shadow-sm hover:shadow-md rounded text-gray-700 flex flex-col gap-3 antialiased`}>
      <p className='font-bold tracking-widest border-b-2 border-violet-500 pb-2'>Introduction</p>
      <p className='text-sm pb-3 max-w-screen-sm'>
        Ny Program "React Developer" dia misy cours 3 ary projets 3. Isakin'ny projet iray dia opportunite hoan-tsika 
        hanehoana sy hanamafisana ireo lesona nianarana.
        Ireo Project vitanao kosa dia ho lasa anisan ireo "Career Portfolio" ho anao, izay haneho ny fahafehezanao ny 
        React an'ireo ho Mpampiasa anao.
        Manampy an'izay dia ireo "code reviewd projects" an ity program ity, dia hanampy anao aminy fivoaranao.
      </p>
      <hr />

      <BoxMD
        link='/hajaniaina-dev/nanoreact/intro'
        title='Welcome to the React Nanodegree Program'
        contents={`
          Ho hitanao hoe inona ny tena mampiavaka ny react. 
          Hanoratra fonction tsotra isika mba ahazo fonction complexe, declarative code, ary ahita unidirectional data flow, ary ahita fa React dia Javascript ihany.
        `} />
    </div>
  );
}