import React from "react";
import Template from "./Template";

const AvatarInfo = () => {
  return (
    <>
      <Template
        title="Avatar with Info"
        source="layout"
        html={`<div class="avatar-info">
        <img
          src="https://images.unsplash.com/photo-1598134493202-9a02529d86bb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1049&q=80"
          alt=""
        />
        <div class="avatar-info-content">
          <h3>Super cool BullDog</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
      </div>`}
        css={`
          .avatar-info {
            display: flex;
            align-items: center;
          }
          .avatar-info img {
            width: 5rem;
            height: 5rem;
            border-radius: 5rem;
            margin-right: 1.5rem;
            object-fit: cover;
            filter: none;
            flex-shrink: 0;
          }
          .avatar-info h3 {
            font-weight: bold;
            font-size: 1.4rem;
            text-transform: uppercase;
            margin-bottom: 1rem;
          }
          .avatar-info p {
            font-size: 1.4rem;
            font-weight: 300;
            line-height: 1.4;
          }
        `}
      ></Template>
    </>
  );
};
const Flexbox3 = () => {
  return (
    <>
      <Template
        title="Equal height column"
        source="layout"
        html={`
        <div class="equal-height">
        <div class="item">
          <div class="image"></div>
          <div class="content">
            <h3 class="title">This is title</h3>
            <span class="author">Evondev</span>
          </div>
        </div>
        <div class="item">
          <div class="image"></div>
          <div class="content">
            <h3 class="title">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
            <span class="author">Evondev</span>
          </div>
        </div>
        <div class="item">
          <div class="image"></div>
          <div class="content">
            <h3 class="title">This is title</h3>
            <span class="author">Evondev</span>
          </div>
        </div>
      </div>
        `}
        css={`
          .equal-height {
            display: flex;
            flex-wrap: wrap;
            margin-left: -2rem;
          }
          .equal-height .item {
            width: calc((100% / 3) - 2rem);
            margin-left: 2rem;
            margin-bottom: 2rem;
            border: 1px solid #eee;
          }
          .equal-height .image {
            height: 20rem;
            width: 100%;
            object-fit: cover;
            background-color: #eee;
          }
          .equal-height .content {
            padding: 1.5rem;
            height: calc(100% - 20rem);
            display: flex;
            flex-direction: column;
            justify-content: space-between;
          }
          .equal-height .title {
            font-size: 1.4rem;
            margin-bottom: 1.5rem;
            font-weight: bold;
            line-height: 1.4;
          }
          .equal-height .author {
            font-size: 1.2rem;
            color: #999;
          }
          @media screen and (max-width: 1023px) {
            .equal-height .item {
              width: calc((100% / 2) - 2rem);
            }
          }
          @media screen and (max-width: 767px) {
            .equal-height .item {
              width: calc(100% - 2rem);
            }
          }
        `}
      ></Template>
    </>
  );
};

export { AvatarInfo, Flexbox3 };
