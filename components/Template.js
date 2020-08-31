import React from "react";
import parse from "react-html-parser";
import copyToClipboard from "../lib/copyToClipboard";
import styled from "styled-components";
import SyntaxHighlighter from "react-syntax-highlighter";
import cssbeautify from "cssbeautify";
import pretty from "pretty";
import { useState } from "react";
import { docco } from "react-syntax-highlighter/dist/cjs/styles/hljs";

const TemplateStyles = styled.div`
  ${(props) => props.css}
`;

const Template = ({ title, html = "", css = "", source = "" }) => {
  let newCss = `
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;900&display=swap');
  :root {
    --primary: #08aeea;
    --secondary: #2af598;
    --purple: #bd93f9;
    --pink: #ff6bcb;
    --blue: #8be9fd;
    --gray: #333;
    --font: "Montserrat", sans-serif;
    --gradient: linear-gradient(40deg, #ff6ec4, #7873f5);
  }
  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }
  html {
    font-size: 62.5%;
  }

  body {
    font-family: 'Montserrat', sans-serif;
    font-size: 1.6rem;
    overflow-x: hidden;
  }

  img {
    display: block;
    max-width: 100%;
  }

  a {
    text-decoration: none;
  }

  input,
  button,
  textarea,
  select {
    font-family: inherit;
    font-size: 1.6rem;
    outline: none;
    border: 0;
    margin: 0;
    padding: 0;
    border-radius: 0;
    -webkit-appearance: none;
  }

  button {
    cursor: pointer;
  }
  ${css}`;

  let newHTML = `
  <head>
  <link
  rel="stylesheet"
  href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
  integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
  crossOrigin="anonymous"
/>
</head>
  ${html}
  `;

  const [showCode, setShowCode] = useState(false);

  return (
    <TemplateStyles className="grid__item" data-source={source} css={css}>
      <div className="grid__header">
        <div className="grid__name">{title}</div>
        <div className="grid__copies">
          <div className="grid__copy" onClick={() => copyToClipboard(newHTML)}>
            Copy HTML
          </div>
          <div className="grid__copy" onClick={() => copyToClipboard(newCss)}>
            Copy CSS
          </div>
        </div>
      </div>
      {html && <div className="grid__result">{parse(html)}</div>}
      <div
        className={`grid__show ${showCode ? "active" : ""}`}
        onClick={() => setShowCode(!showCode)}
      >
        Show code
      </div>
      {showCode && (
        <>
          <div className="grid__code">
            <SyntaxHighlighter language="html" style={docco} wrapLines={true}>
              {pretty(html, { ocd: true })}
            </SyntaxHighlighter>
          </div>
          <div className="grid__code">
            <SyntaxHighlighter language="css" style={docco} wrapLines={true}>
              {cssbeautify(css, {
                indent: `   `,
                autosemicolon: true,
              })}
            </SyntaxHighlighter>
          </div>
        </>
      )}
    </TemplateStyles>
  );
};

export default Template;
