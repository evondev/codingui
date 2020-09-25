import React from "react";
import { useEffect } from "react";
import Template from "./Template";

const Dropdown = () => {
  return (
    <>
      <Template
        title="Dropdown"
        source="dropdown"
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
            z-index: 10;
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
            padding: 2rem;
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

const LightDropdown = () => {
  useEffect(() => {
    window.addEventListener("load", function () {
      const dropdownItems = document.querySelectorAll(
        "#lightdropdown .dropdown-item"
      );
      const dropdownSelect = document.querySelector(
        "#lightdropdown .dropdown-select"
      );
      const dropdownSelectText = document.querySelector(
        "#lightdropdown .dropdown-selected"
      );
      const dropdownList = document.querySelector(
        "#lightdropdown .dropdown-list"
      );
      const dropdownCaret = document.querySelector(
        "#lightdropdown .dropdown-caret"
      );

      dropdownSelect?.addEventListener("click", function () {
        dropdownList.classList.toggle("show");
        dropdownCaret.classList.toggle("fa-angle-up");
      });

      function handleSelectDropdown(e) {
        const { value } = e.target.dataset;
        dropdownSelectText.textContent = value;
        dropdownList.classList.remove("show");
        dropdownCaret.classList.remove("fa-angle-up");
      }

      dropdownItems.forEach((el) =>
        el.addEventListener("click", handleSelectDropdown)
      );
    });
  }, []);
  return (
    <>
      <Template
        title="Light dropdown"
        source="dropdown"
        author="Heavyweight"
        authorFrom="https://dribbble.com/wereheavyweight"
        html={`
        <div class="dropdown" id="lightdropdown">
          <div class="dropdown-select">
            <span class="dropdown-selected">Option A</span>
            <i class="fa fa-angle-down dropdown-caret"></i>
          </div>
          <ul class="dropdown-list">
            <li class="dropdown-item" data-value="Option A">
              Option A
            </li>
            <li class="dropdown-item" data-value="Option B">
              Option B
            </li>
            <li class="dropdown-item" data-value="Option C">
              Option C
            </li>
          </ul>
        </div>
        `}
        css={`
          .dropdown {
            --primary: #33ccff;
            --secondary: #47536b;
            width: 100%;
            position: relative;
            border-radius: 8px;
          }
          .dropdown-caret {
            color: var(--primary);
          }
          .dropdown-select {
            background-color: white;
            box-shadow: var(--shadow);
            padding: 1.5rem;
            border-radius: inherit;
            display: flex;
            align-items: center;
            justify-content: space-between;
            cursor: pointer;
          }
          .dropdown-select * {
            pointer-events: none;
          }
          .dropdown-list {
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            margin-top: 1rem;
            paddding: 1.5rem;
            background-color: white;
            box-shadow: var(--shadow);
            padding: 1.5rem;
            border-radius: 8px;
            display: none;
          }
          .dropdown-list:before {
            content: "";
            height: 1rem;
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            background-color: transparent;
            transform: translateY(-100%);
          }
          .dropdown-list.show {
            display: block;
          }
          .dropdown-item {
            padding: 1.5rem;
            color: var(--secondary);
            transition: all 0.25s ease;
            border-radius: 8px;
            cursor: pointer;
          }
          .dropdown-item:hover {
            color: var(--primary);
            background-color: #f1fbff;
          }
        `}
        js={`
        window.addEventListener("load", function () {
            const dropdownItems = document.querySelectorAll(
              "#lightdropdown .dropdown-item"
            );
            const dropdownSelect = document.querySelector(
              "#lightdropdown .dropdown-select"
            );
            const dropdownSelectText = document.querySelector(
              "#lightdropdown .dropdown-selected"
            );
            const dropdownList = document.querySelector(
              "#lightdropdown .dropdown-list"
            );
            const dropdownCaret = document.querySelector(
              "#lightdropdown .dropdown-caret"
            );

            dropdownSelect.addEventListener("click", function () {
              dropdownList.classList.toggle("show");
              dropdownCaret.classList.toggle("fa-angle-up");
            });

            function handleSelectDropdown(e) {
              const { value } = e.target.dataset;
              dropdownSelectText.textContent = value;
              dropdownList.classList.remove("show");
              dropdownCaret.classList.remove("fa-angle-up");
            }

            dropdownItems.forEach((el) =>
              el.addEventListener("click", handleSelectDropdown)
            );
          });
        `}
      ></Template>
    </>
  );
};

export { Dropdown, LightDropdown };
