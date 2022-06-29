import React from 'react';
import { Link } from 'react-router-dom';

function BoxMD({ link, title, contents }) {
  return (
    <Link to={link} className={`w-full py-4 px-3 bg-white shadow-sm hover:shadow-md rounded text-gray-700 drop-shadow leading-relaxed`}>
      <p className='font-bold text-left'>{title}</p>
      <p className='text-sm max-w-screen-sm leading-relaxed text-left'>
        {contents}
      </p>
    </Link>
  );
}
export default BoxMD;