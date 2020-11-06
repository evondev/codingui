import React from "react";
import { BrandsStyles } from "./styles/BrandsStyles";
import Image from "./Image";

const Brands = () => {
  return (
    <BrandsStyles>
      <div className="container brand">
        <div className="text-boxed">
          <h2 className="text-heading">
            Order now for an express delivery of brands products
          </h2>
        </div>
        <div className="brand-list">
          <div className="brand-item">
            <Image image="logo_01.png" className="brand-logo"></Image>
          </div>
          <div className="brand-item">
            <Image image="logo_02.png" className="brand-logo"></Image>
          </div>
          <div className="brand-item">
            <Image image="logo_03.png" className="brand-logo"></Image>
          </div>
          <div className="brand-item">
            <Image image="logo_04.png" className="brand-logo"></Image>
          </div>
          <div className="brand-item">
            <Image image="logo_05.png" className="brand-logo"></Image>
          </div>
          <div className="brand-item">
            <Image image="logo_03.png" className="brand-logo"></Image>
          </div>
          <div className="brand-item">
            <Image image="logo_04.png" className="brand-logo"></Image>
          </div>
          <div className="brand-item">
            <Image image="logo_05.png" className="brand-logo"></Image>
          </div>
        </div>
      </div>
    </BrandsStyles>
  );
};

export default Brands;
