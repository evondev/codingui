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

export { AvatarInfo };
