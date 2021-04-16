import React from "react";
import Template from "./Template";

const IconOpacity = () => {
  return (
    <>
      <Template
        title="Icon opacity"
        source="icon"
        author=""
        html={`
        <div class="icon-opacity"><i class="fa fa-star"></i></div>
        <div class="icon-opacity icon-opacity--secondary"><i class="fa fa-star"></i></div>
        <div class="icon-opacity icon-opacity--third"><i class="fa fa-star"></i></div>
        `}
        css={`
          .icon-opacity {
            width: 5rem;
            height: 5rem;
            margin: 5px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            color: var(--purple);
            position: relative;
          }
          .icon-opacity--secondary {
            color: var(--pink);
          }
          .icon-opacity--third {
            color: var(--blue);
          }
          .icon-opacity:before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            border-radius: 4px;
            background-color: currentColor;
            opacity: 0.2;
          }
        `}
      ></Template>
    </>
  );
};

const RatingStar = () => {
  return (
    <>
      <Template
        title="Rating Star"
        source="icon"
        html={`
      <div class="rating-star">
		<input id="star10" name="rating" type="radio" value="10" />
		<label for="star10" ></label>
		<input id="star9" name="rating" type="radio" value="9" />
		<label for="star9" class="half" ></label>
		<input id="star8" name="rating" type="radio" value="8" />
		<label for="star8" ></label>
		<input id="star7" name="rating" type="radio" value="7" />
		<label for="star7" class="half" ></label>
		<input id="star6" name="rating" type="radio" value="6" />
		<label for="star6" ></label>
		<input id="star5" name="rating" type="radio" value="5" />
		<label for="star5" class="half" ></label>
		<input id="star4" name="rating" type="radio" value="4" />
		<label for="star4" ></label>
		<input id="star3" name="rating" type="radio" value="3" />
		<label for="star3" class="half" ></label>
		<input id="star2" name="rating" type="radio" value="2" />
		<label for="star2" ></label>
		<input id="star1" name="rating" type="radio" value="1" />
		<label for="star1" class="half" ></label>
	</div>

      `}
        css={`
          .rating-star {
            display: inline-flex;
            flex-direction: row-reverse;
          }
          .rating-star input {
            display: none;
          }
          .rating-star label {
            color: #eee;
          }
          .rating-star label:before {
            font-family: "Font Awesome 5 Pro";
            display: block;
            font-size: 3.5rem;
            padding: 0.3rem 0.2rem;
            margin: 0;
            cursor: pointer;
            font-weight: 900;
            content: "\f005 ";
            color: inherit;
          }
          .rating-star label.half {
            width: 25px;
            overflow: hidden;
            position: relative;
            margin-right: -25px;
          }
          .rating-star label.half:before {
            content: "\f089 ";
            position: absolute;
            top: 0;
            left: 0;
            padding-right: 0;
            width: 100%;
          }
          .rating-star input:checked ~ label:before {
            text-shadow: 0px 0 5px rgba(255, 157, 180, 0.28);
            color: var(--purple);
          }
        `}
      ></Template>
    </>
  );
};

const LikeUnlike = () => {
  return (
    <>
      <Template
        title="Like unlike"
        source="form"
        author=""
        authorFrom=""
        html={`
        <div class="action">
          <i class="fa fa-times action-item action-dislike"></i>
          <i class="fa fa-heart action-item action-like"></i>
        </div>
        `}
        css={`
          .action {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .action-item {
            width: 50px;
            height: 50px;
            border-radius: 50px;
            margin: 0 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 18px;
            cursor: pointer;
          }
          .action-dislike {
            color: #999;
            background-color: #eee;
          }
          .action-like {
            color: #fff;
            background-color: #ff7870;
          }
        `}
      ></Template>
    </>
  );
};

const PlayerIcon = () => {
  return (
    <>
      <Template
        title="PlayerIcon"
        source=""
        author=""
        authorFrom=""
        html={`
        <div class="player-icon">
          <svg width="80" height="80">
            <circle
              stroke-width="4"
              fill="transparent"
              r="32"
              cx="40"
              cy="40"
              stroke-dasharray="400"
              stroke-dashoffset="250"
              stroke-linecap="round"
              stroke="#20E3B2"
            />
        </svg>
          <i class="fa fa-play"></i>
        </div>
        `}
        css={`
          .player-icon {
            position: relative;
            width: 80px;
            height: 80px;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .player-icon svg {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            transform: rotate(-80deg);
          }
          .player-icon i {
            width: 50px;
            height: 50px;
            color: white;
            background-color: rgba(0, 0, 0, 0.25);
            border-radius: 100px;
            display: flex;
            justify-content: center;
            align-items: center;
          }
        `}
      ></Template>
    </>
  );
};

const AvatarWithCheck = () => {
  return (
    <>
      <Template
        title="AvatarWithCheck"
        source="avatar"
        author=""
        authorFrom=""
        html={`
        <div class="avatar">
          <img src="/images/rachelizmarvel2021.png" alt="" />
          <i class="fa fa-check icon"></i>
        </div>
        `}
        css={`
          .avatar {
            width: 80px;
            height: 80px;
            position: relative;
            background: linear-gradient(to right, #b993d6, #8ca6db);
            padding: 3px;
            border-radius: 100px;
          }
          .avatar img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: inherit;
            border: 3px solid white;
          }
          .avatar .icon {
            width: 20px;
            height: 20px;
            border-radius: 20px;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: #8ca6db;
            font-size: 10px;
            color: white;
            box-shadow: 0 0 0 3px white;
            position: absolute;
            bottom: 0;
            right: 0;
            transform: translate(-25%, -25%);
            z-index: 10;
          }
        `}
      ></Template>
    </>
  );
};

export { IconOpacity, RatingStar, LikeUnlike, PlayerIcon, AvatarWithCheck };
