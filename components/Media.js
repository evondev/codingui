import React from "react";
import Template from "./Template";

const ResponsiveMedia = () => {
  return (
    <>
      <Template
        title="Responsive Iframe"
        source="image"
        html={`<div class="responsive-media">
      <iframe width="805" height="503" src="https://www.youtube.com/embed/Zpu-Ple4HP8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>`}
        css={`
          .responsive-media > * {
            max-width: 100%;
            height: auto;
          }
          @media screen and (min-width: 768px) {
            .responsive-media {
              position: relative;
              height: 0;
              padding-bottom: 56.25%;
              width: 100%;
              overflow: hidden;
            }
            .responsive-media > * {
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              object-fit: cover;
            }
          }
        `}
      ></Template>
    </>
  );
};
const ResponsiveImage = () => {
  return (
    <>
      <Template
        title="Responsive Image"
        source="image"
        html={`<div class="responsive-image">
      <img src="/images/outer-space.png"/>
      </div>`}
        css={`
          .responsive-image {
            position: relative;
            height: 0;
            padding-bottom: 56.25%;
          }
          .responsive-image > * {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        `}
      ></Template>
    </>
  );
};

export { ResponsiveMedia, ResponsiveImage };
