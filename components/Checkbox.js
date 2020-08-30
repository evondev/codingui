import React from "react";
import Template from "./Template";

const CustomCheckbox = () => {
  return (
    <>
      <Template
        title="On-Off Switch"
        html={`<label for="switch" class="switch">
        <input type="checkbox" id="switch" class="switch-input"/>
        <div class="switch-box">
          <div class="switch-overlay switch-overlay1"></div>
          <div class="switch-overlay switch-overlay2"></div>
          <div class="switch-circle switch-circle1"></div>
          <div class="switch-circle switch-circle2"></div>
        </div>
      </label>`}
        css={`
          .switch {
            cursor: pointer;
            width: 12rem;
            height: 5rem;
            display: block;
            margin: 0 auto;
            overflow: hidden;
            box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
            border-radius: 100rem;
          }
          .switch-box {
            border-radius: 100rem;
            width: 100%;
            height: 100%;
            background-color: white;
            padding: 5px;
            display: flex;
            overflow: hidden;
            position: relative;
          }
          .switch-box * {
            user-select: none;
          }
          .switch-circle,
          .switch-overlay {
            width: 4rem;
            height: 4rem;
            border-radius: inherit;
            background-color: #333;
            transition: transform 0.5s linear;
            z-index: 2;
          }
          .switch-overlay {
            position: absolute;
            top: 5px;
            left: 5px;
            background-color: #333;
          }
          .switch-overlay2 {
            background-color: white;
            right: 5px;
            left: unset;
            transform: scale(5);
          }
          .switch-circle2 {
            transform: translateX(3rem);
            background-color: white;
            z-index: 6;
          }
          .switch-input {
            display: none;
          }
          .switch-input:checked + .switch-box > .switch-overlay1 {
            transform: scale(5);
            z-index: 5;
          }
          .switch-input:checked + .switch-box > .switch-overlay2 {
            transform: scale(1);
            z-index: 5;
          }
        `}
      ></Template>
    </>
  );
};

export { CustomCheckbox };
