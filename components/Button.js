import React from "react";
import Template from "./Template";

export const Button = function () {
  return (
    <Template
      title="Button"
      source="button"
      allowView={true}
      html={`<button class="button">Evondev is awesome</button>`}
      css={`
        .button {
          font-family: "Poppins", sans-serif;
          color: white;
          padding: 15px 30px;
          border-radius: 4px;
          background-color: #6d63e5;
          cursor: pointer;
          font-weight: 500;
          outline: none;
          border: none;
          font-size: 16px;
        }
      `}
    ></Template>
  );
};
