import React from "react";
import { useEffect } from "react";
import Template from "./Template";

const DropdownMenu = () => {
  useEffect(() => {
    window.addEventListener("load", function () {
      const menuToggle = document.querySelector(".menu-toggle");
      const menuChild = document.querySelectorAll(".has-child > a");
      menuChild?.forEach((el) =>
        el.addEventListener("click", function (e) {
          e.preventDefault();
          const subMenu = e.target?.nextElementSibling?.classList.toggle(
            "show"
          );
        })
      );
      menuToggle?.addEventListener("click", function () {
        const menu = document.querySelector(".menu");
        menu.classList.toggle("show");
      });
    });
  }, []);
  return (
    <>
      <Template
        title="Menu with dropdown"
        source="navigation"
        author=""
        authorFrom=""
        html={`
        <nav class="nav">
        <i class="fal fa-bars menu-toggle"></i>
        <ul class="menu">
          <li class="menu-item has-child">
            <a href="#" class="menu-link">
              Home <i class="fal fa-angle-down menu-arrow"></i>
            </a>
            <ul class="menu-child">
              <li class="menu-child-item has-child">
                <a href="#" class="menu-child-link">
                  Contact <i class="fal fa-angle-right arrow-right"></i><i class="fal fa-angle-down arrow-down"></i>
                </a>
                <ul class="menu-child menu-child1">
                  <li class="menu-child-item">
                    <a href="#" class="menu-child-link">
                      CodingUI
                    </a>
                  </li>
                </ul>
              </li>
              <li class="menu-child-item">
                <a href="#" class="menu-child-link">
                  Blog
                </a>
              </li>
              <li class="menu-child-item">
                <a href="#" class="menu-child-link">
                  Video
                </a>
              </li>
            </ul>
          </li>
          <li class="menu-item">
            <a href="#" class="menu-link">
              Discover
            </a>
          </li>
          <li class="menu-item">
            <a href="#" class="menu-link">
              Explore
            </a>
          </li>
          <li class="menu-item">
            <a href="#" class="menu-link">
              Category
            </a>
          </li>
          <li class="menu-item">
            <a href="#" class="menu-link">
              Branding
            </a>
          </li>
        </ul>
        </nav>
        `}
        css={`
          .menu {
            display: flex;
          }
          .menu-link {
            font-size: 1.4rem;
            color: #918eae;
            display: block;
          }
          .menu-link:hover {
            color: #202842;
          }
          .menu-item {
            position: relative;
          }

          .menu-child-link {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 1.5rem;
            color: #918eae;
          }
          .menu-child-item {
            position: relative;
          }
          .menu-child-link:hover {
            color: #202842;
          }

          .menu-toggle {
            display: none;
          }
          .nav {
            position: relative;
          }
          .arrow-right {
            display: none;
          }
          @media screen and (min-width: 1024px) {
            .arrow-down {
              display: none;
            }
            .arrow-right {
              display: block;
            }
            .menu-item:not(:first-child) {
              margin-left: 2rem;
            }
            .menu-child {
              position: absolute;
              top: 100%;
              left: 0;
              margin-top: 1rem;
              min-width: 20rem;
              background-color: white;
              box-shadow: var(--shadow);
              display: none;
            }
            .menu-child:before {
              content: "";
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 1rem;
              background-color: transparent;
              transform: translateY(-100%);
            }
            .menu-child1 {
              top: 0;
              left: 100%;
              margin-top: 0;
            }
            .menu-item.has-child:hover > .menu-child {
              display: block;
            }
            .menu-child-item.has-child:hover > .menu-child {
              display: block;
            }
          }
          @media screen and (max-width: 1023px) {
            .menu {
              position: absolute;
              right: 0;
              top: 100%;
              min-width: 20rem;
              background-color: white;
              box-shadow: var(--shadow);
              flex-direction: column;
              display: none;
              z-index: 100;
            }
            .menu.show,
            .menu-child.show {
              display: block;
            }
            .menu-item:not(:last-child) {
              border-bottom: 1px solid #eee;
            }
            .menu-link {
              padding: 1.5rem;
              display: flex;
              justify-content: space-between;
              align-items: center;
            }
            .menu-child {
              display: none;
              background-color: #f6f6f6;
            }
            .menu-child1 {
              background-color: #eee;
            }
            .menu-toggle {
              width: max-content;
              font-size: 2rem;
              display: block;
              margin-left: auto;
              cursor: pointer;
            }
          }
        `}
        js={`
        window.addEventListener("load", function () {
          const menuToggle = document.querySelector(".menu-toggle");
          const menuChild = document.querySelectorAll(".has-child > a");
          menuChild?.forEach((el) =>
            el.addEventListener("click", function (e) {
              e.preventDefault();
              const subMenu = e.target?.nextElementSibling?.classList.toggle(
                "show"
              );
            })
          );
          menuToggle?.addEventListener("click", function () {
            const menu = document.querySelector(".menu");
            menu.classList.toggle("show");
          });
        });
        `}
      ></Template>
    </>
  );
};

export { DropdownMenu };
