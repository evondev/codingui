import React from "react";
import Template from "./Template";

const ButtonWithIcon = () => {
  return (
    <Template
      title="Button with icon"
      source="form"
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
      source="form"
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
      source="form"
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
const EffectButton = () => {
  return (
    <Template
      title="Button hover effect"
      source="form"
      html={`<button class="button-effect">Hover me <i class="fal fa-long-arrow-right"></i></button>`}
      css={`
        .button-effect {
          padding: 1rem 2rem;
          border: 0;
          color: white;
          background-color: white;
          background-color: var(--primary);
          text-transform: uppercase;
          transition: padding 0.25s linear;
          text-align: center;
          position: relative;
        }
        .button-effect:hover {
          padding-right: 5rem;
        }
        .button-effect i {
          transition: 0.25s ease;
          opacity: 0;
          position: absolute;
          top: 50%;
          right: 2rem;
          transform: translateY(-50%);
        }
        .button-effect:hover i {
          transform: translateY(-50%);
          opacity: 1;
        }
      `}
    ></Template>
  );
};

const FloatingButton = () => {
  return (
    <Template
      title="Floating Button"
      source="form"
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
const LoadingButton = () => {
  return (
    <Template
      title="Loading Button"
      source="form"
      html={`<button class="loading-button"><i class="fa fa-spinner fa-spin"></i></button>`}
      css={`
        .loading-button {
          margin-left: auto;
          margin-right: auto;
          font-size: 3rem;
          color: white;
          width: 100%;
          height: 6rem;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: #ccc;
          cursor: not-allowed;
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
  EffectButton,
  LoadingButton,
};
