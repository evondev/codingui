import React from "react";
import Template from "./Template";

const OverlayIcon = () => {
  return (
    // <div class="overlay"><img src="" alt="" class="overlay-image"/><i class="fa fa-play-circle"></i></div>
    <Template
      title="Overlay Icon"
      html={`<div class="overlay-icon"><img src="https://cdn.dribbble.com/users/2400293/screenshots/13989549/media/8ebf4dc9e4be7149e5c6f638e774fd5d.png"/><i class="fa fa-play-circle"></i></div>`}
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
