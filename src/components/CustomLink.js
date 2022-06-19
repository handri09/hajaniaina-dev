import { useMatch, useResolvedPath, Link } from 'react-router-dom';

function CustomLink({ children, to, ...props }, ref) {
  const resolved = useResolvedPath(to);
  const match = useMatch({
    path: resolved.pathname,
    end: resolved.pathname.split('/')[1] !== 'solutions'
  });

  return (
    <div>
      <Link
        className={`z-100
              text-sm sm:text-md md:text-md lg:text-lg xl:text-lg 2xl:text-xl 
              px-2 md:px-1 py-2 lg:px-4 xl:px-6
              mt-2 md:mt-0 md:ml-4 
              bg-transparent 
              hover:text-green-600 hover:border-b-green-600 hover:border-b 
              focus:text-green-600 focus:border-b-green-600 focus:border-b 
              ${
                match
                  ? 'text-green-600 border-b-green-600 border-b font-bold'
                  : ''
              }`}
        to={to}
        {...props}>
        {children}
      </Link>
      {/* {match && " (active)"} */}
    </div>
  );
}

export default CustomLink;
