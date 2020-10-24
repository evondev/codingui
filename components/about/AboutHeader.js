import React from "react";
import { AboutHeaderStyles } from "./styles/AboutHeaderStyles";

const AboutHeader = () => {
  return (
    <AboutHeaderStyles>
      <div className="header-container">
        <div className="header-content">
          <h3 className="header-caption">
            <span className="header-hello">Hello, </span>
            <span className="header-name text-primary">I'm Evondev</span>
          </h3>
          <h1 className="header-position">Frontend Developer</h1>
          <p className="header-desc">
            My name is Tuan as nick name Evondev. I am currently a{" "}
            <strong>Frontend Developer</strong>, a <strong>Blogger</strong> and{" "}
            <strong>Youtuber </strong>
            with all brands <strong>Evondev</strong>. I'm working almost about
            coding user interface with HTML CSS & JS.
          </p>
        </div>
        <div className="header-me">
          <img src="/images/me.png" alt="evondev" className="header-me-image" />
        </div>
      </div>
    </AboutHeaderStyles>
  );
};

export default AboutHeader;
