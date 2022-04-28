import './Editors.css'
import React from 'react'
import {Editor, High, Dropdown, Highs} from '../../pages'
import fb from "../../assets/fb.png"

import * as themes from "react-syntax-highlighter/dist/esm/styles/hljs";
import * as languages from "react-syntax-highlighter/dist/esm/languages/hljs";

const defaultLanguage = <code>${"javascript" || Object.keys(languages).sort()[0]}</code>;
const defaultTheme = <code>${"atomOneDark" || Object.keys(themes).sort()[0]}</code>;

function Editors() {
  const [input, setInput] = React.useState("");
  const [language, setLanguage] = React.useState(defaultLanguage);
  const [theme, setTheme] = React.useState(defaultTheme);
  const [title, setTitle] = React.useState("index.js")

  return (
    <>
      <label for='title'>Title: 
        <input id='title' onChange={(e) => setTitle(e.target.value)} className="m-5"/>
      </label>

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

      <div className="flex justify-center items-center text-6xl font-mono w-full h-20 mt-56">
        {/* <p className="text-gray-500 italic">L'Operateur <span className="text-red-400 italic font-bold text-7xl">"in"</span> dans JavaScript</p> */}
      </div>

      <div className="flex justify-center gap-10 text-2xl font-mono my-10 border-green-600">
        <div className="flex flex-col rounded-xl bg-gray-800 shadow-xl shadow-purple-500/100 min-w-[50%] max-w-full " style={{ backgroundColor:"rgb(40,44,52)"}}>
          {/** Button */}       
          <div className="flex items-center h-10 mx-2 gap-2 px-5 mt-2">
            <div className="flex gap-2">
              <div className="rounded-full bg-red-400 h-5 w-5"></div>
              <div className="rounded-full bg-yellow-400 h-5 w-5"></div>
              <div className="rounded-full bg-green-400 h-5 w-5"></div>
            </div>
            <div className="flex w-full justify-center text-white font-bold font-mono mr-20">{title}</div>
          </div>

          <div className="text-white mx-5 mb-3">
            <Highs language={language} theme={themes["atomOneDarkReasonable"]}>
              {input}
            </Highs>  
            {/* {`const fruits = ['Paoma🍎', 'Voasary🍊', 'Akondro🍌']`}  */}
          </div>      
        </div>
    </div>
    <div className="flex items-center justify-center w-full h-20 mb-20">
      <p className="flex items-center font-mono font-bold text-blue-500 text-4xl"><img src={fb}/>hajaniaina-dev</p>
    </div>

    <div className={`w-full h-20 bg-white rounded-lg text-2xl flex justify-center`}>
      test
    </div>

    </>
  );
}

export default Editors;