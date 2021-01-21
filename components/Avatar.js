import React, { useEffect } from "react";
import Template from "./Template";

export const AvatarDefault = () => {
  return (
    <Template
      title={`Avatar default`}
      source="avatar"
      html={`
      <div class="avatar-center avatar-default">
        <img src="/images/rachelizmarvel2021.png" alt="" class="image-cover avatar-default-image">
      </div>
        `}
      css={`
        .avatar-default {
          width: 100px;
          height: 100px;
          border-radius: 100rem;
        }
      `}
    ></Template>
  );
};
export const AvatarDefault1 = () => {
  return (
    <Template
      title={`Avatar with border`}
      source="avatar"
      html={`
      <div class="avatar-center avatar-border">
        <img src="/images/rachelizmarvel2021.png" alt="" class="image-cover avatar-image">
      </div>
        `}
      css={`
        .avatar-border {
          position: relative;
          width: 100px;
          height: 100px;
          border-radius: 100rem;
          z-index: 1;
        }
        .avatar-border:before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 5;
          background-color: #eee;
          border-radius: inherit;
          transform: scale(1.15);
          z-index: -1;
        }
      `}
    ></Template>
  );
};
export const AvatarDefault2 = () => {
  return (
    <Template
      title={`Avatar border gradient`}
      source="avatar"
      html={`
        <div class="avatar-center avatar-gradient-border">
          <img src="/images/rachelizmarvel2021.png" alt="" class="image-cover avatar-image">
        </div>
        `}
      css={`
        .avatar-gradient-border {
          position: relative;
          width: 100px;
          height: 100px;
          border-radius: 100rem;
          z-index: 1;
        }
        .avatar-gradient-border:before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 5;
          background-image: linear-gradient(to right, #1abcf4, #5defb8);
          border-radius: inherit;
          transform: scale(1.15);
          z-index: -1;
        }
      `}
    ></Template>
  );
};
export const AvatarDefault3 = () => {
  return (
    <Template
      title={`Avatar status`}
      source="avatar"
      html={`
        <div class="avatar-center avatar-status">
          <span class="_status"></span>
          <img src="/images/rachelizmarvel2021.png" alt="" class="image-cover avatar-image">
        </div>
        `}
      css={`
        .avatar-status {
          position: relative;
          width: 100px;
          height: 100px;
          border-radius: 100rem;
          z-index: 1;
        }
        .avatar-status ._status {
          width: 15px;
          height: 15px;
          border-radius: 100rem;
          background-color: var(--secondary);
          display: inline-block;
          position: absolute;
          right: 0;
          top: 0;
          transform: translate(-15px, 0);
          box-shadow: 0 0 0 2px white;
        }
      `}
    ></Template>
  );
};

export const AvatarDefault4 = () => {
  return (
    <Template
      title={`Avatar triangle`}
      source="avatar"
      html={`
        <div class="avatar-center avatar-triangle">
          <img src="/images/rachelizmarvel2021.png" alt="" class="image-cover avatar-image">
        </div>
        `}
      css={`
        .avatar-triangle {
          position: relative;
          width: 100px;
          height: 100px;
          border-radius: 100rem;
          z-index: 1;
        }
        .avatar-triangle:before {
          background-image: linear-gradient(to right, #ffcd2b, #fb07ee);
          display: inline-block;
          position: absolute;
          right: 0;
          top: 0;
          content: "";
          transform: scaleX(1.5) translateY(-30%);
          width: 100%;
          height: 100%;
          clip-path: polygon(50% 0, 100% 100%, 0 100%);
          z-index: -1;
        }
      `}
    ></Template>
  );
};

export const AvatarDefault5 = () => {
  return (
    <Template
      title={`Avatar flash`}
      source="avatar"
      html={`
        <div class="avatar-center avatar-flash">
          <img src="/images/rachelizmarvel2021.png" alt="" class="image-cover avatar-image">
        </div>
        `}
      css={`
        .avatar-flash {
          position: relative;
          width: 100px;
          height: 100px;
          border-radius: 100rem;
          z-index: 1;
          overflow: hidden;
        }
        .avatar-flash:before {
          content: "";
          width: 14px;
          height: 100%;
          background-color: rgba(255, 255, 255, 0.1);
          position: absolute;
          top: 0;
          left: 0;
          transform: translateX(-100%) rotate(15deg);
          animation: flash 1s infinite;
        }
        @keyframes flash {
          to {
            transform: translateX(100%) rotate(15deg);
            left: 100%;
          }
        }
      `}
    ></Template>
  );
};
