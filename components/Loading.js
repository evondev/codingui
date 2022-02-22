import React from "react";
import Template from "./Template";

export const CircleLoading = () => {
  return (
    <>
      <Template
        source="loading"
        title="Circle Loading"
        html={`<div class="circle-loading"></div>`}
        css={`
          .circle-loading {
            width: 10rem;
            height: 10rem;
            border-radius: 15rem;
            position: relative;
            margin: 0 auto;
            --color: #6a5af9;
          }
          .circle-loading:before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            border-radius: inherit;
            border: 1rem solid transparent;
            border-right-color: var(--color);
            border-bottom-color: var(--color);
            animation: circleLoading 1s forwards infinite linear;
          }
          @keyframes circleLoading {
            to {
              transform: rotate(360deg);
            }
          }
        `}
      ></Template>
    </>
  );
};
export const LineLoading = () => {
  return (
    <>
      <Template
        source="loading"
        title="Line Loading"
        html={`<div class="line-loading"></div>`}
        css={`
          .line-loading {
            width: 100%;
            height: 0.5rem;
            position: relative;
            margin: 0 auto;
          }
          .line-loading:before {
            content: "";
            position: absolute;
            right: auto;
            left: 0;
            height: 100%;
            background-color: var(--primary);
            animation: lineLoading 1s forwards infinite linear;
          }

          @keyframes lineLoading {
            0% {
              right: 100%;
            }
            50% {
              right: 0;
              left: 0;
            }
            100% {
              right: 0;
              left: 100%;
            }
          }
        `}
      ></Template>
    </>
  );
};
export const DotsLoading = () => {
  return (
    <>
      <Template
        source="loading"
        title="Dots Loading"
        html={`<div class="dots-loading">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>`}
        css={`
          .dots-loading {
            display: flex;
            justify-content: center;
          }
          .dots-loading > div {
            width: 1rem;
            height: 1rem;
            border-radius: 1rem;
            background-color: #ccc;
            margin: 0 1rem;
            animation: dotLoading 1s forwards infinite linear;
          }

          .dots-loading > div:nth-child(2) {
            animation-delay: 0.1s;
          }
          .dots-loading > div:nth-child(3) {
            animation-delay: 0.2s;
          }
          .dots-loading > div:nth-child(4) {
            animation-delay: 0.3s;
          }

          @keyframes dotLoading {
            to {
              opacity: 0;
            }
          }
        `}
      ></Template>
    </>
  );
};

export const FadeLoading = () => {
  return (
    <>
      <Template
        title="Fade loading"
        source="loading"
        html={`
        <div class="fade-loading"></div>
        `}
        css={`
          .fade-loading {
            width: 4rem;
            height: 4rem;
            background-color: var(--pink);
            border-radius: 5rem;
            margin: 2rem auto;
            position: relative;
          }
          .fade-loading:before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            border-radius: inherit;
            background-color: inherit;
            animation: fade 1s forwards infinite linear;
          }
          @keyframes fade {
            to {
              transform: scale(2);
              opacity: 0;
            }
          }
        `}
      ></Template>
    </>
  );
};

export const DashedLoading = () => {
  return (
    <>
      <Template
        title="Circle dashed loading"
        source="loading"
        author="richwebdeveloper"
        authorFrom="https://www.instagram.com/richwebdeveloper/"
        html={`
        <div class="dashed-loading"></div>
        `}
        css={`
          .dashed-loading {
            position: relative;
            height: 50px;
          }
          .dashed-loading:after,
          .dashed-loading:before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            border-radius: 50%;
            width: 50px;
            height: 50px;
          }
          .dashed-loading:before {
            z-index: 5;
            border: 3px dashed var(--blue);
            border-left: 3px solid transparent;
            border-bottom: 3px solid transparent;
            -webkit-animation: dashed 1s linear infinite;
            animation: dashed 1s linear infinite;
          }
          .dashed-loading:after {
            z-index: 10;
            border: 3px solid var(--blue);
            border-left: 3px solid transparent;
            border-bottom: 3px solid transparent;
            -webkit-animation: dashed 1s ease infinite;
            animation: dashed 1s ease infinite;
          }
          @keyframes dashed {
            to {
              transform: rotate(360deg);
            }
          }
        `}
      ></Template>
    </>
  );
};

export const CircleLoading2 = () => {
  return (
    <>
      <Template
        title="Circle loading2"
        source="loading"
        html={`
        <div class="circle-loading2">
          <div></div>
          <div></div>
        </div>`}
        css={`
          .circle-loading2 {
            display: inline-flex;
            animation: loading2 1s infinite;
            div {
              width: 30px;
              height: 30px;
              border: 2px solid var(--purple);
              border-radius: 50%;
              margin: 0 5px;
            }
          }
          @keyframes loading2 {
            50% {
              transform: rotate(200deg);
            }
            75% {
              transform: rotate(160deg);
            }
            100% {
              transform: rotate(180deg);
            }
          }
        `}
      ></Template>
    </>
  );
};

export const SquareLoading = () => {
  return (
    <>
      <Template
        title="Square loading"
        source="loading"
        author=""
        authorFrom=""
        html={`
        <div class="square-loading">
        </div>
        `}
        css={`
          .square-loading {
            width: 100px;
            height: 100px;
            background-color: #6a5af9;
            border-radius: 8px;
            animation: flip 1.2s ease-in-out infinite;
          }
          @keyframes flip {
            0% {
              transform: perspective(200px) rotateX(0) rotateY(0);
            }
            50% {
              transform: perspective(200px) rotateX(180deg) rotateY(0);
            }
            100% {
              transform: perspective(200px) rotateX(180deg) rotateY(180deg);
            }
          }
        `}
      ></Template>
    </>
  );
};

export const BallLoading = () => {
  return (
    <>
      <Template
        source="loading"
        title="Ball loading"
        html={`<div class="loading"></div>`}
        css={`
          .loading {
            --color: #f62682;
            width: 20px;
            height: 20px;
            border-radius: 100rem;
            background: var(--color);
            animation: ball 1s cubic-bezier(0.075, 0.82, 0.165, 1) infinite
              alternate;
          }
          @keyframes ball {
            100% {
              transform: translateY(-20px);
            }
          }
        `}
      ></Template>
    </>
  );
};

export const BallsLoading = () => {
  return (
    <>
      <Template
        title="Balls loading"
        source="loading"
        html={`<div class="loading">
        <div style="---value: 1"></div>
        <div style="---value: 2"></div>
        <div style="---value: 3"></div>
        <div style="---value: 4"></div>
        <div style="---value: 5"></div>
      </div>`}
        css={`
          .loading {
            --count: 5;
            --circle: 360deg;
            --deg: calc(var(--circle) / var(--count));
            --duration: 1s;
            --delay: calc(var(--duration) / var(--count));
            width: 50px;
            height: 50px;
            position: relative;
          }
          .loading div {
            position: absolute;
            width: 100%;
            height: 100%;
            transform: rotate(calc(var(--value) * var(--deg)));
          }
          .loading div:before {
            content: "";
            width: 15px;
            height: 15px;
            border-radius: 100rem;
            position: absolute;
            top: 0;
            right: 0;
            background: #2cccff;
            filter: hue-rotate(calc(var(--value) * 45deg));
            animation: balls var(--duration) infinite;
            animation-delay: calc(var(--value) * var(--delay));
          }
          @keyframes balls {
            100% {
              transform: scale(0.25);
            }
          }
        `}
      ></Template>
    </>
  );
};
