import React, { useEffect } from "react";
import Template from "./Template";

const NotiBell = () => {
  return (
    <>
      <Template
        title="Bell notification"
        source="card"
        html={`
        <div class="bell-noti">
          <i class="fa fa-bell bell-noti-icon"></i>
          <div class="bell-noti-status"></div>
        </div>`}
        css={`
          .bell-noti {
            font-size: 5rem;
            color: #ccc;
            position: relative;
            display: inline-block;
          }
          .bell-noti-icon:hover {
            animation: ring 0.25s forwards alternate infinite linear;
          }
          .bell-noti-status {
            width: 1rem;
            height: 1rem;
            border-radius: 1rem;
            background-color: var(--secondary);
            position: absolute;
            right: 0;
            top: 0;
          }
          @keyframes ring {
            from {
              transform: rotate(-10deg);
            }
            to {
              transform: rotate(10deg);
            }
          }
        `}
      ></Template>
    </>
  );
};

export { NotiBell };
