import "./App.css"
import React from 'react'
import {Editor, High, Dropdown, Highs} from './pages'

import * as themes from "react-syntax-highlighter/dist/esm/styles/hljs";
import * as languages from "react-syntax-highlighter/dist/esm/languages/hljs";

const defaultLanguage = <code>${"javascript" || Object.keys(languages).sort()[0]}</code>;
const defaultTheme = <code>${"atomOneDark" || Object.keys(themes).sort()[0]}</code>;

function App() {
  const [input, setInput] = React.useState("");
  const [language, setLanguage] = React.useState(defaultLanguage);
  const [theme, setTheme] = React.useState(defaultTheme);

  return (
    <div className="App">

      <div className="ControlsBox">
        <Dropdown
          defaultTheme={defaultLanguage}
          onChange={(e) => setLanguage(e.target.value)}
          data={languages}
        />
        <Dropdown
          defaultTheme={defaultTheme}
          onChange={(e) => setTheme(e.target.value)}
          data={themes}
        />
      </div>
      <div className="PanelsBox">
        <Editor
          placeHolder="Type your code here..."
          onChange={(e) => setInput(e.target.value)}
        />
        <High language={language} theme={themes[theme]}>
          {input}
        </High>
      </div>

      <div className="">

        <div className="flex flex-col w-full rounded-md bg-gray-800 shadow-xl shadow-purple-500/100 my-20" style={{ backgroundColor:"rgb(40,44,52)"}}>
          {/** Button */}       
          <div className="flex items-center w-full h-10 py-3 mx-4 gap-2">
            <div className="rounded-full bg-red-500 h-5 w-5"></div>
            <div className="rounded-full bg-yellow-500 h-5 w-5"></div>
            <div className="rounded-full bg-green-400 h-5 w-5"></div>
            <div className="flex w-full justify-center text-white font-bold font-mono">index.js</div>
            <div className="w-15 h-5"></div>
          </div>

          {/** CODE */}
          <div className="text-white mx-4 p-10">
            <Highs language={language} theme={themes["atomOneDarkReasonable"]}>
              {input}
            </Highs>  
            {/* {`const fruits = ['Paoma🍎', 'Voasary🍊', 'Akondro🍌']`}  */}
          </div>      
        </div>
    </div>

    </div>
  );
}

export default App;



// const fruits = ['Paoma🍎', 'Voasary🍊', 'Akondro🍌']

// console.log(fruits.at(0)) // Paoma🍎
// console.log(fruits.at(-1)) // Akondro🍌

