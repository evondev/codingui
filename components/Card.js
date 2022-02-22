import React from "react";
import Template from "./Template";

const FlipCard = () => {
  return (
    <>
      <Template
        title="Flip card"
        html={`
        <div class="flip-card">
        <div class="flip-card-inner">
          <div class="front">
            <img src="/images/poker-building.png" alt="" />
          </div>
          <div class="back">
            <img src="/images/rachelizmarvel.png" alt="" />
          </div>
        </div>
      </div>
        `}
        css={`
          .flip-card {
            max-width: 30rem;
            height: 40rem;
            margin: 0 auto;
            perspective: 150rem;
          }
          .flip-card-inner {
            width: 100%;
            height: 100%;
            perspective: 1000px;
            transition: transform 0.6s;
            transform-style: preserve-3d;
            position: relative;
          }
          .flip-card:hover .flip-card-inner {
            transform: rotateY(180deg);
          }
          .flip-card .front,
          .flip-card .back {
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            -webkit-backface-visibility: hidden;
            backface-visibility: hidden;
          }
          .flip-card .back {
            transform: rotateY(180deg);
          }

          .flip-card img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        `}
      ></Template>
    </>
  );
};

export { FlipCard };
