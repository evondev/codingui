import React, { useEffect } from "react";
import Template from "./Template";

const FlexEqualSize = () => {
  return (
    <>
      <Template
        title="Flexbox equal sizing"
        source=""
        author=""
        authorFrom=""
        htmlCopy={`
        <div class="e-flex">
          <div class="e-flex-item"></div>
          <div class="e-flex-item"></div>
          <div class="e-flex-item"></div>
          <div class="e-flex-item"></div>
          <div class="e-flex-item"></div>
        </div>
        `}
        html={`
        <div class="e-flex">
          <div class="e-flex-item"></div>
          <div class="e-flex-item"></div>
          <div class="e-flex-item"></div>
          <div class="e-flex-item"></div>
          <div class="e-flex-item"></div>
        </div>
        `}
        cssCopy={`
          .e-flex {
            display: flex;
          }
          .e-flex-item + .e-flex-item {
            margin-left: 20px;
          }
          .e-flex-item {
            flex-grow: 1;
            height: 50px;
            border-radius: 8px;
            background-color: #a2cbfa;
            border: 1px solid #4390e1;
            box-sizing: border-box;
            box-shadow: 0 2px 2px rgb(0 90 250 / 5%), 0 4px 4px rgb(0 90 250 / 5%),
              0 8px 8px rgb(0 90 250 / 5%), 0 16px 16px rgb(0 90 250 / 5%);
          }
        `}
        css={`
          .e-flex {
            display: flex;
          }
          .e-flex-item + .e-flex-item {
            margin-left: 20px;
          }
          .e-flex-item {
            flex-grow: 1;
          }
        `}
      ></Template>
    </>
  );
};
const FlexGrid = () => {
  return (
    <>
      <Template
        title="Flexbox grid layout"
        source=""
        author=""
        authorFrom=""
        html={`
        <div class="e-flex">
          <div class="e-flex-item"></div>
          <div class="e-flex-item"></div>
          <div class="e-flex-item"></div>
          <div class="e-flex-item"></div>
          <div class="e-flex-item"></div>
        </div>
        `}
        htmlCopy={`
        <div class="e-flex">
          <div class="e-flex-item"></div>
          <div class="e-flex-item"></div>
          <div class="e-flex-item"></div>
          <div class="e-flex-item"></div>
          <div class="e-flex-item"></div>
        </div>
        `}
        css={`
          .e-flex {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
          }
          .e-flex-item {
            width: 49%;
            margin-bottom: 2%;
          }
          .e-flex-item:nth-child(3n) {
            width: 100%;
          }
        `}
        cssCopy={`
          .e-flex {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
          }
          .e-flex-item {
            width: 49%;
            margin-bottom: 2%;
            height: 50px;
            border-radius: 8px;
            background-color: #a2cbfa;
            border: 1px solid #4390e1;
            box-sizing: border-box;
            box-shadow: 0 2px 2px rgb(0 90 250 / 5%), 0 4px 4px rgb(0 90 250 / 5%),
              0 8px 8px rgb(0 90 250 / 5%), 0 16px 16px rgb(0 90 250 / 5%);
          }
          .e-flex-item:nth-child(3n) {
            width: 100%;
          }
        `}
      ></Template>
    </>
  );
};
const FlexDynamicItem = () => {
  return (
    <>
      <Template
        title="Flexbox most use"
        source=""
        author=""
        authorFrom=""
        html={`
        <div class="e-flex">
          <div class="e-flex-item"></div>
          <div class="e-flex-item"></div>
          <div class="e-flex-item"></div>
          <div class="e-flex-item"></div>
          <div class="e-flex-item"></div>
        </div>
        `}
        htmlCopy={`
        <div class="e-flex">
          <div class="e-flex-item"></div>
          <div class="e-flex-item"></div>
          <div class="e-flex-item"></div>
          <div class="e-flex-item"></div>
          <div class="e-flex-item"></div>
        </div>
        `}
        css={`
          .e-flex {
            --column-space: 20px;
            --row-space: 20px;
            --columns: 3;
            display: flex;
            flex-wrap: wrap;
            margin-left: calc(-1 * var(--column-space));
            margin-bottom: calc(-1 * var(--row-space));
          }
          .e-flex-item {
            width: calc((100% / var(--columns)) - var(--column-space));
            margin-left: var(--column-space);
            margin-bottom: var(--row-space);
          }
        `}
        cssCopy={`
          .e-flex {
            --column-space: 20px;
            --row-space: 20px;
            --columns: 3;
            display: flex;
            flex-wrap: wrap;
            margin-left: calc(-1 * var(--column-space));
            margin-bottom: calc(-1 * var(--row-space));
          }
          .e-flex-item {
            width: calc((100% / var(--columns)) - var(--column-space));
            margin-left: var(--column-space);
            margin-bottom: var(--row-space);
            height: 50px;
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
const FlexSquareLayout = () => {
  return (
    <>
      <Template
        title="Flexbox square layout"
        source=""
        author=""
        authorFrom=""
        html={`
        <div class="e-flex">
          <div class="e-flex-item">
            <div class="e-flex-content"></div>
          </div>
          <div class="e-flex-item">
            <div class="e-flex-content"></div>
          </div>
          <div class="e-flex-item">
            <div class="e-flex-content"></div>
          </div>
          <div class="e-flex-item">
            <div class="e-flex-content"></div>
          </div>
          <div class="e-flex-item">
            <div class="e-flex-content"></div>
          </div>
          <div class="e-flex-item">
            <div class="e-flex-content"></div>
          </div>
        </div>
        `}
        htmlCopy={`
        <div class="e-flex">
          <div class="e-flex-item">
            <div class="e-flex-content"></div>
          </div>
          <div class="e-flex-item">
            <div class="e-flex-content"></div>
          </div>
          <div class="e-flex-item">
            <div class="e-flex-content"></div>
          </div>
          <div class="e-flex-item">
            <div class="e-flex-content"></div>
          </div>
          <div class="e-flex-item">
            <div class="e-flex-content"></div>
          </div>
          <div class="e-flex-item">
            <div class="e-flex-content"></div>
          </div>
        </div>
        `}
        css={`
          .e-flex {
            --column-space: 20px;
            --row-space: 20px;
            --columns: 3;
            display: flex;
            flex-wrap: wrap;
            margin-left: calc(-1 * var(--column-space));
            margin-bottom: calc(-1 * var(--row-space));
          }
          .e-flex-item {
            width: calc((100% / var(--columns)) - var(--column-space));
            height: 0;
            padding-bottom: calc((100% / var(--columns)) - var(--column-space));
            margin-left: var(--column-space);
            margin-bottom: var(--row-space);
            position: relative;
          }
          .e-flex-content {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            border-radius: inherit;
            padding: 10px;
          }
        `}
        cssCopy={`
        .e-flex {
            --column-space: 20px;
            --row-space: 20px;
            --columns: 3;
            display: flex;
            flex-wrap: wrap;
            margin-left: calc(-1 * var(--column-space));
            margin-bottom: calc(-1 * var(--row-space));
          }
          .e-flex-item {
            width: calc((100% / var(--columns)) - var(--column-space));
            height: 0;
            padding-bottom: calc((100% / var(--columns)) - var(--column-space));
            margin-left: var(--column-space);
            margin-bottom: var(--row-space);
            position: relative;
            border-radius: 8px;
            background-color: #a2cbfa;
            border: 1px solid #4390e1;
            box-sizing: border-box;
            box-shadow: 0 2px 2px rgb(0 90 250 / 5%), 0 4px 4px rgb(0 90 250 / 5%),
              0 8px 8px rgb(0 90 250 / 5%), 0 16px 16px rgb(0 90 250 / 5%);
          }
          .e-flex-content {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            border-radius: inherit;
            padding: 10px;
          }
        `}
      ></Template>
    </>
  );
};

const FlexLastItemOnRight = () => {
  return (
    <>
      <Template
        title="Flexbox last item on right"
        source=""
        author=""
        authorFrom=""
        htmlCopy={`
        <div class="e-flex">
          <div class="e-flex-item"></div>
          <div class="e-flex-item"></div>
          <div class="e-flex-item"></div>
        </div>
        `}
        html={`
        <div class="e-flex">
          <div class="e-flex-item"></div>
          <div class="e-flex-item"></div>
          <div class="e-flex-item"></div>
        </div>
        `}
        cssCopy={`
        .e-flex {
            display: flex;
          }
          .e-flex-item:nth-child(2) {
            margin-left: 20px;
          }
          .e-flex-item:last-child {
            margin-left: auto;
          }
          .e-flex-item {
            width: 100px;
            height: 50px;
            border-radius: 8px;
            background-color: #a2cbfa;
            border: 1px solid #4390e1;
            box-sizing: border-box;
            box-shadow: 0 2px 2px rgb(0 90 250 / 5%), 0 4px 4px rgb(0 90 250 / 5%),
              0 8px 8px rgb(0 90 250 / 5%), 0 16px 16px rgb(0 90 250 / 5%);
          }

        `}
        css={`
          .e-flex {
            display: flex;
          }
          .e-flex-item:nth-child(2) {
            margin-left: 20px;
          }
          .e-flex-item:last-child {
            margin-left: auto;
          }
          .e-flex-item {
            width: 100px;
          }
        `}
      ></Template>
    </>
  );
};
const FlexLast2ItemOnRight = () => {
  return (
    <>
      <Template
        title="Flexbox last 2 items on right"
        source=""
        author=""
        authorFrom=""
        htmlCopy={`
        <div class="e-flex">
          <div class="e-flex-item"></div>
          <div class="e-flex-item"></div>
          <div class="e-flex-item"></div>
        </div>
        `}
        html={`
        <div class="e-flex">
          <div class="e-flex-item"></div>
          <div class="e-flex-item"></div>
          <div class="e-flex-item"></div>
        </div>
        `}
        cssCopy={`
        .e-flex {
            display: flex;
          }
          .e-flex-item:first-child {
            margin-right: auto;
          }
          .e-flex-item:last-child {
            margin-left: 20px;
          }
          .e-flex-item {
            width: 100px;
            height: 50px;
            border-radius: 8px;
            background-color: #a2cbfa;
            border: 1px solid #4390e1;
            box-sizing: border-box;
            box-shadow: 0 2px 2px rgb(0 90 250 / 5%), 0 4px 4px rgb(0 90 250 / 5%),
              0 8px 8px rgb(0 90 250 / 5%), 0 16px 16px rgb(0 90 250 / 5%);
          }

        `}
        css={`
          .e-flex {
            display: flex;
          }
          .e-flex-item:first-child {
            margin-right: auto;
          }
          .e-flex-item:last-child {
            margin-left: 20px;
          }
          .e-flex-item {
            width: 100px;
          }
        `}
      ></Template>
    </>
  );
};
const FlexEqualHeight = () => {
  return (
    <>
      <Template
        title="Flexbox equal height and item"
        source=""
        author=""
        authorFrom=""
        html={`
        <div class="e-flex">
          <div class="e-flex-item">
            <div class="e-flex-image"></div>
            <div class="e-flex-content">
            <div class="e-flex-title">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div class="e-flex-time">
              <span></span>
            </div>
            </div>
          </div>
          <div class="e-flex-item">
            <div class="e-flex-image"></div>
            <div class="e-flex-content">
            <div class="e-flex-title">
              <span></span>
            </div>
            <div class="e-flex-time">
              <span></span>
            </div>
            </div>
          </div>
          <div class="e-flex-item">
            <div class="e-flex-image"></div>
            <div class="e-flex-content">
            <div class="e-flex-title">
              <span></span>
              <span></span>
            </div>
            <div class="e-flex-time">
              <span></span>
            </div>
            </div>
          </div>
        </div>
        `}
        htmlCopy={`
        <div class="e-flex">
          <div class="e-flex-item">
            <div class="e-flex-image"></div>
            <div class="e-flex-content">
            <div class="e-flex-title">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div class="e-flex-time">
              <span></span>
            </div>
            </div>
          </div>
          <div class="e-flex-item">
            <div class="e-flex-image"></div>
            <div class="e-flex-content">
            <div class="e-flex-title">
              <span></span>
            </div>
            <div class="e-flex-time">
              <span></span>
            </div>
            </div>
          </div>
          <div class="e-flex-item">
            <div class="e-flex-image"></div>
            <div class="e-flex-content">
            <div class="e-flex-title">
              <span></span>
              <span></span>
            </div>
            <div class="e-flex-time">
              <span></span>
            </div>
            </div>
          </div>
        </div>
        `}
        css={`
          .e-flex {
            display: flex;
            margin-left: -20px;
            margin-bottom: -20px;
          }
          .e-flex-item {
            width: calc(33.33% - 20px);
            margin-left: 20px;
            margin-bottom: 20px;
            height: auto;
            padding: 10px;
            display: flex;
            flex-direction: column;
          }
          .e-flex-image {
            height: 200px;
            background-color: #eee;
            border-radius: 4px 4px 0 0;
            flex-shrink: 0;
          }
          .e-flex-content {
            padding: 20px;
            background-color: white;
            flex: 1;
            display: flex;
            flex-direction: column;
          }
          .e-flex-title {
            margin-bottom: 20px;
          }
          .e-flex-title span,
          .e-flex-time {
            display: block;
            height: 10px;
            margin-bottom: 10px;
            background-color: #eee;
          }
          .e-flex-time {
            width: 50px;
            height: 20px;
            margin-bottom: 0;
            margin-top: auto;
          }
        `}
        cssCopy={`
          .e-flex {
            display: flex;
            margin-left: -20px;
            margin-bottom: -20px;
          }
          .e-flex-item {
            width: calc(33.33% - 20px);
            margin-left: 20px;
            margin-bottom: 20px;
            height: auto;
            padding: 10px;
            display: flex;
            flex-direction: column;
            border-radius: 8px;
            background-color: #a2cbfa;
            border: 1px solid #4390e1;
            box-sizing: border-box;
            box-shadow: 0 2px 2px rgb(0 90 250 / 5%), 0 4px 4px rgb(0 90 250 / 5%),
              0 8px 8px rgb(0 90 250 / 5%), 0 16px 16px rgb(0 90 250 / 5%);
          }
          .e-flex-image {
            height: 200px;
            background-color: #eee;
            border-radius: 4px 4px 0 0;
            flex-shrink: 0;
          }
          .e-flex-content {
            padding: 20px;
            background-color: white;
            flex: 1;
            display: flex;
            flex-direction: column;
          }
          .e-flex-title {
            margin-bottom: 20px;
          }
          .e-flex-title span,
          .e-flex-time {
            display: block;
            height: 10px;
            margin-bottom: 10px;
            background-color: #eee;
          }
          .e-flex-time {
            width: 50px;
            height: 20px;
            margin-bottom: 0;
            margin-top: auto;
          }
        `}
      ></Template>
    </>
  );
};

export {
  FlexEqualSize,
  FlexGrid,
  FlexDynamicItem,
  FlexSquareLayout,
  FlexLastItemOnRight,
  FlexLast2ItemOnRight,
  FlexEqualHeight,
};
