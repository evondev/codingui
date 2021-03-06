import React from "react";
import Template from "./Template";

const InputWithButton = () => {
  return (
    <Template
      title="Input with Button"
      source="form"
      html={`<div class="input-button">
            <input type="text" placeholder="Your email address..." />
            <button>Subscribe</button>
          </div>`}
      css={`
        .input-button {
          display: flex;
          width: 100%;
          background-color: #eee;
        }
        .input-button input {
          width: 100%;
          flex: 1;
          padding: 1.5rem;
          background-color: transparent;
        }
        .input-button button {
          background-color: #08aeea;
          color: white;
          padding: 1.5rem 2rem;
        }
      `}
    ></Template>
  );
};
const InputWithIcon = () => {
  return (
    <Template
      title="Input with Icon"
      source="form"
      html={`<div class="input-icon">
            <input type="text" placeholder="Enter your name" />
            <i class="fa fa-check-circle"></i>
          </div>`}
      css={`
        .input-icon {
          position: relative;
        }
        .input-icon input {
          width: 100%;
          background-color: white;
          border-radius: 4px;
          border: 1px solid #eee;
          padding: 1.5rem 3.5rem 1.5rem 1.5rem;
          transition: border 0.2s ease-in;
        }
        .input-icon i {
          color: #07a787;
          position: absolute;
          right: 1rem;
          top: 50%;
          transform: translateY(-50%);
        }
      `}
    ></Template>
  );
};

const InputFile = () => {
  return (
    <>
      <Template
        title="Custom input file"
        source="input"
        html={`<div class="input-file">
        <input type="file" name="file" id="file"/>
        <label for="file" class="input-label">
          <i class="fas fa-cloud-upload-alt icon-upload"></i>
        </label>
      </div>`}
        css={`
          .input-file {
            margin: 0 auto;
            width: 100%;
            height: 15rem;
            position: relative;
          }
          .input-label {
            border-radius: 8px;
            border: 1px dotted #eee;
            display: flex;
            align-items: center;
            justify-content: center;
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 2;
            cursor: pointer;
          }
          .input-file input[type="file"] {
            display: none;
          }
          .input-file .icon-upload {
            color: #ccc;
            font-size: 3rem;
            pointer-events: none;
          }
        `}
      ></Template>
    </>
  );
};

const InputFocus = () => {
  return (
    <>
      <Template
        title="Input focus effect"
        source="form"
        author="whitespace"
        authorFrom="https://dribbble.com/white_space"
        html={`
        <input type="text" class="input-focus" placeholder="Name"/>
        `}
        css={`
          .input-focus {
            padding: 1.5rem;
            width: 100%;
            display: block;
            border: 1px solid #b5bfc9;
            border-radius: 6px;
            color: #0d1f36;
            font-size: 1.6rem;
            outline: none;
            background-color: white;
            transition: all 0.2s ease;
            margin-bottom: 10px;
          }
          .input-focus::-webkit-input-placeholder {
            color: #8d97a9;
          }
          .input-focus::-moz-input-placeholder {
            color: #8d97a9;
          }
          .input-focus:focus {
            border-color: #ff695b;
            box-shadow: 0 0 0 4px #ffe2df;
          }
        `}
      ></Template>
    </>
  );
};

const InputFocusEffect = () => {
  return (
    <>
      <Template
        title="Input focus effect"
        source="form"
        html={`
        <div class="input-focus-effect">
          <input type="text"/>
          <label>Name</label>
        </div>
        `}
        css={`
          .input-focus-effect {
            position: relative;
            display: flex;
            flex-direction: column-reverse;
          }
          .input-focus-effect input {
            padding: 2.5rem 1rem 1rem;
            border: 1px solid transparent;
            display: block;
            width: 100%;
            border-radius: 8px;
            transition: border 0.25s linear;
            background-color: transparent;
            outline: none;
          }
          .input-focus-effect input:focus {
            border-color: var(--primary);
          }
          .input-focus-effect input:focus + label {
            transform: translateY(0);
            top: 1rem;
          }
          .input-focus-effect label {
            position: absolute;
            top: 50%;
            left: 1rem;
            transform: translateY(-50%);
            pointer-events: none;
            color: #999;
            transition: 0.25s linear;
            font-size: 1.2rem;
          }
        `}
      ></Template>
    </>
  );
};

export {
  InputWithIcon,
  InputWithButton,
  InputFile,
  InputFocus,
  InputFocusEffect,
};
