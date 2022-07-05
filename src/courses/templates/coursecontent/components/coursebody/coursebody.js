import React from 'react';
import { Link } from 'react-router-dom';

function CourseBody({ data, links }) {
  return (
  <div className={`w-full max-w-screen-md flex flex-col gap-3`}>

    {
      data.map( (d, item) => (
        <Content key={item} data={ d } />
      ))
    }
    <Footer prev={links.prev} next={links.next} />
  </div>
  );
}

export default CourseBody;

const Content = ({ data }) => {
  if (data[0] === 'p')
  return (<P data={data[1]} />);
  
  if (data[0] === 'title')
  return (<Title data={data[1]} />);

  if (data[0] === 'title2')
  return (<Title2 data={data[1]} />);
  
  if (data[0] === 'code')
  return (<Code data={data[1]} />);

  if (data[0] === 'pic')
  return (<PIC data={data[1]} />);

  if (data[0] === 'video')
  return (<Video data={data[1]} />);
  
  if (data[0] === 'list')
  return (<List data={data[1]} />);
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

const P = ({ data }) => (<p>{data}</p>);
const Code = ({ data }) => (<p className={`font-mono`}>{ data }</p>);
const PIC = ({ data }) => (<img src={data} alt={'test'} className='my-5' />);
const Video = ({ data }) => (
  <iframe width="420" height="350" src={`${data}?modestbranding=1&?showinfo=0&iv_load_policy=1&iv_load_policy=1`} className='w-full my-2'>
  </iframe>
);
const List = ({ data }) => (
  <ul className='pl-5'>
    { 
      data.map( (d, item) => (
        <li key={item} className=''>{ d }</li>
        )
      ) 
    }
  </ul>
  )

// iv_load_policy=1&controls=0&modestbranding=1&showinfo=0

function Footer({ prev, next}) {
  return (
    <div className='flex gap-5 justify-end pb-10'>
      <Link to={prev} className={`
        px-4 py-3 rounded-md text-gray-600 font-bold text-xs tracking-widest
        hover:bg-gray-200`}>PREVIOUS</Link>
      <Link to={next} className={`bg-sky-900 px-4 py-3 rounded-md text-white text-xs tracking-widest`}>NEXT</Link>
    </div>
  );
}