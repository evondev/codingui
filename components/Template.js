import React from "react";
import parse from "react-html-parser";
import copyToClipboard from "../lib/copyToClipboard";
import styled from "styled-components";
import SyntaxHighlighter from "react-syntax-highlighter";
import cssbeautify from "cssbeautify";
import pretty from "pretty";
import { useState } from "react";
import { docco } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import { useEffect } from "react";
import LazyLoad from "react-lazyload";

const TemplateStyles = styled.div`
  ${(props) => props.css}
`;

const Template = ({
  title,
  html = "",
  css = "",
  source = "",
  author = "",
  authorFrom = "",
  hideCode = false,
  js = "",
}) => {
  const [showCode, setShowCode] = useState(false);
  const [editCode, setEditCode] = useState(false);
  const [htmlCode, setHtmlCode] = useState(html);
  const [cssCode, setCssCode] = useState(css);
  let newCss = `
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap');
  :root {
    --primary: #08aeea;
    --secondary: #13D2B8;
    --purple: #bd93f9;
    --pink: #ff6bcb;
    --blue: #8be9fd;
    --gray: #333;
    --font: "Poppins", sans-serif;
    --gradient: linear-gradient(40deg, #ff6ec4, #7873f5);
    --shadow: 0 0 15px 0 rgba(0,0,0,0.05);
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
    font-family: var(--font);
    font-size: 1.4rem;
    overflow-x: hidden;
    font-weight: 300;
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
    font-family: var(--font);
    font-size: 1.4rem;
    font-weight: 300;
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
  ${cssCode}`;

  let newHTML = `
  <head>
  <link
  rel="stylesheet"
  href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
  integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
  crossOrigin="anonymous"
/>
</head>
  ${htmlCode}
  `;

  useEffect(() => {
    setHtmlCode(html);
    setCssCode(css);
  }, [css, html, js]);

  return (
    <LazyLoad once>
      <TemplateStyles className="grid__item" data-source={source} css={cssCode}>
        <div className="grid__header">
          <div className="grid__name">{title}</div>
          {!hideCode && (
            <div className="grid__copies">
              <div
                className="grid__copy"
                onClick={() => copyToClipboard(newHTML)}
              >
                Copy HTML
              </div>
              <div
                className="grid__copy"
                onClick={() => copyToClipboard(newCss)}
              >
                Copy CSS
              </div>
              {js.length > 0 && (
                <div className="grid__copy" onClick={() => copyToClipboard(js)}>
                  Copy JS
                </div>
              )}
            </div>
          )}
        </div>
        {html && <div className="grid__result">{parse(htmlCode)}</div>}

        {!hideCode && (
          <div className="flex align-center justify-between grid__bottom">
            {author && (
              <div className="grid__author">
                UI idea from{" "}
                <a href={authorFrom} target="_blank" rel="noopener norefferer">
                  {author}
                </a>
              </div>
            )}
            <div
              className={`grid__show ${showCode ? "active" : ""}`}
              onClick={() => setShowCode(!showCode)}
            >
              <i className="fa fa-eye"></i>
            </div>
            <div
              className={`grid__edit ${editCode ? "active" : ""}`}
              onClick={() => {
                setShowCode(true);
                setEditCode(!editCode);
              }}
            >
              <i className="fa fa-edit"></i>
            </div>
          </div>
        )}
        {showCode && (
          <>
            <div className={`grid__code ${editCode ? "edit" : ""}`}>
              {!editCode ? (
                <SyntaxHighlighter language="html" style={docco}>
                  {pretty(html, { ocd: true })}
                </SyntaxHighlighter>
              ) : (
                <textarea
                  value={htmlCode.trim().replace(/  +/g, " ")}
                  onChange={(e) => setHtmlCode(e.target.value)}
                ></textarea>
              )}
            </div>
            <div className={`grid__code ${editCode ? "edit" : ""}`}>
              {!editCode ? (
                <SyntaxHighlighter language="css" style={docco}>
                  {cssbeautify(css, {
                    indent: `   `,
                    autosemicolon: true,
                  })}
                </SyntaxHighlighter>
              ) : (
                <textarea
                  value={cssCode.trim().replace(/  +/g, " ")}
                  onChange={(e) => setCssCode(e.target.value)}
                ></textarea>
              )}
            </div>
            {js.length > 0 && (
              <div className="grid__code">
                <SyntaxHighlighter language="javascript" style={docco}>
                  {pretty(js, { ocd: true })}
                </SyntaxHighlighter>
              </div>
            )}
          </>
        )}
      </TemplateStyles>
    </LazyLoad>
  );
};

export default Template;
