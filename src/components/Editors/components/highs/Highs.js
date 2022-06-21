import React from 'react'
import SyntaxHighlighter from "react-syntax-highlighter";

function Highs({ language, theme, children }) {
  return (
    <SyntaxHighlighter
      language={language}
      style={theme}
      className=""
    >
      {children}
    </SyntaxHighlighter>
  );
};
export default Highs;