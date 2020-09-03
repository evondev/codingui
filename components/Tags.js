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

const Tags = () => {
  return (
    <>
      <Template
        title="Tags list"
        source=""
        author=""
        authorFrom=""
        html={`
        <div class="tags">
        <div class="tags-item">
          <span class="tags-text">Frontend</span>
          <i class="fal fa-times tags-remove"></i>
        </div>
        <div class="tags-item">
          <span class="tags-text">Backend</span>
          <i class="fal fa-times tags-remove"></i>
        </div>
        <div class="tags-item">
          <span class="tags-text">Fullstack</span>
          <i class="fal fa-times tags-remove"></i>
        </div>
        <div class="tags-item">
          <span class="tags-text">DevOps</span>
          <i class="fal fa-times tags-remove"></i>
        </div>
        <div class="tags-item">
          <span class="tags-text">Designer</span>
          <i class="fal fa-times tags-remove"></i>
        </div>
      </div>
        `}
        css={`
          .tags {
            display: flex;
            flex-flow: row wrap;
            margin-left: -1rem;
          }
          .tags-item {
            padding: 1rem;
            border-radius: 4px;
            text-align: center;
            display: flex;
            align-items: center;
            color: var(--secondary);
            background-color: rgb(19 210 184 / 10%);
            margin-left: 1rem;
            margin-bottom: 1rem;
          }
          .tags-text {
            white-space: nowrap;
            max-width: 10rem;
            text-overflow: ellipsis;
            overflow: hidden;
            line-height: 1.4;
          }
          .tags-remove {
            cursor: pointer;
            margin-left: 1rem;
          }
        `}
      ></Template>
    </>
  );
};

export { Labels, Tags };
