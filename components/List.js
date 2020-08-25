import React from "react";
import Template from "./Template";

const SocialShare = () => {
  return (
    <>
      <Template
        title="Social Share"
        html={`<ul class="social-share">
        <li class="social-item social-item--facebook">
          <i class="fab fa-facebook-square"></i>
        </li>
        <li class="social-item social-item--twitter">
          <i class="fab fa-twitter"></i>
        </li>
        <li class="social-item social-item--telegram">
          <i class="fab fa-telegram"></i>
        </li>
        <li class="social-item social-item--linkedin">
          <i class="fab fa-linkedin"></i>
        </li>
      </ul>`}
        css={`
          .social-share {
            display: flex;
            justify-content: center;
          }
          .social-item {
            width: 5rem;
            height: 5rem;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            cursor: pointer;
          }
          .social-item--facebook {
            background-color: #3b5999;
          }
          .social-item--twitter {
            background-color: #55acee;
          }
          .social-item--telegram {
            background-color: #0077b5;
          }
          .social-item--linkedin {
            background-color: #007ee5;
          }
        `}
      ></Template>
    </>
  );
};

export { SocialShare };
