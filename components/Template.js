import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import parse from "react-html-parser";
import copyToClipboard from "../lib/copyToClipboard";
import styled from "styled-components";
import { docco } from "react-syntax-highlighter/dist/cjs/styles/hljs";

const TemplateStyles = styled.div`
  ${(props) => props.css}
`;

const Template = ({ title, desc = "", html = "", css = "" }) => {
  return (
    <TemplateStyles className="grid__item" css={css}>
      <div className="grid__name">{title}</div>
      <div className="grid__desc">{desc}</div>
      <div className="grid__result">{parse(html)}</div>
      <div className="grid__html grid__code">
        <div className="grid__copy" onClick={() => copyToClipboard(html)}>
          Copy
        </div>
        <SyntaxHighlighter language="html" style={docco}>
          {html.trim()}
        </SyntaxHighlighter>
      </div>
      <div className="grid__css grid__code">
        <div className="grid__copy" onClick={() => copyToClipboard(css)}>
          Copy
        </div>
        <SyntaxHighlighter language="css" style={docco}>
          {css.trim()}
        </SyntaxHighlighter>
      </div>
    </TemplateStyles>
  );
};

export default Template;
