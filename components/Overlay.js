import React from "react";
import Template from "./Template";

const OverlayIcon = () => {
  return (
    <Template
      title="Overlay Icon"
      source="image"
      author="Rachelizmarvel"
      authorFrom="Dribbble"
      html={`<div class="overlay-icon"><img src="/images/rachelizmarvel.png"/><i class="fa fa-play-circle"></i></div>`}
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

const Tooltip = () => {
  return (
    <>
      <Template
        title="Tooltip"
        source=""
        author=""
        authorFrom=""
        html={`
        <div class="tooltip">
        <div class="tooltip-content">
          Variables are for remembering something for later
        </div>
        <i class="fa fa-question-circle"></i>
      </div>
        `}
        css={`
          .tooltip {
            position: relative;
            text-align: center;
            display: block;
            width: max-content;
            margin: 0 auto;
          }
          .tooltip-content {
            position: absolute;
            top: -1.5rem;
            left: 50%;
            transform: translateX(-50%) translateY(-100%);
            min-width: 25rem;
            padding: 2rem;
            line-height: 1.4;
            border-radius: 8px;
            background-color: var(--gray);
            color: white;
            z-index: 1;
            opacity: 0;
            visibility: hidden;
          }
          .tooltip-content:after {
            content: "";
            position: absolute;
            bottom: 0;
            left: 50%;
            transform: translateX(-50%) translateY(30%) rotate(45deg);
            width: 2.5rem;
            height: 2.5rem;
            border-radius: 4px;
            background-color: inherit;
            z-index: -1;
          }
          .tooltip i {
            color: var(--primary);
            font-size: 2rem;
          }
          .tooltip:hover .tooltip-content {
            opacity: 1;
            visibility: visible;
          }
        `}
      ></Template>
    </>
  );
};

export { OverlayIcon, Tooltip };
