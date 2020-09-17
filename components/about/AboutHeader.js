import React from "react";
import { AboutHeaderStyles } from "./styles/AboutHeaderStyles";

const AboutHeader = () => {
  return (
    <AboutHeaderStyles>
      <div className="header-container">
        <div className="header-content">
          <div className="header-inner">
            <h3 className="header-caption">
              <span className="header-hello">Hello, </span>
              <span className="header-name">I'm Evondev</span>
            </h3>
            <h1 className="header-position">Frontend Developer</h1>
            <p className="header-desc">
              Thanks for visiting my online CV. My name is Tuan as nick name
              Evondev. I am currently a{" "}
              <strong className="text-primary">
                Junior Frontend Developer
              </strong>
              , a <strong className="text-primary">Blogger</strong> and{" "}
              <strong className="text-primary">Youtuber </strong>
              with all brands Evondev. I'm working almost about coding user
              interface with HTML CSS & JS. You can visit my project below.
            </p>
            <div className="header-social">
              <a href="#" className="header-social-item">
                Hire me
              </a>
            </div>
          </div>
        </div>
        <div className="header-me">
          <img
            src="/images/me.jpeg"
            alt="evondev"
            className="header-me-image"
          />
        </div>
      </div>
    </AboutHeaderStyles>
  );
};

export default AboutHeader;
