import React from "react";
import Navigation from "./Navigation";
import { HeaderStyles } from "./styles/HeaderStyles";

const Header = () => {
  return (
    <HeaderStyles className="header">
      <div className="header-top">
        <div className="container header-top-inner">
          <a href="index.html" className="logo">
            <img
              src="/images/electro/logo2-1.png"
              alt="electro"
              className="logo-image"
            />
          </a>
          <Navigation></Navigation>
        </div>
      </div>
      <div className="header-content">
        <img
          src="/images/electro/pattern_bg.png"
          alt=""
          className="header-dash"
        />
        <div className="container header-content-inner">
          <div className="header-content-left">
            <span className="header-content-category">Digital device</span>
            <h2 className="header-content-heading">Apple Watch</h2>
            <h3 className="header-content-title heading-opacity">Watch</h3>
            <a
              href="#"
              className="header-content-btn btn btn--transparent btn--outline"
            >
              Go to Shop
            </a>
          </div>
          <img
            src="/images/electro/apple-watch-1.png"
            alt="apple watch"
            className="header-content-product"
          />
        </div>
        <div className="header-line">
          <span className="header-line-item is-active"></span>
          <span className="header-line-item"></span>
          <span className="header-line-item"></span>
        </div>
      </div>
    </HeaderStyles>
  );
};

export default Header;
