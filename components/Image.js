import React from "react";
import Template from "./Template";

const CircleImage = () => {
  return (
    <Template
      title="Circle Image"
      html={`<img class="circle-image" src="https://images.unsplash.com/photo-1598187079701-01513e580415?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"/>`}
      css={`
        .circle-image {
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
