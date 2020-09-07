import React from "react";
import Template from "./Template";

const CircleImage = () => {
  return (
    <Template
      title="Image variant"
      source="image"
      html={`<img class="image" src="/images/unicorn.png"/><img class="image image--rounded" src="/images/outer-space.png"/><img class="image image--circle" src="/images/rachelizmarvel.png"/><img class="image image--special" src="/images/rachelizmarvel.png"/>`}
      css={`
        .image {
          display: inline-block;
          margin: 5px;
          width: 5rem;
          height: 5rem;
          object-fit: cover;
        }
        .image--circle {
          border-radius: 100rem;
        }
        .image--rounded {
          border-radius: 4px;
        }
        .image--special {
          border-radius: 18px 0 18px 0;
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

export { CircleImage, Triangle };
