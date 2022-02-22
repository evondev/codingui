import React, { Fragment } from "react";
import parse from "react-html-parser";
import copyToClipboard from "../lib/copyToClipboard";
import styled from "styled-components";
import SyntaxHighlighter from "react-syntax-highlighter";
import cssbeautify from "cssbeautify";
import pretty from "pretty";
import { useState } from "react";
import { docco } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import { useEffect } from "react";
import Modal from "./Modal";

const TemplateStyles = styled.div`
  ${(props) => props.css}
`;

const Template = ({
  title,
  html = "",
  htmlCopy = "",
  css = "",
  cssCopy = "",
  source = "",
  hideCode = false,
  js = "",
  className = "",
  allowView = true,
}) => {
  const [showCode, setShowCode] = useState(false);
  const [editCode, setEditCode] = useState(false);
  const [htmlCode, setHtmlCode] = useState(html);
  const [cssCode, setCssCode] = useState(css);
  let newCss = `${cssCode}`;
  let newHTML = `${htmlCode}
  `;

  useEffect(() => {
    setHtmlCode(html);
    setCssCode(css);
  }, [css, html, js]);

  return (
    <TemplateStyles
      className={`${className} grid-item`}
      data-source={source}
      css={cssCode}
    >
      <div className="grid-header">
        <h2 className="grid-name">{title}</h2>
        {allowView && (
          <button
            className="grid-copy grid-view"
            onClick={() => setShowCode(!showCode)}
          >
            {showCode ? "Hide code" : "View code"}
          </button>
        )}
      </div>
      {html && <div className="grid-result">{parse(htmlCode)}</div>}
      <div className="grid-footer">
        <button
          className="grid-copy grid-copy--html"
          onClick={() => copyToClipboard(htmlCopy || newHTML)}
        >
          Copy HTML
        </button>
        <button
          className="grid-copy grid-copy--css"
          onClick={() => copyToClipboard(cssCopy || newCss)}
        >
          Copy CSS
        </button>
        {js.length > 0 && (
          <button
            className="grid-copy grid-copy--js"
            onClick={() => copyToClipboard(js)}
          >
            Copy JS
          </button>
        )}
      </div>
      {allowView && showCode && (
        <Fragment>
          <div className="modal-code">
            <h3 className="modal-code-heading">HTML</h3>
            <SyntaxHighlighter language="html" style={docco}>
              {pretty(htmlCopy || html, { ocd: true })}
            </SyntaxHighlighter>
          </div>
          <div className="modal-code">
            <h3 className="modal-code-heading">CSS</h3>
            <SyntaxHighlighter language="css" style={docco}>
              {cssbeautify(cssCopy || css, {
                indent: `   `,
                autosemicolon: true,
              })}
            </SyntaxHighlighter>
          </div>
        </Fragment>
      )}
      {/* <div className="grid__header">
        <div className="grid__name">{title}</div>
        {!hideCode && (
          <div className="grid__copies">
            <div
              className="grid__copy"
              onClick={() => copyToClipboard(htmlCopy || newHTML)}
            >
              Copy HTML
            </div>
            <div
              className="grid__copy"
              onClick={() => copyToClipboard(cssCopy || newCss)}
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
                value={htmlCode.replace(/  +/g, " ")}
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
                value={cssCode.replace(/  +/g, " ")}
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
      )} */}
    </TemplateStyles>
  );
};

export default React.memo(Template);
