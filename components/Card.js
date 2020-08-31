import React from "react";
import Template from "./Template";

const CardMessage = () => {
  return (
    <>
      <Template
        title="Flash Messages"
        source="noti"
        html={`<div class="flash-message">
        <i class="fal fa-check-circle icon"></i>
        <h3 class="title">Done</h3>
        <p class="desc">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
        <a href="#" class="cont">Continue</a>
      </div>`}
        css={`
          .flash-message {
            max-width: 30rem;
            margin: 0 auto;
            padding: 2rem;
            background-color: #00e06d;
            color: white;
            text-align: center;
            border-radius: 4px;
          }
          .flash-message .icon {
            font-size: 6rem;
            margin-bottom: 3rem;
          }
          .flash-message .title {
            font-weight: bold;
            font-size: 2rem;
            margin-bottom: 1rem;
          }
          .flash-message .desc {
            font-size: 1.4rem;
            line-height: 1.4;
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
const Notification = () => {
  return (
    <>
      <Template
        title="Notification"
        source="noti"
        html={`<div class="noti noti--success">
        <i class="fal fa-bell icon"></i>
        <p class="desc"><strong>Well done</strong> - Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
        <i class="fal fa-times close"></i>
      </div>
      `}
        css={`
          .noti {
            padding: 2rem;
            display: flex;
            align-items: center;
            border-radius: 6px;
            color: white;
            margin-bottom: 1rem;
          }
          .noti--success {
            background-color: #00bf9a;
          }
          .noti .icon {
            font-size: 2rem;
            margin-right: 2rem;
          }
          .noti .desc {
            font-weight: 300;
            font-size: 1.4rem;
            padding-right: 2rem;
            line-height: 1.6;
          }
          .noti .close {
            margin-left: auto;
            cursor: pointer;
          }
        `}
      ></Template>
    </>
  );
};

export { CardMessage, Notification };
