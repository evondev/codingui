import React from "react";
import Template from "./Template";

const LineText = () => {
  return (
    <>
      <Template
        title="Text center with line"
        source="line"
        html={`<div class="line-text"><span>CodingUI</span></div>`}
        css={`
          .line-text {
            text-align: center;
            position: relative;
          }
          .line-text:before {
            content: "";
            width: 100%;
            height: 1px;
            position: absolute;
            top: 50%;
            left: 0;
            transform: translateY(-50%);
            background-color: var(--gray);
          }
          .line-text span {
            display: inline-block;
            background-color: white;
            position: relative;
            z-index: 2;
            padding: 1rem;
            font-weight: 600;
          }
        `}
      ></Template>
    </>
  );
};

export { LineText };
