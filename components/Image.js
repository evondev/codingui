import React from "react";
import Template from "./Template";

const CircleImage = () => {
  return (
    <Template
      title="Circle Image"
      source="image"
      html={`<img class="circle-image" src="/images/torii.png"/>`}
      css={`
        .circle-image {
          margin: 0 auto;
          width: 20rem;
          height: 20rem;
          border-radius: 100rem;
          object-fit: cover;
        }
      `}
    ></Template>
  );
};
const RoundedImage = () => {
  return (
    <Template
      title="Rounded Image"
      source="image"
      author="Rachelizmarvel"
      authorFrom="Dribbble"
      html={`<img class="rounded-image" src="/images/unicorn.png"/>`}
      css={`
        .rounded-image {
          margin: 0 auto;
          width: 20rem;
          height: 20rem;
          border-radius: 8px;
          object-fit: cover;
        }
      `}
    ></Template>
  );
};
const Triangle = () => {
  return (
    <Template
      title="Triangle"
      source="image"
      html={`<div class="triangle triangle--top"></div><div class="triangle triangle--bottom"></div><div class="triangle triangle--left"></div><div class="triangle triangle--right"></div>`}
      css={`
        .triangle {
          margin: 5px;
          display: inline-block;
          width: 0;
          height: 0;
        }
        .triangle--top {
          border-left: 1rem solid transparent;
          border-right: 1rem solid transparent;
          border-bottom: 1rem solid var(--primary);
        }
        .triangle--bottom {
          border-left: 1rem solid transparent;
          border-right: 1rem solid transparent;
          border-top: 1rem solid var(--primary);
        }
        .triangle--right {
          border-top: 1rem solid transparent;
          border-bottom: 1rem solid transparent;
          border-left: 1rem solid var(--primary);
        }
        .triangle--left {
          border-top: 1rem solid transparent;
          border-bottom: 1rem solid transparent;
          border-right: 1rem solid var(--primary);
        }
      `}
    ></Template>
  );
};

export { CircleImage, RoundedImage, Triangle };
