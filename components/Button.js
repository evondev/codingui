import React from "react";
import Template from "./Template";

const ButtonWithIcon = () => {
  return (
    <Template
      title="Button with icon"
      html={`<button class="button-icon"><i class="fab fa-youtube icon"></i><span class="text">Youtube</span></button>`}
      css={`
        .button-icon {
          padding: 1.5rem 2rem;
          color: white;
          font-size: 1.4rem;
          text-transform: uppercase;
          width: 100%;
          cursor: pointer;
          outline: none;
          font-family: "Montserrat", sans-serif;
          background-color: #e62117;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .button-icon .icon {
          font-size: 2rem;
          margin-right: 1rem;
        }
        .button-icon .text {
          font-weight: 600;
        }
      `}
    ></Template>
  );
};

const GradientButton = () => {
  return (
    <Template
      title="Gradient Button"
      html={`<button class="gradient-button">Gradient Button</button>`}
      css={`
        .gradient-button {
          padding: 1.5rem 2rem;
          color: white;
          font-size: 1.6rem;
          text-transform: uppercase;
          width: 100%;
          font-weight: bold;
          cursor: pointer;
          outline: none;
          font-family: "Montserrat", sans-serif;
          background-image: var(--gradient);
        }
      `}
    ></Template>
  );
};
const RoundedButton = () => {
  return (
    <Template
      title="Rounded Button"
      html={`<button class="rounded-button">Rounded button</button>`}
      css={`
        .rounded-button {
          border-radius: 100rem;
          padding: 1.5rem 2rem;
          color: white;
          font-size: 1.6rem;
          text-transform: uppercase;
          width: 100%;
          font-weight: bold;
          cursor: pointer;
          outline: none;
          font-family: "Montserrat", sans-serif;
          background-color: #e14eca;
        }
      `}
    ></Template>
  );
};
const OutlineButton = () => {
  return (
    <Template
      title="Outline Button"
      html={`<button class="outline-button">Outline button</button>`}
      css={`
        .outline-button {
          border-radius: 100rem;
          padding: 1.5rem 2rem;
          color: white;
          font-size: 1.6rem;
          text-transform: uppercase;
          width: 100%;
          cursor: pointer;
          outline: none;
          font-family: "Montserrat", sans-serif;
          background-color: transparent;
          color: #e14eca;
          border: 1px solid currentColor;
        }
      `}
    ></Template>
  );
};

const FloatingButton = () => {
  return (
    <Template
      title="Floating Button"
      html={`<button class="floating-button"><i class="fa fa-bolt"></i></button>`}
      css={`
        .floating-button {
          margin-left: auto;
          margin-right: auto;
          font-size: 3rem;
          color: white;
          width: 6rem;
          height: 6rem;
          border-radius: 100rem;
          display: flex;
          align-items: center;
          justify-content: center;
          background-image: linear-gradient(40deg, #ff6ec4, #7873f5);
        }
      `}
    ></Template>
  );
};

export {
  ButtonWithIcon,
  GradientButton,
  FloatingButton,
  RoundedButton,
  OutlineButton,
};
