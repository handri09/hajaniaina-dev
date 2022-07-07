import React from 'react';
import { BoxMD } from '../../components';

function NanoMathss() {
  return (
    <>
      <div className={`pt-14 w-full max-w-screen-md mx-auto flex flex-col gap-3 px-3`}>
        <Header />

        <BoxMD link={'intro'} title={'Introduction'} contents={'Many things will come here.'} />
      </div>
    </>
  )
}

export default NanoMathss;

function Header(props) {
  return (
    <>
      <div className={`w-full border-b-2 border-sky-700 py-3 my-2 text-3xl pt-3 pb-2 text-gray-500 font-sans font-light`}>Mathématique Terminale Scientifique</div>
      <div className={`w-full py-4 shadow-md bg-white rounded flex items-center justify-center px-5 hover:shadow-lg`}>
        <div className={`w-1/2 flex flex-col gap-2`}>
          <p className={`text-xs text-gray-700 tracking-widest`}>PROGRAMME COMMENCE</p>
          <p className='font-bold text-gray-700 tracking-widest'>En Progression!</p>
        </div>
        <div className={`w-1/2 flex justify-end`}>
          <p className={`text-sm font-bold text-gray-600 tracking-widest hover:bg-gray-100 px-3 py-2 rounded`}>GRADE</p>
        </div>
      </div>
      <div className={`w-full flex`}>
        <div className={`w-1/2`}>
          <p className={`text-2xl tracking-widest text-gray-600 font-extralight`}>Curriculum</p>
        </div>
        <div className={`w-1/2 flex justify-end uppercase text-sm tracking-widest font-bold text-gray-600 gap-5`}>
          <p className={`hover:border-b-4 border-violet-300 border-b-4`}>COEUR</p>
          <p className={`hover:border-b-4 border-violet-300`}>OPTIONNEL</p>
        </div>
      </div>
    </>
  );
}

const Title = ({ data }) => (
  <div className={`w-full border-b-2 border-sky-700 text-2xl py-3 my-2`}>
    <p className={`text-gray-500 font-sans font-light`}>{data}</p>
  </div>
);

const Title2 = ({ data }) => (
  <div className={`w-full text-xl py-1 my-1`}>
    <p className={`text-gray-700 font-sans font-semibold`}>{data}</p>
  </div>
);

