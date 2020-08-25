import React from "react";
import parse from "react-html-parser";
import copyToClipboard from "../lib/copyToClipboard";
import styled from "styled-components";

const TemplateStyles = styled.div`
  ${(props) => props.css}
`;

const Template = ({ title, html = "", css = "", source = "" }) => {
  return (
    <TemplateStyles className="grid__item" css={css}>
      <div className="grid__header">
        <div className="grid__name">{title}</div>
        <div className="grid__copies">
          <div className="grid__copy" onClick={() => copyToClipboard(html)}>
            Copy HTML
          </div>
          <div className="grid__copy" onClick={() => copyToClipboard(css)}>
            Copy CSS
          </div>
        </div>
      </div>
      {html && <div className="grid__result">{parse(html)}</div>}
      {source && <div className="grid__source">{source}</div>}
    </TemplateStyles>
  );
};

export default Template;
