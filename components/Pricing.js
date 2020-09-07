import React from "react";
import Template from "./Template";

const Pricing = () => {
  return (
    <>
      <Template
        title="Pricing"
        source="list"
        author="Erşad Başbağ"
        authorFrom="https://dribbble.com/ersadwork"
        html={`
      <div class="pricing">
        <input type="radio" name="pricing" id="intro"/>
        <label for="intro" class="pricing-check"></label>
        <div class="pricing-content">
          <div class="pricing-info">
            <h3 class="pricing-name">Intro</h3>
            <span class="pricing-saving">Save %20</span>
          </div>
          <div class="pricing-price">
            <span class="pricing-money">$19</span>
            <span class="pricing-time">/ Month</span>
          </div>
        </div>
      </div>
      <div class="pricing">
        <input type="radio" name="pricing" id="basic"/>
        <label for="basic" class="pricing-check"></label>
        <div class="pricing-content">
          <div class="pricing-info">
            <h3 class="pricing-name">Basic</h3>
            <span class="pricing-saving">Save %20</span>
          </div>
          <div class="pricing-price">
            <span class="pricing-money">$39</span>
            <span class="pricing-time">/ Month</span>
          </div>
        </div>
      </div>
      <div class="pricing">
        <input type="radio" name="pricing" id="pro"/>
        <label for="pro" class="pricing-check"></label>
        <div class="pricing-content">
          <div class="pricing-info">
            <h3 class="pricing-name">Pro</h3>
            <span class="pricing-saving">Save %20</span>
          </div>
          <div class="pricing-price">
            <span class="pricing-money">$59</span>
            <span class="pricing-time">/ Month</span>
          </div>
        </div>
      </div>
      `}
        css={`
          .pricing {
            margin-bottom: 1.5rem;
            position: relative;
          }
          .pricing input[type="radio"] {
            display: none;
          }
          .pricing input[type="radio"]:checked + .pricing-check {
            border-color: white;
          }
          .pricing input[type="radio"]:checked ~ .pricing-content {
            border-color: var(--primary);
            background-color: var(--primary);
            color: white;
          }
          .pricing
            input[type="radio"]:checked
            ~ .pricing-content
            .pricing-saving {
            background-color: white;
          }
          .pricing-check {
            display: inline-block;
            width: 2rem;
            height: 2rem;
            border-radius: 2rem;
            background-color: white;
            border: 2px solid #aeaec4;
            cursor: pointer;
            position: absolute;
            left: 2.5rem;
            top: 50%;
            margin-top: -1rem;
          }
          .pricing-content {
            padding: 2.5rem 2.5rem 2.5rem 7.5rem;
            border-radius: 8px;
            border: 1px solid #eee;
            display: flex;
            align-items: center;
            justify-content: space-between;
            color: #0c0e44;
          }
          .pricing-name {
            font-size: 2rem;
            font-weight: 500;
            margin-bottom: 1rem;
          }
          .pricing-saving {
            text-align: center;
            display: inline-block;
            padding: 7.5px 1.5rem;
            color: #fa9376;
            background-color: #feeeee;
            border-radius: 2rem;
            font-size: 1.2rem;
          }
          .pricing-price {
            display: flex;
            align-items: center;
          }
          .pricing-money {
            font-weight: 600;
            font-size: 3rem;
          }
          .pricing-time {
            font-size: 1.2rem;
            margin-left: 1rem;
          }
        `}
      ></Template>
    </>
  );
};

export { Pricing };
