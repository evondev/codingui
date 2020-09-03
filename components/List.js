import React from "react";
import Template from "./Template";

const SocialShare = () => {
  return (
    <>
      <Template
        title="Social Share"
        source="list"
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
        source="list"
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
        source="list"
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
            width: 25%;
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
          @media screen and (max-width: 767px) {
            .countdown-number {
              font-size: 3.5rem;
            }
          }
        `}
      ></Template>
    </>
  );
};
const Calculation = () => {
  return (
    <>
      <Template
        title="Calculation"
        source="list"
        html={`
<div class="calc" id="calc">
  <div class="calc__header"><span class="calc__header-result" id="calc__header-result">0</span></div>
  <div class="calc__content">
    <table class="calc__table">
      <tbody>
        <tr>
          <td id="calc__clear">C</td>
          <td class="calc__num">0</td>
          <td class="calc__num">.</td>
          <td class="calc__ops calc__num" data-ops="devided">/</td>
        </tr>
        <tr>
          <td class="calc__num">7</td>
          <td class="calc__num">8</td>
          <td class="calc__num">9</td>
          <td class="calc__ops calc__num" data-ops="times">*</td>
        </tr>
        <tr>
          <td class="calc__num">4</td>
          <td class="calc__num">5</td>
          <td class="calc__num">6</td>
          <td class="calc__ops calc__num" data-ops="minus">-</td>
        </tr>
        <tr>
          <td class="calc__num">1</td>
          <td class="calc__num">2</td>
          <td class="calc__num">3</td>
          <td class="calc__ops calc__num" data-ops="plus">+</td>
        </tr>
      </tbody>
    </table>
  </div>
  <div class="calc__footer">
    <button class="calc__btn-equal calc__num" id="calc__btn-equal" data-result="">=</button>
  </div>
</div>`}
        css={`
          .calc {
            width: 30rem;
            min-height: 40rem;
            box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.1);
            margin: 2rem auto;
            background-color: #fff;
          }
          .calc.shake {
            -webkit-animation: shake 0.03s alternate linear infinite;
            animation: shake 0.03s alternate linear infinite;
          }
          .calc__header {
            padding: 2.5rem;
            text-align: right;
          }
          .calc__header-result {
            font-size: 3rem;
            font-weight: 400;
            margin-top: 1rem;
            display: block;
            overflow: hidden;
            text-overflow: ellipsis;
          }
          .calc__inp-number {
            overflow: hidden;
            text-overflow: ellipsis;
            width: 100%;
            letter-spacing: 2px;
            font-size: 1.2rem;
          }
          .calc__content {
            padding: 2rem;
            background-color: rgba(26, 28, 40, 0.95);
            margin: 0 auto;
            width: 110%;
            margin-left: -5%;
            text-align: center;
            box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.7);
            position: relative;
            z-index: 10;
          }
          .calc__table {
            color: white;
            font-size: 3rem;
            font-weight: 300;
            text-align: center;
            width: 100%;
          }
          .calc__table td {
            padding: 1.5rem;
            cursor: pointer;
            vertical-align: center;
          }
          .calc__footer {
            padding: 0 2.5rem;
            text-align: center;
            background-image: linear-gradient(45deg, #fa8d50, #fe5130);
          }
          .calc__btn-equal {
            background-color: transparent;
            border: 0;
            box-shadow: none;
            outline: none;
            color: white;
            font-size: 5rem;
            font-weight: 100;
            font-family: "Montserrat", serif;
            cursor: pointer;
          }
        `}
      ></Template>
    </>
  );
};

export { SocialShare, Pagination, Countdown, Calculation };
