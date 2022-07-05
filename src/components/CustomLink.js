import { useMatch, useResolvedPath, Link } from 'react-router-dom';

function CustomLink({ children, to, ...props }, ref) {
  const resolved = useResolvedPath(to);
  const match = useMatch({
    path: resolved.pathname,
    end: resolved.pathname.split('/')[1] !== 'solutions'
  });
  // console.log('Match:', match)
  // console.log('Resolved:', resolved)

  return (
    <div>
      <Link
        className={`
          z-10 font-bold
          px-2 md:px-1 py-2 lg:px-4 xl:px-6
          mt-2 md:mt-0 md:ml-4 
          bg-transparent 
          hover:text-violet-700 hover:border-b-violet-700 hover:border-b 
          focus:text-violet-700 focus:border-b-violet-700 focus:border-b
          ${
            children === 'Classroom'
              ? 'border border-violet-700 rounded-md hover:bg-violet-700 focus:bg-violet-700 hover:text-white focus:text-white'
              : ''
          }
          ${
            match 
              ? children === 'Classroom' ? `border font-bold text-white bg-violet-700 rounded-md focus:text-white` : `text-violet-700 border-b-violet-700 border-b font-bold`
              : ''
          }
          `}
          to={to}
          {...props}>
          {children}
      </Link>
    </div>
  );
}

export default CustomLink;
