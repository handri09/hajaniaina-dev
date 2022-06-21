import React from 'react'
import './components/High.css'
import SyntaxHighlighter from "react-syntax-highlighter";

function High({ language, theme, children }) {
  return (
    <SyntaxHighlighter
      language={language}
      style={theme}
      className="highlighter"
    >
      {children}
    </SyntaxHighlighter>
  );
};
export default High;