import React from "react";
import parse from "react-html-parser";
import copyToClipboard from "../lib/copyToClipboard";
import styled from "styled-components";

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
  return (
    <TemplateStyles className="grid__item" css={css}>
      <div className="grid__header">
        <div className="grid__name">{title}</div>
        <div className="grid__copies">
          <div className="grid__copy" onClick={() => copyToClipboard(html)}>
            Copy HTML
          </div>
          <div className="grid__copy" onClick={() => copyToClipboard(newCss)}>
            Copy CSS
          </div>
        </div>
      </div>
      {html && <div className="grid__result">{parse(html)}</div>}
      {/* {source && <div className="grid__source">{source}</div>} */}
      {/* <div className="tag">
        <span className="tag-item tag-html">html</span>
        <span className="tag-item tag-css">css</span>
      </div> */}
    </TemplateStyles>
  );
};

export default Template;
