import React from "react";
import Template from "./Template";

const CaptainShield = () => {
  return (
    <>
      <Template
        title="Captain America Shield"
        html={`<div class="captain-shield">★</div>`}
        css={`
          .captain-shield {
            margin: 8rem auto;
            width: 3rem;
            height: 3rem;
            text-align: center;
            color: white;
            font-size: 2rem;
            border-radius: 50%;
            background-color: #00aefd;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 0 0 20px #ff7870, 0 0 0 20.5px white, 0 0 0 40px #eee,
              0 0 0 40.5px white, 0 0 0 60px #ff7870, 0 5px 0 60px #a2413b;
          }
        `}
      ></Template>
    </>
  );
};

export { CaptainShield };
