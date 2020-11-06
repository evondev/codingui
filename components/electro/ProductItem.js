import React from "react";
import Image from "./Image";

const ProductItem = ({
  image,
  name = "Smart speaker",
  price = "199.00",
  salePrice,
  label = "",
}) => {
  return (
    <div className="product-item">
      <div className="product-media">
        <Image image={image} className="product-image"></Image>
        <div className="product-action">
          <div className="product-action-item">
            <i className="fal fa-shopping-bag"></i>
          </div>
          <div className="product-action-item">
            <i className="fal fa-heart"></i>
          </div>
        </div>
        {label === "new" && (
          <span className="product-label product-label--new">New</span>
        )}
        {label === "hot" && (
          <span className="product-label product-label--hot">hot</span>
        )}
        {label === "sale" && (
          <span className="product-label product-label--sale">sale</span>
        )}
      </div>
      <div className="product-content">
        <h3 className="product-name">{name}</h3>
        <div className="product-price">
          <span className="product-price-sale">${price}</span>
          {salePrice && (
            <span className="product-price-main">${salePrice}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
