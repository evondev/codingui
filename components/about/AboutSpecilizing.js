import React from "react";
import { AboutSpecilizingStyles } from "./styles/AboutSpecilizingStyles";

const AboutSpecilizing = () => {
  return (
    <AboutSpecilizingStyles>
      <div className="container">
        <div className="specilize-box">
          <h2 className="specilize-heading">Specilizing In</h2>
          <p className="specilize-desc">
            These things that I always work with everyday and I love them. I
            just know a little but strong enough to make beauty website.
          </p>
        </div>
        <div className="specilize-list">
          <div className="specilize-item html">
            <i className="fab fa-html5"></i>
          </div>
          <div className="specilize-item css">
            <i className="fab fa-css3-alt"></i>
          </div>
          <div className="specilize-item js">
            <i className="fab fa-js"></i>
          </div>
          <div className="specilize-item sass">
            <i className="fab fa-sass"></i>
          </div>
          <div className="specilize-item gulp">
            <i className="fab fa-gulp"></i>
          </div>
          <div className="specilize-item react">
            <i className="fab fa-react"></i>
          </div>
          <div className="specilize-item codepen">
            <i className="fab fa-codepen"></i>
          </div>
          <div className="specilize-item github">
            <i className="fab fa-github"></i>
          </div>
        </div>
      </div>
    </AboutSpecilizingStyles>
  );
};

export default AboutSpecilizing;
