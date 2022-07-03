import React from 'react';

function CourseBody({ chap }) {
  return (
  <div className={`w-full max-w-screen-md flex flex-col gap-5`}>
    <Title data={`Why React ?`} />
    
    <div className={`w-full tracking-wide`}>
      <p>From <a href='https://en.wikipedia.org/wiki/Function_composition_(computer_science)'>Wikipedia</a>, Composition is:</p>
      <p className={`p-3 font-mono`}><em>to combine simple functions to build more complicated ones</em></p>
    </div>
  </div>
  );
}

export default CourseBody;

const Title = ({ data }) => (<div className={`w-full border-b-2 border-violet-700 pt-3 text-2xl`}>{data}</div>);
const P = ({ data }) => (<p>{data}</p>);
const Code = ({ data }) => (<p className={`font-mono`}>{ data }</p>);