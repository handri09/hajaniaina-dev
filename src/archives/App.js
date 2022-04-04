import React from 'react'
import {Editor, High} from './pages'

import * as themes from "react-syntax-highlighter/dist/esm/styles/hljs";
import * as languages from "react-syntax-highlighter/dist/esm/languages/hljs";

const defaultLanguage = <code>${"javascript" || Object.keys(languages).sort()[0]}</code>;
const defaultTheme = <code>${"atomOneDark" || Object.keys(themes).sort()[0]}</code>;

function App() {
  const [input, setInput] = React.useState("");
  const [language, setLanguage] = React.useState(defaultLanguage);
  const [theme, setTheme] = React.useState(defaultTheme);

  return (
    <div className="flex w-screen h-screen justify-center items-center bg-gradient-to-b from-indigo-50 via-purple-100 to-pink-100">

      <div className="flex flex-col w-full rounded-md bg-gray-900 shadow-xl shadow-purple-500/100 m-10">  
        {/** Button */}       
        <div className="flex w-full h-5 py-3 mx-4 gap-2">
          <div className="rounded-full bg-red-500 h-5 w-5"></div>
          <div className="rounded-full bg-yellow-500 h-5 w-5"></div>
          <div className="rounded-full bg-green-400 h-5 w-5"></div>
        </div>

        {/** CODE */}
        <div className="h-5 text-white mx-4 my-5">{`const fruits = ['Paoma🍎', 'Voasary🍊', 'Akondro🍌']`}</div>

        <div className='mx-4 p-5 w-full'>
          <Editor 
            placeHolder="type your code here...."
            onChange={(e) => setInput(e.target.value)}
            /></div>
        <High language={language} theme={themes[theme]}>
        </High>
      </div>
    </div>
  );
}

export default App;



                                              // const fruits = ['Paoma🍎', 'Voasary🍊', 'Akondro🍌']

                                              // console.log(fruits.at(0)) // Paoma🍎
                                              // console.log(fruits.at(-1)) // Akondro🍌

