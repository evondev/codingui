import React from "react";
import Template from "../Template";

const InputWithButton = () => {
  return (
    <Template
      title="Input with Button"
      desc="Giao diện có 1 input và button, thường được dùng làm form tìm kiếm đơn giản"
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

export default InputWithButton;
