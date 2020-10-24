import React from "react";
import Template from "./Template";

const UpComingUI = () => {
  return (
    <>
      <Template
        hideCode={true}
        source="upcoming"
        html={`
        <div class="upcoming">
          <a href="https://evondev.com/khoa-hoc-html-css" target="_blank" rel="noopener noreferrer">
            <img src="/images/evondev-html-css-course.jpg"/>
          </a>
        </div>
        `}
        css={`
          .upcoming {
            color: white;
            font-weight: 500;
            line-height: 1.6;
            span {
              font-weight: 600;
            }
            p {
              margin-bottom: 1rem;
            }
          }
        `}
      ></Template>
    </>
  );
};

export { UpComingUI };
