import React from "react";
import Template from "../Template";

const GradientButton = () => {
  return (
    <Template
      title="Gradient Button"
      desc="Button với màu gradient đẹp mắt"
      html={`<button class="gradient-button">Love me</button>`}
      css={`
        .gradient-button {
          padding: 1.5rem 2rem;
          border-radius: 4px;
          color: white;
          font-size: 1.6rem;
          text-transform: uppercase;
          width: 100%;
          font-weight: bold;
          cursor: pointer;
          outline: none;
          font-family: Montserrat, sans-serif;
          background-image: linear-gradient(to right, #08aeea, #2af598);
        }
      `}
    ></Template>
  );
};

export default GradientButton;
