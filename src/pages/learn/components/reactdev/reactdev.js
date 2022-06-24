import React from 'react';
import { Nav, Header } from './components';

function ReactDev() {
  const [open, setOpen] = React.useState(true);
  const onOpen = () => { 
    setOpen(prev => !prev)
  }

  return (
    <>
      <div className={`w-full bg-white h-screen flex  antialiased text-gray-700`}>
        <Nav open={open} sections={['1.rewr', '2.wrwe fe', '3.dslovln vs']}/>
        
        {/* Course Content*/}
        <div className={`w-full h-full bg-white flex flex-col justify-start items-center overflow-scroll px-2 pt-14`}>
          <Header open={open} onOpen={() => onOpen()} />
          <Course1 />
        </div>
      </div>
    </>
  )
}

export default ReactDev;

function Course1() {
  return (
  <div className={`w-full max-w-screen-md flex flex-col gap-2`}>
    <div className={`w-full border-b-2 border-violet-700 py-1 text-2xl`}>Why React ?</div>
    <div className={`w-full tracking-wide`}>
      <p>From <a href='https://en.wikipedia.org/wiki/Function_composition_(computer_science)'>Wikipedia</a>, Composition is:</p>
      <p className={`p-3 font-mono`}><em>to combine simple functions to build more complicated ones</em></p>
    </div>
  </div>
  );
}

function ChapterIntro() {
  return (
    <>
    </>
  );
}

const ReactCourse = {
  id: 1,
  name: 'React',
  chapter: [
    {
      id: 101,
      name: 'Introduction',
      lessons: ['Welcome to the React Course Program'] 
    }, 
    {
      id: 102,
      name: 'React Fundamentals',
      lessons: [
        {
          id: 10201,
          name: 'Why React',
          sections: [
            {
              id: 1020101,
              name: 'Introduction',
              content: [
                ('title', 'Introduction')
              ]
            }, 
            {
              id: 1020102,
              name: 'What is Composition'
            }, 
            {
              id: 1020103,
              name: 'What is Declarative Code',
              content: [
                  ('title', 'Why React'), ('paragraph', 'From Wikiedia, Composition is :'),
                  ('italic', 'to combine simple functions to build more complicated ones'), 
                  ('paragraph', "Let's take a look at how we can build up complex functions just by combining simple ones together."),
                  ('video', 'https://www.youtube.com/embed/watch?v=gM8DkdnO1F0&list=RDgM8DkdnO1F0&start_radio=1'),
                  ('utitle', 'Benefits of Composition')
                ]
            }, 
            {
              id: 1020104,
              name: 'Unidirectional Data Flow'
            },
            {
              id: 1020105,
              name: 'React Is "just JavaScript"'
            }, 
            {
              id: 1020106,
              name: 'Outro'
            }
          ]
        }, 
        {
          id: 100202,
          name: 'Rendering UI with React',
          sections: []
        },
           'State Management', 'Lifecycle Events', 
          'React Router', 'MyReads: A Book Tracking App'
      ]
    }, 
    {
      'React & Redux': []
    }, 
    {
      'React Native': []
    },
  ]
}