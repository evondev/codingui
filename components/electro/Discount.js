import React from "react";
import { DiscountStyles } from "./styles/DiscountStyles";
import Image from "./Image";

const Discount = () => {
  return (
    <DiscountStyles>
      <div className="container discount-container">
        <div className="discount-content">
          <h4 className="discount-caption">Discount</h4>
          <h3 className="discount-title">
            30<sup>%</sup> Off for Sony
          </h3>
          <div className="countdown">
            <div className="countdown-item">
              <span className="countdown-number">01</span>
              <span className="countdown-text">Days</span>
            </div>
            <span className="countdown-conlon">:</span>
            <div className="countdown-item">
              <span className="countdown-number">52</span>
              <span className="countdown-text">Hours</span>
            </div>
            <span className="countdown-conlon">:</span>
            <div className="countdown-item">
              <span className="countdown-number">01</span>
              <span className="countdown-text">Mins</span>
            </div>
            <span className="countdown-conlon">:</span>
            <div className="countdown-item">
              <span className="countdown-number">14</span>
              <span className="countdown-text">Secs</span>
            </div>
          </div>
        </div>
        <div className="discount-media">
          <h2 className="heading-opacity">Drone</h2>
          <Image
            image="img-sony-headphone.png"
            className="discount-image"
          ></Image>
        </div>
      </div>
    </DiscountStyles>
  );
};

export default Discount;
