import React from "react";
import Template from "./Template";

const ProgressBar = () => {
  return (
    <>
      <Template
        title="ProgressBar"
        html={`<div class="bar">
        <div class="bar-percent" style="width: 25%;"></div>
      </div>
      <div class="bar bar--warning">
        <div class="bar-percent" style="width: 55%;"></div>
      </div>
      <div class="bar bar--danger">
        <div class="bar-percent" style="width: 75%;"></div>
      </div>`}
        css={`
          .bar {
            width: 100%;
            height: 1rem;
            border-radius: 5rem;
            border: 1px solid #eee;
            margin-bottom: 1rem;
          }
          .bar--danger .bar-percent {
            background-color: #ff7870;
          }
          .bar--warning .bar-percent {
            background-color: #ffa400;
          }
          .bar-percent {
            height: 100%;
            background-color: #07a787;
            border-radius: inherit;
          }
        `}
      ></Template>
    </>
  );
};
const CircleBar = () => {
  return (
    <>
      <Template
        title="CircleBar"
        html={`<div class="circle-bar">
        <div class="circle-bar-percent"></div>
      </div>`}
        css={`
          .circle-bar {
            margin: 0 auto;
            width: 10rem;
            height: 10rem;
            border-radius: 10rem;
            position: relative;
          }
          .circle-bar-percent {
            position: absolute;
            top: 0;
            left: 0;
            height: 100%;
            width: 100%;
            border-radius: inherit;
            border: 10px solid #eee;
            border-right: 10px solid var(--pink);
            border-bottom: 10px solid var(--pink);
            transform: rotate(-45deg);
            z-index: 2;
          }
        `}
      ></Template>
    </>
  );
};

export { ProgressBar, CircleBar };
