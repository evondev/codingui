import React from "react";
import Template from "./Template";

const SingleLine = () => {
  return (
    <>
      <Template
        title="Single line with ..."
        source="text"
        html={`<p class="single-line">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, voluptas incidunt! Nulla tenetur consequatur nostrum dignissimos temporibus iure assumenda iste quia, quam voluptates totam. Libero laboriosam ipsa voluptates voluptatem ad!</p>`}
        css={`
          .single-line {
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            color: #999;
            font-size: 1.4rem;
            line-height: 1.4;
          }
        `}
      ></Template>
    </>
  );
};
const MultiLine = () => {
  return (
    <>
      <Template
        title="Multi line with ..."
        source="text"
        html={`<p class="multi-line">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, voluptas incidunt! Nulla tenetur consequatur nostrum dignissimos temporibus iure assumenda iste quia, quam voluptates totam. Libero laboriosam ipsa voluptates voluptatem ad!</p>`}
        css={`
          .multi-line {
            color: #999;
            font-size: 1.4rem;
            line-height: 1.4;
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            overflow: hidden;
            text-overflow: ellipsis;
          }
        `}
      ></Template>
    </>
  );
};
const TextGradient = () => {
  return (
    <>
      <Template
        title="Text Gradient"
        source="text"
        html={`<h3 class="text-gradient">Text Gradient</h3>`}
        css={`
          .text-gradient {
            font-weight: bold;
            font-size: 4rem;
            display: inline-block;
            color: var(--purple);
          }
          @supports (-webkit-background-clip: text) {
            .text-gradient {
              color: transparent;
              background-image: var(--gradient);
              -webkit-background-clip: text;
            }
          }
        `}
      ></Template>
    </>
  );
};

export { SingleLine, MultiLine, TextGradient };
