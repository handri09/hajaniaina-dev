import React from 'react';

function CourseBody({ data }) {
  return (
  <div className={`w-full max-w-screen-md flex flex-col gap-5`}>

    {
      data.map( (d, item) => (
        <Content data={ d } />
      ))
    }
    <Footer />
  </div>
  );
}

export default CourseBody;

const Content = ({ data }) => {
  if (data[0] === 'p')
  return (<P data={data[1]} />);
  
  if (data[0] === 'title')
  return (<Title data={data[1]} />);
  
  if (data[0] === 'code')
  return (<Code data={data[1]} />);

  if (data[0] === 'pic')
  return (<PIC data={data[1]} />);

  if (data[0] === 'video')
  return (<Video data={data[1]} />);
}

const Title = ({ data }) => (<div className={`w-full border-b-2 border-violet-700 pt-3 text-2xl`}>{data}</div>);
const P = ({ data }) => (<p>{data}</p>);
const Code = ({ data }) => (<p className={`font-mono`}>{ data }</p>);
const PIC = ({ data }) => (<img src={data} alt={'test'} />);
const Video = ({ data }) => (
  <iframe width="420" height="350" src={`${data}?modestbranding=1&?showinfo=0&iv_load_policy=1&iv_load_policy=1`} className='w-full'>
  </iframe>
);

// iv_load_policy=1&controls=0&modestbranding=1&showinfo=0

function Footer() {
  return (
    <div className='flex gap-5 justify-end '>
      <div className={`
        px-4 py-3 rounded-md text-violet-900 font-bold text-xs tracking-widest
        hover:bg-gray-200`}>PREVIOUS</div>
      <div className={`bg-violet-900 px-4 py-3 rounded-md text-white text-xs tracking-widest`}>NEXT</div>
    </div>
  );
}