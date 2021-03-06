import './Editors.css'
import React from 'react'
import fb from "../../assets/fb.png";
import { Dropdown, Editor, Highs, High } from './components';

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
      <div className={`w-full h-screen`}>
        Title: <input id='title' onChange={(e) => setTitle(e.target.value)} className="m-5"/>

        <div className="flex justify-center gap-5"> {/*"ControlsBox"*/}
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
      </div>

      <div className={` flex flex-col justify-end w-full h-screen pb-0`}>
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
              {/* {`const fruits = ['Paoma????', 'Voasary????', 'Akondro????']`}  */}
            </div>      
          </div>
        </div>
        <div className="flex items-center justify-center w-full h-20 mb-20">
          <p className="flex items-center font-mono font-bold text-blue-500 text-4xl"><img src={fb}/>hajaniaina-dev</p>
        </div>
      </div>

      <div className='w-full flex justify-center '>
        <div className={`w-full max-w-screen-lg bg-white rounded-lg text-2xl flex justify-center items-center flex-col gap-5 px-10 pt-10 pb-10 shadow-lg mb-96`}>
          {/* <label className='text-4xl text-gray-600 font-bold'>
            Daty Naterahana:  
            <input id='teraka' type='datetime-local' placeholder='01/01/1999 00:00:00' className='px-5 text-black'/>
          </label> */}
          <div className=''>
            <b> {`<b>`} Mamadika ny text ho lasa "BOLD". {`</b>`}</b><br />
            <i> {`<i>`} Mamadika ny text ho lasa "ITALIC". {`</i>`}</i><br />
            <em> {`<em>`} Mamadika ho "ITALIC". {`</em>`}</em><br />
            <big> {`<big>`} Mitombo ny abehan'ny text. {`</big>`}</big><br />
            <small> {`<small>`} Mihena ny abehan'ny text. {`</small>`}</small><br />
            Eto dia: <sub> {`<sub>`} Midina kely ny text ho lasa "SUBSCRIPT". {`</sub>`}</sub><br />
            Eto kosa dia: <sup> {`<sup>`} Miakatra ny text ho "SUPERSCRIPT". {`</sup>`}</sup><br />
            <del> {`<del>`} Maneho ny text ho lasa "VOATSIPIKA". {`</del>`}</del><br />
            <strong> {`<strong>`} Maneho ny text ho lasa "IMPORTANT".  {`</strong>`}</strong><br />
            <mark> {`<mark>`} Maneho ny text ho lasa "HIGHLIGHTED" na voaloko mavo.  {`</mark>`}</mark><br />
            <ins> {`<ins>`} Manisy tsipika eo amban'ny text.  {`</ins>`}</ins><br />
          </div>
          
          {/* <h1 className="text-3xl font-bold text-center">Mihainoa Finaritra eh!</h1> */}
          {/* <div className=''>
            <audio autoplay="autoplay" controls="controls">
                <source src={audio} /> 
                <a>Download this file.</a>
            </audio>
          </div> */}
          {/* <div className='mt-10 '>
            <h1 className="text-3xl font-bold my-1 text-center">Zany ary ny clip vaovao!</h1>
            <video controls preload className='w-full'>
                <source src={video} type="video/mp4; 'codecs='avc1.42E01E, mp4a.40.2'" />
                <p> Your browser is old. <a href="cohagenPhoneCall.mp4">Download this video instead.</a> </p>
            </video>
          </div> */}
        </div>
      </div>
    </>
  );
}

export default Editors;

