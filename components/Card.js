import React from "react";
import Template from "./Template";

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

const FlipCard = () => {
  return (
    <>
      <Template
        title="Flip card"
        source="card"
        author=""
        authorFrom=""
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

export { Notification, FlipCard };
