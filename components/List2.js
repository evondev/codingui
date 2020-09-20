import React from "react";
import Template from "./Template";

const RecentActivity = () => {
  return (
    <>
      <Template
        title="Recent activity"
        source="list"
        author="Dwinawan"
        authorFrom="https://dribbble.com/dwinawan"
        html={`
        <div class="recent-item">
          <img src="/images/girl1.jpeg" alt="" class="recent-image" />
          <div class="recent-info">
            <h3 class="recent-author">Samantha</h3>
            <span class="recent-position">Ngopi Sore</span>
          </div>
          <div class="recent-meta">
            <span class="recent-change increase">+ IDR 35.000</span>
            <time class="recent-time">Sep 25, 2019</time>
          </div>
        </div>
        <div class="recent-item">
          <img src="/images/girl2.jpeg" alt="" class="recent-image" />
          <div class="recent-info">
            <h3 class="recent-author">Karen William</h3>
            <span class="recent-position">Makan Bareng</span>
          </div>
          <div class="recent-meta">
            <span class="recent-change decrease">- IDR 67.000</span>
            <time class="recent-time">Sep 25, 2019</time>
          </div>
        </div>
        <div class="recent-item">
          <img src="/images/girl3.jpeg" alt="" class="recent-image" />
          <div class="recent-info">
            <h3 class="recent-author">Rachelizmarvel</h3>
            <span class="recent-position">Designer Expert</span>
          </div>
          <div class="recent-meta">
            <span class="recent-change increase">+ IDR 84.000</span>
            <time class="recent-time">Sep 25, 2019</time>
          </div>
        </div>
        `}
        css={`
          .recent-item {
            display: flex;
            align-items: center;
            margin-bottom: 2.5rem;
          }
          .recent-image {
            width: 5rem;
            height: 5rem;
            border-radius: 5rem;
            flex-shrink: 0;
            object-fit: cover;
          }
          .recent-info {
            margin-left: 1.5rem;
          }
          .recent-author,
          .recent-change {
            display: block;
            margin-bottom: 1rem;
            color: #333;
            font-weight: 600;
          }
          .recent-position,
          .recent-time {
            font-size: 1.2rem;
            color: #999;
          }
          .recent-meta {
            margin-left: auto;
          }
          .recent-change.increase {
            color: var(--secondary);
          }
          .recent-change.decrease {
            color: var(--danger);
          }
        `}
      ></Template>
    </>
  );
};

const AvatarList = () => {
  return (
    <>
      <Template
        title="Avatar list"
        source="list"
        html={`
        <div class="avatar-list">
          <img src="/images/outer-space.png" alt="" class="avatar-image" />
          <img src="/images/unicorn.png" alt="" class="avatar-image" />
          <img src="/images/unicorn.png" alt="" class="avatar-image" />
          <img src="/images/outer-space.png" alt="" class="avatar-image" />
          <div class="avatar-more"><i class="fal fa-plus"></i></div>
        </div>
        `}
        css={`
          .avatar-list {
            display: inline-flex;
            align-items: center;
          }
          .avatar-image,
          .avatar-more {
            width: 5rem;
            height: 5rem;
            border-radius: 10rem;
            object-fit: cover;
            border: 3px solid white;
          }
          .avatar-more {
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: var(--primary);
            margin-left: -1.5rem;
            cursor: pointer;
            color: white;
            font-size: 2rem;
          }
          .avatar-image:not(:first-child) {
            margin-left: -1.5rem;
          }
        `}
      ></Template>
    </>
  );
};

export { RecentActivity, AvatarList };
