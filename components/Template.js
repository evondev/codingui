import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import parse from "react-html-parser";
import { docco } from "react-syntax-highlighter/dist/cjs/styles/hljs";

const Template = ({ title, desc = "", html = "", css = "" }) => {
  return (
    <div className="grid__item">
      <div className="grid__name">{title}</div>
      <div className="grid__desc">{desc}</div>
      <div className="grid__result">{parse(html)}</div>
      <div className="grid__html grid__code">
        <SyntaxHighlighter language="html" style={docco}>
          {html.trim().replace(/\n/g, " ")}
        </SyntaxHighlighter>
      </div>
      <div className="grid__css grid__code">
        <SyntaxHighlighter language="css" style={docco}>
          {css.trim()}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default Template;
