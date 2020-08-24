import React from "react";
import Template from "./Template";

const GradientButton = () => {
  return (
    <>
      <Template
        title="Gradient Button"
        html={`<button class="gradient-button">Love me</button>`}
        css={`
          .gradient-button {
            font-size: 1.6rem;
            cursor: pointer;
            outline: none;
            font-family: "Montserrat", sans-serif;
          }
        `}
      ></Template>
    </>
  );
};

export { GradientButton };
