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
            <input type="email" placeholder="Email address" />
            <i class="fa fa-check"></i>
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
        .input-icon input:focus {
          border-color: #2979ff;
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

export { InputWithIcon, InputWithButton, InputFile };
