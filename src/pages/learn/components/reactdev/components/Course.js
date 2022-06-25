import React from 'react';
import { chapter } from '../utils/data';

function Course({ chap }) {
  console.log(chapter[chap])
  return (
  <div className={`w-full max-w-screen-md flex flex-col gap-5`}>
    <div className={`w-full border-b-2 border-violet-700 pt-3 text-2xl`}>Why React ?</div>
    <div className={`w-full tracking-wide`}>
      <p>From <a href='https://en.wikipedia.org/wiki/Function_composition_(computer_science)'>Wikipedia</a>, Composition is:</p>
      <p className={`p-3 font-mono`}><em>to combine simple functions to build more complicated ones</em></p>
    </div>
  </div>
  );
}

export default Course;