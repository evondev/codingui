import React, { useEffect } from "react";
import Template from "./Template";

const CenterBlock = () => {
  return (
    <>
      <Template
        title="Center display block"
        allowView="true"
        html={`
        <div class="center-block e-flex-item"></div>
        `}
        htmlCopy={`
        <div class="center-block e-flex-item"></div>
        `}
        css={`
          .center-block {
            display: block;
            margin: 0 auto;
            width: 100px;
            height: 100px;
          }
        `}
        cssCopy={`
          .center-block {
            display: block;
            margin: 0 auto;
            width: 100px;
            height: 100px;
            border-radius: 8px;
            background-color: #a2cbfa;
            border: 1px solid #4390e1;
            box-sizing: border-box;
            box-shadow: 0 2px 2px rgb(0 90 250 / 5%), 0 4px 4px rgb(0 90 250 / 5%),
              0 8px 8px rgb(0 90 250 / 5%), 0 16px 16px rgb(0 90 250 / 5%);
          }
        `}
      ></Template>
    </>
  );
};

const CenterInlineBlock = () => {
  return (
    <>
      <Template
        title="Center display inline-block"
        allowView="true"
        html={`
        <div class="center-inline-block e-flex-item"></div>
        `}
        htmlCopy={`
        <div class="center-inline-block e-flex-item"></div>
        `}
        css={`
          .center-inline-block {
            display: inline-block;
            position: relative;
            left: 50%;
            transform: translateX(-50%);
            width: 200px;
            height: 100px;
          }
        `}
        cssCopy={`
          .center-inline-block {
            display: inline-block;
            position: relative;
            left: 50%;
            transform: translateX(-50%);
            width: 200px;
            height: 100px;
            border-radius: 8px;
            background-color: #a2cbfa;
            border: 1px solid #4390e1;
            box-sizing: border-box;
            box-shadow: 0 2px 2px rgb(0 90 250 / 5%), 0 4px 4px rgb(0 90 250 / 5%),
              0 8px 8px rgb(0 90 250 / 5%), 0 16px 16px rgb(0 90 250 / 5%);
          }
        `}
      ></Template>
    </>
  );
};
const CenterAbsoluteX = () => {
  return (
    <>
      <Template
        title="Center absolute X"
        allowView="true"
        html={`
        <div class="boxed">
          <div class="center-x"></div>
        </div>
        `}
        htmlCopy={`
        <div class="boxed">
          <div class="center-x"></div>
        </div>
        `}
        css={`
          .boxed {
            width: 200px;
            height: 200px;
            border-radius: 8px;
            background-color: #a2cbfa;
            border: 1px solid #4390e1;
            box-sizing: border-box;
            box-shadow: 0 2px 2px rgb(0 90 250 / 5%),
              0 4px 4px rgb(0 90 250 / 5%), 0 8px 8px rgb(0 90 250 / 5%),
              0 16px 16px rgb(0 90 250 / 5%);
            position: relative;
          }
          .center-x {
            width: 50px;
            height: 50px;
            background-color: #fff;
            border-radius: 10px;
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
          }
        `}
        cssCopy={`
        .boxed {
            width: 200px;
            height: 200px;
            border-radius: 8px;
            background-color: #a2cbfa;
            border: 1px solid #4390e1;
            box-sizing: border-box;
            box-shadow: 0 2px 2px rgb(0 90 250 / 5%),
              0 4px 4px rgb(0 90 250 / 5%), 0 8px 8px rgb(0 90 250 / 5%),
              0 16px 16px rgb(0 90 250 / 5%);
            position: relative;
          }
          .center-x {
            width: 50px;
            height: 50px;
            background-color: #fff;
            border-radius: 10px;
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
          }
        `}
      ></Template>
    </>
  );
};
const CenterAbsoluteY = () => {
  return (
    <>
      <Template
        title="Center absolute Y"
        allowView="true"
        html={`
        <div class="boxed">
          <div class="center-y"></div>
        </div>
        `}
        htmlCopy={`
        <div class="boxed">
          <div class="center-y"></div>
        </div>
        `}
        css={`
          .boxed {
            width: 200px;
            height: 200px;
            border-radius: 8px;
            background-color: #a2cbfa;
            border: 1px solid #4390e1;
            box-sizing: border-box;
            box-shadow: 0 2px 2px rgb(0 90 250 / 5%),
              0 4px 4px rgb(0 90 250 / 5%), 0 8px 8px rgb(0 90 250 / 5%),
              0 16px 16px rgb(0 90 250 / 5%);
            position: relative;
          }
          .center-y {
            width: 50px;
            height: 50px;
            background-color: #fff;
            border-radius: 10px;
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
          }
        `}
        cssCopy={`
        .boxed {
            width: 200px;
            height: 200px;
            border-radius: 8px;
            background-color: #a2cbfa;
            border: 1px solid #4390e1;
            box-sizing: border-box;
            box-shadow: 0 2px 2px rgb(0 90 250 / 5%),
              0 4px 4px rgb(0 90 250 / 5%), 0 8px 8px rgb(0 90 250 / 5%),
              0 16px 16px rgb(0 90 250 / 5%);
            position: relative;
          }
          .center-x {
            width: 50px;
            height: 50px;
            background-color: #fff;
            border-radius: 10px;
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
          }
        `}
      ></Template>
    </>
  );
};
const CenterAbsolute = () => {
  return (
    <>
      <Template
        title="Center absolute"
        allowView="true"
        html={`
        <div class="boxed">
          <div class="center-"></div>
        </div>
        `}
        htmlCopy={`
        <div class="boxed">
          <div class="center-"></div>
        </div>
        `}
        css={`
          .boxed {
            width: 200px;
            height: 200px;
            border-radius: 8px;
            background-color: #a2cbfa;
            border: 1px solid #4390e1;
            box-sizing: border-box;
            box-shadow: 0 2px 2px rgb(0 90 250 / 5%),
              0 4px 4px rgb(0 90 250 / 5%), 0 8px 8px rgb(0 90 250 / 5%),
              0 16px 16px rgb(0 90 250 / 5%);
            position: relative;
          }
          .center- {
            width: 50px;
            height: 50px;
            background-color: #fff;
            border-radius: 10px;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
          }
        `}
        cssCopy={`
        .boxed {
            width: 200px;
            height: 200px;
            border-radius: 8px;
            background-color: #a2cbfa;
            border: 1px solid #4390e1;
            box-sizing: border-box;
            box-shadow: 0 2px 2px rgb(0 90 250 / 5%),
              0 4px 4px rgb(0 90 250 / 5%), 0 8px 8px rgb(0 90 250 / 5%),
              0 16px 16px rgb(0 90 250 / 5%);
            position: relative;
          }
          .center- {
            width: 50px;
            height: 50px;
            background-color: #fff;
            border-radius: 10px;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%,-50%);
          }
        `}
      ></Template>
    </>
  );
};
const CenterFlexbox = () => {
  return (
    <>
      <Template
        title="Center flexbox"
        allowView="true"
        html={`
        <div class="boxed">
          <div class="center-f"></div>
        </div>
        `}
        htmlCopy={`
        <div class="boxed">
          <div class="center-f"></div>
        </div>
        `}
        css={`
          .boxed {
            width: 200px;
            height: 200px;
            border-radius: 8px;
            background-color: #a2cbfa;
            border: 1px solid #4390e1;
            box-sizing: border-box;
            box-shadow: 0 2px 2px rgb(0 90 250 / 5%),
              0 4px 4px rgb(0 90 250 / 5%), 0 8px 8px rgb(0 90 250 / 5%),
              0 16px 16px rgb(0 90 250 / 5%);
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .center-f {
            width: 50px;
            height: 50px;
            background-color: #fff;
            border-radius: 10px;
          }
        `}
        cssCopy={`
        .boxed {
            width: 200px;
            height: 200px;
            border-radius: 8px;
            background-color: #a2cbfa;
            border: 1px solid #4390e1;
            box-sizing: border-box;
            box-shadow: 0 2px 2px rgb(0 90 250 / 5%),
              0 4px 4px rgb(0 90 250 / 5%), 0 8px 8px rgb(0 90 250 / 5%),
              0 16px 16px rgb(0 90 250 / 5%);
              display: flex;
            justify-content: center;
            align-items: center;
          }
          .center-f {
            width: 50px;
            height: 50px;
            background-color: #fff;
            border-radius: 10px;
          }
        `}
      ></Template>
    </>
  );
};
const CenterGrid = () => {
  return (
    <>
      <Template
        title="Center Grid"
        allowView="true"
        html={`
        <div class="boxed">
          <div class="center-g"></div>
        </div>
        `}
        htmlCopy={`
        <div class="boxed">
          <div class="center-g"></div>
        </div>
        `}
        css={`
          .boxed {
            width: 200px;
            height: 200px;
            border-radius: 8px;
            background-color: #a2cbfa;
            border: 1px solid #4390e1;
            box-sizing: border-box;
            box-shadow: 0 2px 2px rgb(0 90 250 / 5%),
              0 4px 4px rgb(0 90 250 / 5%), 0 8px 8px rgb(0 90 250 / 5%),
              0 16px 16px rgb(0 90 250 / 5%);
            display: grid;
            place-items: center;
          }
          .center-g {
            width: 50px;
            height: 50px;
            background-color: #fff;
            border-radius: 10px;
          }
        `}
        cssCopy={`
        .boxed {
            width: 200px;
            height: 200px;
            border-radius: 8px;
            background-color: #a2cbfa;
            border: 1px solid #4390e1;
            box-sizing: border-box;
            box-shadow: 0 2px 2px rgb(0 90 250 / 5%),
              0 4px 4px rgb(0 90 250 / 5%), 0 8px 8px rgb(0 90 250 / 5%),
              0 16px 16px rgb(0 90 250 / 5%);
            display: grid;
            place-items: center;
          }
          .center-g {
            width: 50px;
            height: 50px;
            background-color: #fff;
            border-radius: 10px;
          }
        `}
      ></Template>
    </>
  );
};

export {
  CenterBlock,
  CenterInlineBlock,
  CenterAbsoluteX,
  CenterAbsoluteY,
  CenterAbsolute,
  CenterFlexbox,
  CenterGrid,
};
