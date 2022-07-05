import { useMatch, useResolvedPath, Link } from 'react-router-dom';

function LessonLink({ children, to, ...props }, ref) {
  const resolved = useResolvedPath(to);
  const match = useMatch({
    path: resolved.pathname,
    end: resolved.pathname.split('/')[2] !== 'intro'
  });

  return (
    <div>
      <Link
        className={`
           text-md text-white antialiased font-sans px-5
          ${
            match 
              ? `text-sky-400`
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

export default LessonLink;
