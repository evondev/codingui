import React from "react";
import Template from "./Template";

const InputWithButton = () => {
  return (
    <Template
      title="Input with Button"
      html={`<div class="input-button">
            <input type="text" placeholder="Tìm kiếm..." />
            <button>Send</button>
          </div>`}
      css={`
        .input-button {
          display: flex;
          width: 100%;
          background-color: #eee;
        }
        .input-button input {
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

export { InputWithIcon, InputWithButton };
