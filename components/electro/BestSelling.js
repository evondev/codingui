import React from "react";
import { BestSellingStyles } from "./styles/BestSellingStyles";

const BestSelling = () => {
  return (
    <BestSellingStyles>
      <div className="container best-container">
        <h2 className="heading-opacity best-heading">Watch</h2>
        <div className="best-media">
          <img
            src="/images/electro/home-gadget-about-1.png"
            alt=""
            className="best-media-man"
          />
          <img
            src="/images/electro/home-gadget-vr_small-1.png"
            alt=""
            className="best-media-vr"
          />
        </div>
        <div className="best-content">
          <h3 className="text-heading">Best Selling Product of the month</h3>
          <p className="text-desc best-desc">
            Lorem ipsum dolor sit amet, consectetur adipi sing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
          <a href="#" className="btn btn--gradient">
            Go to Shop
          </a>
        </div>
      </div>
      <div className="guarantee container">
        <div className="guarantee-item">
          <img
            src="/images/electro/icon-policy.png"
            alt=""
            className="guarantee-icon"
          />
          <h4 className="guarantee-title">30Days return policy</h4>
          <span className="guarantee-desc">Sure moneyback</span>
        </div>
        <div className="guarantee-item">
          <img
            src="/images/electro/icon-boxed.png"
            alt=""
            className="guarantee-icon"
          />
          <h4 className="guarantee-title">Exclusive Products</h4>
          <span className="guarantee-desc">Premium Products</span>
        </div>
        <div className="guarantee-item">
          <img
            src="/images/electro/icon-express.png"
            alt=""
            className="guarantee-icon"
          />
          <h4 className="guarantee-title">Express Delivery</h4>
          <span className="guarantee-desc">Sure moneyback</span>
        </div>
        <div className="guarantee-item">
          <img
            src="/images/electro/icon-card.png"
            alt=""
            className="guarantee-icon"
          />
          <h4 className="guarantee-title">Exclusive Products</h4>
          <span className="guarantee-desc">Premium Products</span>
        </div>
      </div>
    </BestSellingStyles>
  );
};

export default BestSelling;
