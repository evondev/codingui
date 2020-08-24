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
      html={`<button class="gradient-button">Love me</button>`}
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
          background-image: linear-gradient(to right, #08aeea, #2af598);
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

export { ButtonWithIcon, GradientButton, FloatingButton };
