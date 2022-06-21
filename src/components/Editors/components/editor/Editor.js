import React from 'react'
import "./components/Editor.css"

function Editor ({ placeHolder, onChange, onKeyDown }) {
  return (
    <textarea
      className="editor"
      placeholder={placeHolder}
      onChange={onChange}
      onKeyDown={onKeyDown}
    ></textarea>
  );
};


export default Editor