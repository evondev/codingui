import React from "react";
import Image from "./Image";
import ProductItem from "./ProductItem";
import { ProductListStyles } from "./styles/ProductListStyles";
import { SellerProductStyles } from "./styles/SellerProductStyles";

const SellerProduct = () => {
  return (
    <SellerProductStyles>
      <div className="container seller-container">
        <div className="text-boxed">
          <h2 className="text-heading">Best seller products</h2>
          <span className="text-desc">
            Samsa will only charge a fee if you make a profit
          </span>
        </div>
        <ProductListStyles className="product-list product-list--4">
          <ProductItem image="img-sound.jpg" label="new"></ProductItem>
          <ProductItem image="img-mouse.jpg"></ProductItem>
          <ProductItem image="img-vr-glasses.jpg" label="sale"></ProductItem>
          <ProductItem image="img-apple-watch.jpg" label="hot"></ProductItem>
          <ProductItem image="img-sound.jpg" label="new"></ProductItem>
          <ProductItem image="img-mouse.jpg"></ProductItem>
          <ProductItem image="img-vr-glasses.jpg" label="sale"></ProductItem>
          <ProductItem image="img-apple-watch.jpg" label="hot"></ProductItem>
        </ProductListStyles>
      </div>
    </SellerProductStyles>
  );
};

export default SellerProduct;
