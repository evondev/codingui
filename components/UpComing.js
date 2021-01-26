import React from "react";
import Template from "./Template";

const UpComingUI = () => {
  return (
    <>
      <Template
        className="momo"
        hideCode={true}
        source="fixed"
        author="evondev"
        html={`
        <div class="momo-layout">
          <span className="a">Donate:</span>
          <img src="https://static.mservice.io/img/logo-momo.png"/>
          <span>0937253577</span>
        </div>
        `}
        css={`
          .momo-layout {
            color: white;
            display: grid;
            grid-template-columns: auto 50px 1fr;
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
