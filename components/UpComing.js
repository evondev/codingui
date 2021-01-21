import React from "react";
import Template from "./Template";

const UpComingUI = () => {
  return (
    <>
      <Template
        hideCode={true}
        source="fixed"
        author="evondev"
        html={`
        <p class="momo-text">Donate ủng hộ tác giả nếu bạn thích</p>
        <div class="momo">
          <img src="https://static.mservice.io/img/logo-momo.png"/>
          <span>0937253577</span>
        </div>
        `}
        css={`
          .momo-text {
            margin-bottom: 25px;
            font-weight: 600;
            line-height: 1.6;
            text-transform: uppercase;
          }
          .momo {
            display: grid;
            grid-template-columns: 50px 1fr;
            grid-gap: 0 20px;
            align-items: center;
            font-size: 30px;
            font-weight: bold;
          }
          .momo img {
            width: 50px;
            height: 50px;
            object-fit: cover;
          }
        `}
      ></Template>
    </>
  );
};

export { UpComingUI };
