import React from "react";
import Template from "./Template";

const CircleImage = () => {
  return (
    <Template
      title="Circle Image"
      source="image"
      html={`<img class="circle-image lazyload" data-src="/images/code.jpeg"/>`}
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
      html={`<img class="rounded-image lazyload" data-src="/images/code.jpeg"/>`}
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
      html={`<div class="triangle"></div>`}
      css={`
        .triangle {
          margin: 1rem;
          width: 0;
          height: 0;
          border-left: 5rem solid transparent;
          border-right: 5rem solid transparent;
          border-bottom: 5rem solid #ff7870;
        }
      `}
    ></Template>
  );
};

export { CircleImage, RoundedImage, Triangle };
