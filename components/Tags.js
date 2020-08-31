import React from "react";
import Template from "./Template";

const Labels = () => {
  return (
    <>
      <Template
        title="Labels"
        source="list"
        html={`<div class="label">
        <span class="label-item">Default</span>
        <span class="label-item success">Success</span>
        <span class="label-item danger">Danger</span>
        <span class="label-item warning">Warning</span>
        <span class="label-item info">Info</span>
      </div>`}
        css={`
          .label {
            display: inline-flex;
            flex-wrap: wrap;
          }
          .label-item {
            color: white;
            padding: 5px 1rem;
            border-radius: 6px;
            margin-right: 1rem;
            margin-bottom: 1rem;
            text-transform: uppercase;
            font-size: 1rem;
            font-weight: bold;
            background-color: #333;
            display: inline-block;
          }
          .label-item.success {
            background-color: #07a787;
          }
          .label-item.info {
            background-color: #00aefd;
          }
          .label-item.danger {
            background-color: #ff7870;
          }
          .label-item.warning {
            background-color: #ffa400;
          }
        `}
      ></Template>
    </>
  );
};

export { Labels };
