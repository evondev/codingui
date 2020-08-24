import React from "react";
import Template from "./Template";

const Dropdown = () => {
  return (
    <>
      <Template
        title="Dropdown"
        html={`<div class="dropdown">
      <div class="dropdown__select">
        <span class="dropdown__selected">Call to action</span>
        <i class="fa fa-caret-down dropdown__caret"></i>
      </div>
      <ul class="dropdown__list">
        <li class="dropdown__item">
          <span class="dropdown__text">New project</span>
          <i class="fa fa-plus-circle dropdown__icon"></i>
        </li>
        <li class="dropdown__item">
          <span class="dropdown__text">View profile</span>
          <i class="fa fa-user dropdown__icon"></i>
        </li>
        <li class="dropdown__item">
          <span class="dropdown__text">Settings</span>
          <i class="fa fa-cog dropdown__icon"></i>
        </li>
        <li class="dropdown__item">
          <span class="dropdown__text">Logout</span>
          <i class="fa fa-circle dropdown__icon"></i>
        </li>
      </ul>
    </div>`}
        css={`
          .dropdown {
            --primary: #de4b3e;
            --secondary: #c74237;
            width: 100%;
            max-width: 47.5rem;
            position: relative;
            color: white;
            text-transform: uppercase;
            font-size: 1.8rem;
            font-weight: bold;
            border-radius: 4px;
          }
          .dropdown__select {
            border-radius: inherit;
          }
          .dropdown__list {
            margin-top: 2.5rem;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            display: none;
          }
          .dropdown__list:before {
            content: "";
            height: 2.5rem;
            position: absolute;
            left: 0;
            right: 0;
            background-color: transparent;
            transform: translateY(-100%);
          }
          .dropdown:hover .dropdown__list {
            display: block;
          }
          .dropdown__select,
          .dropdown__item {
            width: 100%;
            padding: 3rem;
            background-color: var(--primary);
            display: flex;
            align-items: center;
            justify-content: space-between;
            cursor: pointer;
          }
          .dropdown__item {
            transition: background-color 0.2s linear;
          }
          .dropdown__item:first-child {
            border-radius: 4px 4px 0 0;
            position: relative;
          }
          .dropdown__item:first-child:before {
            content: "";
            position: absolute;
            top: 0;
            left: 3rem;
            border-left: 10px solid transparent;
            border-right: 10px solid transparent;
            border-bottom: 10px solid var(--primary);
            transform: translateY(-100%);
            transition: border-color 0.2s linear;
          }
          .dropdown__item:first-child:hover:before {
            border-bottom-color: var(--secondary);
          }
          .dropdown__item:last-child {
            border-radius: 0 0 4px 4px;
          }
          .dropdown__item:hover {
            background-color: var(--secondary);
          }
        `}
      ></Template>
    </>
  );
};

export { Dropdown };
