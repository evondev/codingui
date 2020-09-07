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

const SimpleCard = () => {
  return (
    <>
      <Template
        title="Simple card"
        author="Ariuka"
        authorFrom="https://dribbble.com/Ariuka_dsgn"
        source="card"
        html={`
        <div class="simple-card">
        <div class="simple-card-image">
        <img src="/images/dell.jpeg" alt=""/>
        </div>
        <div class="simple-card-content">
          <h3 class="simple-card-title">Applying for a Design Job</h3>
          <p class="simple-card-desc">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio cupiditate, eius illo sapiente repellat recusandae quo tempora totam corrupti.</p>
          <div class="simple-card-line"></div>
        </div>
      </div>
        `}
        css={`
          .simple-card {
            background-color: white;
            border-radius: 2rem;
            padding: 1.5rem;
            box-shadow: var(--shadow);
          }
          .simple-card-image {
            position: relative;
            height: 0;
            padding-bottom: 56.25%;
          }
          .simple-card-image > img {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 1rem;
          }
          .simple-card-content {
            padding: 3rem 1rem;
          }
          .simple-card-title {
            font-weight: 500;
            font-size: 2rem;
            line-height: 1.6;
            margin-bottom: 1.5rem;
            color: #2b2b2b;
          }
          .simple-card-desc {
            color: #c7cbdc;
            font-weight: 300;
            line-height: 1.6;
            font-size: 1.4rem;
            margin-bottom: 3rem;
          }
          .simple-card-line {
            width: 30%;
            height: 2px;
            margin-left: auto;
            background-color: var(--primary);
          }
        `}
      ></Template>
    </>
  );
};

export { Notification, FlipCard, SimpleCard };
