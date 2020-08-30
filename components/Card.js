import React from "react";
import Template from "./Template";

const CardMessage = () => {
  return (
    <>
      <Template
        title="Flash Messages"
        html={`<div class="flash-message">
        <i class="fal fa-check-circle icon"></i>
        <h3 class="title">Done</h3>
        <p class="desc">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
        <a href="#" class="cont">Continue</a>
      </div>`}
        css={`
          .flash-message {
            max-width: 25rem;
            margin: 0 auto;
            padding: 2rem;
            background-color: #00e06d;
            color: white;
            text-align: center;
            border-radius: 4px;
          }
          .flash-message .icon {
            font-size: 10rem;
            margin-bottom: 3rem;
          }
          .flash-message .title {
            font-weight: bold;
            font-size: 2rem;
            margin-bottom: 1rem;
          }
          .flash-message .desc {
            font-size: 1.4rem;
            line-height: 1.8;
            margin-bottom: 2rem;
          }
          .flash-message .cont {
            display: block;
            width: 100%;
            padding: 1.5rem;
            background-color: white;
            color: #00e06d;
            border-radius: 5rem;
          }
        `}
      ></Template>
    </>
  );
};

export { CardMessage };
