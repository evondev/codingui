import React, { useEffect } from "react";
import Template from "./Template";

const SidebarMenu = () => {
  return (
    <>
      <Template
        title="Sidebar menu"
        source="menu"
        author=""
        authorFrom=""
        html={`
        <div class="sidebar-menu">
          <a href="#" class="sidebar-item">
            <i class="fal fa-home sidebar-icon"></i>
            <span class="sidebar-text">Home</span>
            <span class="sidebar-status"></span>
          </a>
          <a href="#" class="sidebar-item">
            <i class="fal fa-users sidebar-icon"></i>
            <span class="sidebar-text">Following</span>
          </a>
          <a href="#" class="sidebar-item">
            <i class="fal fa-chart-line sidebar-icon"></i>
            <span class="sidebar-text">Trending</span>
          </a>
          <a href="#" class="sidebar-item">
            <i class="fal fa-camera-retro sidebar-icon"></i>
            <span class="sidebar-text">Your photos</span>
          </a>
          <a href="#" class="sidebar-item">
            <i class="fal fa-music sidebar-icon"></i>
            <span class="sidebar-text">Playlist</span>
          </a>

      </div>
        `}
        css={`
          .sidebar-menu {
            padding: 20px;
            background-color: white;
            border-radius: 10px;
            width: 250px;
          }
          .sidebar-item {
            display: flex;
            align-items: center;
            padding: 15px;
            border-radius: 10px;
            color: #333132;
            transition: all 0.15s ease-in;
          }
          .sidebar-item:hover {
            color: white;
            background-color: #7a6ed2;
          }
          .sidebar-icon {
            font-size: 16px;
            margin-right: 10px;
          }
          .sidebar-text {
            font-weight: 500;
          }
        `}
      ></Template>
    </>
  );
};

export { SidebarMenu };
