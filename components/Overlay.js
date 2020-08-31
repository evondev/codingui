import React from "react";
import Template from "./Template";

const OverlayIcon = () => {
  return (
    <Template
      title="Overlay Icon"
      source="overlay"
      html={`<div class="overlay-icon"><img data-src="/images/code.jpeg" class="lazyload"/><i class="fa fa-play-circle"></i></div>`}
      css={`
        .overlay-icon {
          position: relative;
        }
        .overlay-icon i {
          color: white;
          font-size: 5rem;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          cursor: pointer;
        }
      `}
    ></Template>
  );
};

export { OverlayIcon };
