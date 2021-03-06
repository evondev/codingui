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

const CardHover = () => {
  return (
    <>
      <Template
        title="Card hover effect"
        source="card"
        author="Tiến Đức"
        authorFrom="#"
        html={`
        <div class="card">
          <div class="card__inner">
            <h5>01</h5>
            <h3>Sweet</h3>
            <p>With all my heart, I love you baby
        Stay with me, and you will see my arms will hold you, baby
        Never leave, 'cause I believe I'm in love.</p>
          </div>
        </div>
        `}
        css={`
          .card {
            cursor: pointer;
            max-width: 285px;
            border-radius: 4px;
            border: 1px solid rgba(0, 0, 0, 0.1);
            padding: 25px;
            transform: scale(1);
            transition: transform 250ms cubic-bezier(0.07, 0.79, 0.18, 0.92);
            position: relative;
          }
          .card::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 5px;
            border-radius: 4px 4px 0 0;
            background-color: #ff414d;
            transform: scaleX(0);
            transition: transform 1s cubic-bezier(0.06, 1.05, 0.24, 0.97);
            transform-origin: 0;
          }
          .card:hover {
            transform: scale(1.05);
            box-shadow: 0 0 40px rgba(0, 0, 0, 0.08);
          }
          .card:hover::before {
            transform: scaleX(1);
          }
          .card .card__inner h5 {
            margin-top: 20px;
            margin-right: 15px;
            color: #ff414d;
            font-size: 32px;
            text-align: right;
            font-weight: 600;
          }
          .card .card__inner h3 {
            font-size: 40px;
            margin-bottom: 25px;
            font-weight: 600;
          }
          .card .card__inner p {
            font-size: 16px;
            font-weight: 400;
            line-height: 1.8;
          }
        `}
      ></Template>
    </>
  );
};

const GradientCard = () => {
  return (
    <>
      <Template
        title="GradientCard"
        source=""
        author=""
        authorFrom=""
        html={`
        <div class="card-item">
          <div class="card-header">
            <div class="card-header-brand">
              <i class="fal fa-draw-polygon"></i>
            </div>
            <img
              src="/images/iu-logo.png"
              alt=""
              class="card-header-logo"
            />
          </div>
          <div class="card-number">
            <span class="card-number-item">5468</span>
            <span class="card-number-item">3500</span>
            <span class="card-number-item">9208</span>
            <span class="card-number-item">6180</span>
          </div>
          <div class="card-footer">
            <h3 class="card-money">$ 7,610.00</h3>
            <div class="card-circle"></div>
          </div>
        </div>
        `}
        css={`
          .card-item {
            padding: 25px;
            border-radius: 20px;
            background-image: linear-gradient(
              to right bottom,
              rgb(104, 227, 238),
              rgb(245, 117, 218),
              rgb(140, 135, 255),
              rgb(211, 176, 233)
            );
            color: white;
          }
          .card-header {
            margin-bottom: 25px;
            display: flex;
            -webkit-box-align: center;
            align-items: center;
            -webkit-box-pack: justify;
            justify-content: space-between;
          }
          .card-header-brand {
            width: 50px;
            height: 40px;
            border-radius: 15px;
            font-size: 30px;
            background-color: rgba(255, 255, 255, 0.3);
            display: flex;
            -webkit-box-align: center;
            align-items: center;
            -webkit-box-pack: center;
            justify-content: center;
          }
          .card-number {
            display: flex;
            -webkit-box-align: center;
            align-items: center;
            -webkit-box-pack: justify;
            justify-content: space-between;
            font-weight: 600;
            margin-bottom: 40px;
          }
          .card-footer {
            display: flex;
            -webkit-box-align: center;
            align-items: center;
            -webkit-box-pack: justify;
            justify-content: space-between;
          }
          .card-money {
            font-size: 30px;
            font-weight: 600;
          }
          .card-circle {
            width: 50px;
            height: 50px;
            border-radius: 50px;
            position: relative;
          }
          .card-circle:before,
          .card-circle:after {
            content: "";
            position: absolute;
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100%;
            background-color: white;
            opacity: 0.5;
            border-radius: inherit;
            transform: translateX(-50%);
          }
          .card-circle:after {
            transform: translateX(0%);
          }
        `}
      ></Template>
    </>
  );
};

export { Notification, FlipCard, SimpleCard, CardHover, GradientCard };
