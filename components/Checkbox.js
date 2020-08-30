import React from "react";
import Template from "./Template";

const CustomCheckboxToggle = () => {
  return (
    <>
      <Template
        title="On-Off Switch"
        html={`<input type="checkbox" id="switch" class="switch-input"/>
        <label for="switch" class="switch"></label>`}
        css={`
          .switch {
            position: relative;
            cursor: pointer;
            width: 12rem;
            height: 5rem;
            display: block;
            margin: 0 auto;
            overflow: hidden;
            box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
            border-radius: 100rem;
            transition: 0.25s linear;
          }
          .switch:after {
            content: "";
            position: absolute;
            width: 4rem;
            height: 4rem;
            border-radius: 4rem;
            background-color: #333;
            top: 5px;
            left: 5px;
            transition: 0.25s linear;
          }
          .switch-input {
            display: none;
          }
          .switch-input:checked + .switch {
            background-color: #333;
          }
          .switch-input:checked + .switch:after {
            transform: translateX(7rem);
            background-color: white;
          }
        `}
      ></Template>
    </>
  );
};

const CustomRadio = () => {
  return (
    <>
      <Template
        title="Custom Radio"
        html={`<input type="radio" id="male" class="radio-input" name="gender"/>
        <label for="male" class="radio-label"></label>
        <input type="radio" id="fmale" class="radio-input" name="gender"/>
        <label for="fmale" class="radio-label"></label>
      `}
        css={`
          .radio-input {
            display: none;
          }
          .radio-label {
            width: 1rem;
            height: 1rem;
            border-radius: 2rem;
            background-color: #eee;
            display: inline-block;
            cursor: pointer;
            margin: 0 2rem;
            box-shadow: 0 0 0 4px #eee;
            transition: all 0.25s linear;
          }
          .radio-input:checked + .radio-label {
            box-shadow: 0 0 0 4px #eee, 0 0 0 8px #2979ff;
            background-color: #2979ff;
          }
        `}
      ></Template>
    </>
  );
};

export { CustomCheckboxToggle, CustomRadio };
