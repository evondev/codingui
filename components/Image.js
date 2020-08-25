import React from "react";
import Template from "./Template";

const CircleImage = () => {
  return (
    <Template
      title="Circle Image"
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

export { CircleImage };
