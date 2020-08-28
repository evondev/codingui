import React from "react";
import Template from "./Template";

const SocialShare = () => {
  return (
    <>
      <Template
        title="Social Share"
        html={`<ul class="social-share">
        <li class="social-item social-item--facebook">
          <i class="fab fa-facebook-square"></i>
        </li>
        <li class="social-item social-item--twitter">
          <i class="fab fa-twitter"></i>
        </li>
        <li class="social-item social-item--telegram">
          <i class="fab fa-telegram"></i>
        </li>
        <li class="social-item social-item--linkedin">
          <i class="fab fa-linkedin"></i>
        </li>
      </ul>`}
        css={`
          .social-share {
            display: flex;
            justify-content: center;
          }
          .social-item {
            width: 5rem;
            height: 5rem;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            cursor: pointer;
          }
          .social-item--facebook {
            background-color: #3b5999;
          }
          .social-item--twitter {
            background-color: #55acee;
          }
          .social-item--telegram {
            background-color: #0077b5;
          }
          .social-item--linkedin {
            background-color: #007ee5;
          }
        `}
      ></Template>
    </>
  );
};

const Pagination = () => {
  return (
    <>
      <Template
        title="Pagination"
        html={`<ul class="pagi">
        <li class="pagi-item pagi-action pagi-prev is-disabled">
          <i class="fal fa-angle-left"></i>
        </li>
        <li class="pagi-item">1</li>
        <li class="pagi-item is-active">2</li>
        <li class="pagi-item">3</li>
        <li class="pagi-item">4</li>
        <li class="pagi-item">5</li>
        <li class="pagi-item pagi-action pagi-next">
          <i class="fal fa-angle-right"></i>
        </li>
      </ul>`}
        css={`
          .pagi {
            display: flex;
            justify-content: center;
          }
          .pagi-item {
            margin: 0 1.5rem;
            font-size: 2rem;
            font-weight: 500;
            color: #999;
            cursor: pointer;
            transition: all 0.2s linear;
          }
          .pagi-item.is-disabled {
            opacity: 0.5;
            cursor: not-allowed;
          }
          .pagi-item:hover,
          .pagi-item.is-active {
            color: var(--primary);
            font-weight: bold;
          }
        `}
      ></Template>
    </>
  );
};

const Countdown = () => {
  return (
    <>
      <Template
        title="Countdown Timer"
        html={`<ul class="countdown"><li class="countdown-item"><span class="countdown-number days">28</span><span class="countdown-text">days</span></li><li class="countdown-item"><span class="countdown-number hours">10</span><span class="countdown-text">hours</span></li><li class="countdown-item"><span class="countdown-number minutes">40</span><span class="countdown-text">minutes</span></li><li class="countdown-item"><span class="countdown-number seconds">53</span><span class="countdown-text">seconds</span></li></ul>`}
        css={`
          .countdown {
            display: flex;
            justify-content: center;
            padding: 2rem 0;
            border-radius: 4px;
            background-color: #1a1c28;
            color: white;
            font-size: 2rem;
          }
          .countdown-item {
            display: flex;
            flex-direction: column;
            justify-content: center;
            text-align: center;
            padding: 0px 2rem;
          }
          .countdown-number {
            font-weight: 600;
            font-size: 5rem;
            margin-bottom: 5px;
          }
          .countdown-text {
            font-weight: 300;
            font-size: 1.2rem;
          }
        `}
      ></Template>
    </>
  );
};

export { SocialShare, Pagination, Countdown };
