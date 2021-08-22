import React from "react";
import Template from "./Template";
import { useEffect } from "react";

const SimpleTab = () => {
  useEffect(() => {
    window.addEventListener("load", function () {
      const tabs = document.querySelectorAll(".tab-item");
      const tabsContent = document.querySelectorAll(".tab-content");

      function handleChangeTab(e) {
        const tabId = e.target.dataset.tab;
        tabs.forEach((el) => el.classList.remove("active"));
        e.target.classList.add("active");
        tabsContent.forEach((el) => {
          el.classList.remove("active");
          if (el.getAttribute("data-tab") === tabId) {
            el.classList.add("active");
          }
        });
      }

      tabs.forEach((el) => el.addEventListener("click", handleChangeTab));
    });
  }, []);
  return (
    <>
      <Template
        title="Simple Tab"
        source="tab"
        author="Vishnu Prasad"
        authorFrom="https://dribbble.com/vlockn"
        html={`
        <div class="tab">
          <div class="tab-list">
            <div class="tab-item active" data-tab="1">Popular</div>
            <div class="tab-item" data-tab="2">Bali</div>
            <div class="tab-item" data-tab="3">New York</div>
          </div>
          <div class="tab-wrapper">
            <div class="tab-content active" data-tab="1">
              <div class="post">
                <img src="/images/outer-space.png" alt="outer space" class="post-image"/>
                <div class="post-info">
                  <span class="post-category">Beach</span>
                  <h3 class="post-title">Cabo San Lucas, Mexico</h3>
                </div>
              </div>
            </div>
            <div class="tab-content" data-tab="2">
              <div class="post">
                <img src="/images/unicorn.png" alt="unicorn" class="post-image"/>
                <div class="post-info">
                  <span class="post-category">Unicorn</span>
                  <h3 class="post-title">Cabo San Lucas, Mexico</h3>
                </div>
              </div>
            </div>
            <div class="tab-content" data-tab="3">
              <div class="post">
                <img src="/images/rachelizmarvel.png" alt="rachelizmarvel" class="post-image"/>
                <div class="post-info">
                  <span class="post-category">Hawaii</span>
                  <h3 class="post-title">Cabo San Lucas, Mexico</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        `}
        css={`
          .tab {
            padding: 2.5rem;
            border-radius: 1rem;
            background-color: white;
            box-shadow: var(--shadow);
          }
          .tab-list {
            display: flex;
            justify-content: space-between;
            margin-bottom: 2.5rem;
          }
          .tab-item {
            cursor: pointer;
            padding: 1.2rem 2rem;
            border-radius: 5rem;
            color: #818e9b;
            background-color: #f4f5f7;
            text-align: center;
            white-space: nowrap;
            font-weight: 500;
          }
          .tab-item.active {
            color: white;
            background-color: var(--primary);
            pointer-events: none;
          }
          .tab-item:not(:first-child) {
            margin-left: 1.5rem;
          }
          .tab-content {
            display: none;
          }
          .tab-content.active {
            display: block;
          }
          .post {
            display: flex;
            align-items: center;
          }
          .post:not(:first-child) {
            margin-bottom: 2rem;
          }
          .post-image {
            width: 8rem;
            height: 8rem;
            border-radius: 1rem;
            object-fit: cover;
            flex-shrink: 0;
            margin-right: 2.5rem;
          }
          .post-info {
            flex: 1;
          }
          .post-category {
            color: #818e9b;
            display: inline-block;
            font-size: 1.6rem;
            margin-bottom: 1rem;
            font-weight: 500;
          }
          .post-title {
            color: #4e4f51;
            font-weight: 600;
            font-size: 1.8rem;
            line-height: 1.4;
          }
        `}
        js={`
        window.addEventListener("load", function () {
          const tabs = document.querySelectorAll(".tab-item");
          const tabsContent = document.querySelectorAll(".tab-content");

          function handleChangeTab(e) {
            const tabId = e.target.dataset.tab;
            tabs.forEach((el) => el.classList.remove("active"));
            e.target.classList.add("active");
            tabsContent.forEach((el) => {
              el.classList.remove("active");
              if (el.getAttribute("data-tab") === tabId) {
                el.classList.add("active");
              }
            });
          }

          tabs.forEach((el) => el.addEventListener("click", handleChangeTab));
        });
        `}
      ></Template>
    </>
  );
};

const Tabs5 = () => {
  return (
    <>
      <Template
        title="Tabs"
        source="tab"
        author=""
        authorFrom=""
        html={`
        <div class="tabs5">
          <div class="tab-item active">Education</div>
          <div class="tab-item">Fashion</div>
          <div class="tab-item">Music</div>
          <div class="tab-item">Podcast</div>
        </div>
        `}
        css={`
          .tabs5 {
            display: flex;
            border: 1px solid #6a5af9;
          }
          .tabs5 .tab-item:not(:first-child) {
            border-left: 1px solid #6a5af9;
          }
          .tabs5 .tab-item.active {
            color: white;
            background-color: #6a5af9;
          }
          .tabs5 .tab-item {
            white-space: nowrap;
            padding: 10px 15px;
            cursor: pointer;
            color: #6a5af9;
            font-weight: 500;
            flex: 1;
            display: flex;
            align-items: center;
            justify-content: center;
          }
        `}
      ></Template>
    </>
  );
};
const Tabs7 = () => {
  return (
    <>
      <Template
        title="Tabs"
        source="tab"
        author=""
        authorFrom=""
        html={`
        <div class="tabs7">
          <div class="tab-item active">Education</div>
          <div class="tab-item">Fashion</div>
          <div class="tab-item">Music</div>
          <div class="tab-item">Podcast</div>
        </div>
        `}
        css={`
          .tabs7 {
            display: flex;
            background-color: #eee;
            border-radius: 8px;
            padding: 5px;
          }
          .tabs7 .tab-item.active {
            color: #6a5af9;
            background-color: white;
          }
          .tabs7 .tab-item {
            white-space: nowrap;
            padding: 10px 15px;
            cursor: pointer;
            color: #999;
            font-weight: 500;
            flex: 1;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: inherit;
          }
        `}
      ></Template>
    </>
  );
};
const Tabs1 = () => {
  return (
    <>
      <Template
        title="Tabs"
        source="tab"
        author="janm_ux"
        authorFrom=""
        html={`
        <div class="tabs1">
          <div class="tab-item active">Education</div>
          <div class="tab-item">Fashion</div>
          <div class="tab-item">Music</div>
          <div class="tab-item">Podcast</div>
        </div>
        `}
        css={`
          .tabs1 {
            display: flex;
          }
          .tabs1 .tab-item.active {
            color: #6a5af9;
            border-bottom-color: currentColor;
          }
          .tabs1 .tab-item {
            white-space: nowrap;
            padding: 10px 15px;
            cursor: pointer;
            color: #999;
            font-weight: 500;
            flex: 1;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: inherit;
            border-bottom: 1px solid transparent;
          }
        `}
      ></Template>
    </>
  );
};

export { SimpleTab, Tabs5, Tabs7, Tabs1 };
