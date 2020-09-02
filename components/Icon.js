import React from "react";
import Template from "./Template";

const IconOpacity = () => {
  return (
    <>
      <Template
        title="Icon opacity"
        source="list"
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

export { IconOpacity, RatingStar };
