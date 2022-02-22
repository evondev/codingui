import React from "react";
import Template from "./Template";

export const Button = function () {
  return (
    <Template
      title="Button Hover Effect"
      source="button"
      allowView={true}
      html={`<button class="button">Evondev is awesome</button>`}
      css={`
        .button {
          --color: #6a5af9;
          font-family: "Poppins", sans-serif;
          color: white;
          padding: 15px 30px;
          border-radius: 4px;
          background-color: transparent;
          cursor: pointer;
          font-weight: 500;
          outline: none;
          border: 1px solid var(--color);
          font-size: 16px;
          position: relative;
          isolation: isolate;
        }
        .button:before {
          content: "";
          height: 100%;
          width: 0;
          position: absolute;
          top: 0;
          left: 0;
          background-color: var(--color);
          z-index: -1;
          transition: width 0.25s ease-in;
        }
        .button:hover:before {
          width: 100%;
        }
      `}
    ></Template>
  );
};
export const Button2 = function () {
  return (
    <Template
      title="Button Hover Effect"
      source="button"
      allowView={true}
      html={`<button class="button">Evondev is awesome</button>`}
      css={`
        .button {
          --color: #6a5af9;
          font-family: "Poppins", sans-serif;
          color: white;
          padding: 15px 30px;
          border-radius: 4px;
          background-color: transparent;
          cursor: pointer;
          font-weight: 500;
          outline: none;
          border: 1px solid var(--color);
          font-size: 16px;
          position: relative;
          isolation: isolate;
        }
        .button:before {
          content: "";
          height: 100%;
          width: 0;
          position: absolute;
          top: 0;
          right: 0;
          background-color: var(--color);
          z-index: -1;
          transition: width 0.25s ease-in;
        }
        .button:hover:before {
          width: 100%;
        }
      `}
    ></Template>
  );
};
export const Button3 = function () {
  return (
    <Template
      title="Button Hover Effect"
      source="button"
      allowView={true}
      html={`<button class="button">Evondev is awesome</button>`}
      css={`
        .button {
          --color: #6a5af9;
          font-family: "Poppins", sans-serif;
          color: white;
          padding: 15px 30px;
          border-radius: 4px;
          background-color: transparent;
          cursor: pointer;
          font-weight: 500;
          outline: none;
          border: 1px solid var(--color);
          font-size: 16px;
          position: relative;
          isolation: isolate;
        }
        .button:before {
          content: "";
          height: 0;
          width: 100%;
          position: absolute;
          top: 0;
          left: 0;
          background-color: var(--color);
          z-index: -1;
          transition: height 0.25s ease-in;
        }
        .button:hover:before {
          height: 100%;
        }
      `}
    ></Template>
  );
};
export const Button4 = function () {
  return (
    <Template
      title="Button Hover Effect"
      source="button"
      allowView={true}
      html={`<button class="button">Evondev is awesome</button>`}
      css={`
        .button {
          --color: #6a5af9;
          font-family: "Poppins", sans-serif;
          color: white;
          padding: 15px 30px;
          border-radius: 4px;
          background-color: transparent;
          cursor: pointer;
          font-weight: 500;
          outline: none;
          border: 1px solid var(--color);
          font-size: 16px;
          position: relative;
          isolation: isolate;
        }
        .button:before {
          content: "";
          height: 0;
          width: 100%;
          position: absolute;
          bottom: 0;
          left: 0;
          background-color: var(--color);
          z-index: -1;
          transition: height 0.25s ease-in;
        }
        .button:hover:before {
          height: 100%;
        }
      `}
    ></Template>
  );
};
export const Button5 = function () {
  return (
    <Template
      title="Button Hover Effect"
      source="button"
      allowView={true}
      html={`<button class="button">Evondev is awesome</button>`}
      css={`
        .button {
          --color: #6a5af9;
          font-family: "Poppins", sans-serif;
          color: white;
          padding: 15px 30px;
          border-radius: 4px;
          background-color: transparent;
          cursor: pointer;
          font-weight: 500;
          outline: none;
          border: none;
          font-size: 16px;
          position: relative;
          isolation: isolate;
        }
        .button:before {
          content: "";
          height: 0;
          width: 100%;
          position: absolute;
          top: 50%;
          left: 0;
          transform: translate(0, -50%);
          background-color: var(--color);
          z-index: -1;
          transition: height 0.25s ease-in;
        }
        .button:hover:before {
          height: 100%;
        }
      `}
    ></Template>
  );
};
export const Button6 = function () {
  return (
    <Template
      title="Button Hover Effect"
      source="button"
      allowView={true}
      html={`<button class="button">Evondev is awesome</button>`}
      css={`
        .button {
          --color: #6a5af9;
          font-family: "Poppins", sans-serif;
          color: white;
          padding: 15px 30px;
          border-radius: 4px;
          background-color: transparent;
          cursor: pointer;
          font-weight: 500;
          outline: none;
          border: none;
          font-size: 16px;
          position: relative;
          isolation: isolate;
        }
        .button:before {
          content: "";
          height: 100%;
          width: 0;
          position: absolute;
          top: 0;
          left: 50%;
          transform: translate(-50%, 0);
          background-color: var(--color);
          z-index: -1;
          transition: width 0.25s ease-in;
        }
        .button:hover:before {
          width: 100%;
        }
      `}
    ></Template>
  );
};
export const Button7 = function () {
  return (
    <Template
      title="Button Hover Effect"
      source="button"
      allowView={true}
      html={`<button class="button">
        <span>Evondev is</span>
      </button>`}
      css={`
        .button {
          --color: #6a5af9;
          font-family: "Poppins", sans-serif;
          color: white;
          padding: 15px 30px;
          border-radius: 4px;
          background-color: var(--color);
          cursor: pointer;
          font-weight: 500;
          outline: none;
          border: none;
          font-size: 16px;
          position: relative;
          isolation: isolate;
          overflow: hidden;
          backface-visibility: hidden;
        }
        .button span {
          display: inline-block;
          width: 100%;
          height: 100%;
          transition: all 0.2s linear;
          backface-visibility: hidden;
        }
        .button:before {
          content: "awesome";
          height: 100%;
          width: 100%;
          position: absolute;
          left: 0;
          top: -100%;
          transition: all 0.25s ease-in;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .button:hover:before {
          top: 0;
        }
        .button:hover span {
          transform: translateY(300%);
        }
      `}
    ></Template>
  );
};
export const Button8 = function () {
  return (
    <Template
      title="Button Hover Effect"
      source="button"
      allowView={true}
      html={`<button class="button">3D BUTTON</button>`}
      css={`
        .button {
          --color: #6a5af9;
          font-family: "Poppins", sans-serif;
          color: white;
          padding: 15px 30px;
          width: 200px;
          border-radius: 4px;
          background-color: var(--color);
          cursor: pointer;
          font-weight: 500;
          outline: none;
          border: none;
          font-size: 16px;
          -webkit-transform-style: preserve-3d;
          -moz-transform-style: preserve-3d;
          transform-style: preserve-3d;
          transition: all 0.2s linear;
        }
        .button:hover {
          transform: rotateY(-15deg);
        }
      `}
    ></Template>
  );
};
