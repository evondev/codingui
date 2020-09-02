import React from "react";
import Template from "./Template";

const MusicPlayer = () => {
  return (
    <>
      <Template
        title="Music playing"
        source="player"
        author="Dragon Lee"
        authorFrom="Dribbble"
        html={`
        <div class="player">
        <div class="bar">
          <div class="bar-percent"></div>
          <div class="bar-point"></div>
        </div>
        <div class="meta">
          <time class="time-remaining">02:15</time>
          <i class="fas fa-pause action"></i>
          <time class="time-playing">00:15</time>
        </div>
      </div>

        `}
        css={`
          .player {
            padding: 1.5rem;
            width: 100%;
            border-radius: 8px;
            background-color: white;
            box-shadow: 0 0 15px 2px rgba(0, 0, 0, 0.05);
          }
          .player .bar {
            width: 100%;
            height: 4px;
            border-radius: 1rem;
            background-color: #eee;
            position: relative;
            margin-bottom: 2.5rem;
          }
          .player .bar-percent {
            position: absolute;
            top: 0;
            left: 0;
            height: 100%;
            width: 45%;
            border-radius: inherit;
            background-color: var(--secondary);
          }
          .player .bar-point {
            width: 1rem;
            height: 1rem;
            border-radius: 1rem;
            background-color: var(--secondary);
            position: absolute;
            top: 50%;
            left: 45%;
            transform: translate(-50%, -50%);
          }
          .player .meta {
            display: flex;
            align-items: center;
            justify-content: space-between;
            color: #999;
            font-size: 1.4rem;
          }
          .player .action {
            color: var(--secondary);
          }
        `}
      ></Template>
    </>
  );
};

export { MusicPlayer };
