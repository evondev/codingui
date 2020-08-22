import React from "react";
import Template from "../Template";

const InputWithButton = () => {
  return (
    <Template
      title="Input with Button"
      desc="Giao diện có 1 input và button, thường được dùng làm form tìm kiếm đơn giản"
      html={`<div class="input-button">
            <input type="text" />
            <button>Send</button>
          </div>`}
      css={`
        .input-button {
          display: flex;
          width: 100%;
        }
        .input-button input {
          flex: 1;
          padding: 1rem;
        }
        .input-button button {
          background-color: #a597ec;
          color: white;
          padding: 1rem 2rem;
        }
      `}
    ></Template>
  );
};

export default InputWithButton;
