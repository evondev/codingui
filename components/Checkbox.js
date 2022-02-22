import React from "react";
import Template from "./Template";

const CustomCheckboxToggle = () => {
  return (
    <>
      <Template
        title="On-Off Switch"
        source="input"
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
            background: #000;
            border-radius: 100rem;
            transition: background-color 0.25s linear;
          }
          .switch:after {
            content: "";
            position: absolute;
            width: 4rem;
            height: 4rem;
            border-radius: 4rem;
            background-color: #fff;
            top: 5px;
            left: 5px;
            transition: background-color 0.25s linear, transform 0.25s linear;
          }
          .switch-input {
            display: none;
          }
          .switch-input:checked + .switch {
            background-color: #6a5af9;
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
        source="input"
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
            width: 2rem;
            height: 2rem;
            border-radius: 2rem;
            background-color: #eee;
            display: inline-block;
            cursor: pointer;
            margin: 0 1rem;
            box-shadow: 0 0 0 4px #eee;
            transition: all 0.25s linear;
          }
          .radio-input:checked + .radio-label {
            box-shadow: 0 0 0 4px #fff, 0 0 0 6px #fd656b;
            background-color: #fd656b;
          }
        `}
      ></Template>
    </>
  );
};

export { CustomCheckboxToggle, CustomRadio };
