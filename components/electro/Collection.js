import React from "react";
import Image from "./Image";
import { CollectionStyles } from "./styles/CollectionStyles";
import { ProductListStyles } from "./styles/ProductListStyles";
import ProductItem from "./ProductItem";

const Collection = () => {
  return (
    <CollectionStyles>
      <Image
        image="img-big-headphone-white.png"
        className="collection-image-headphone"
      ></Image>
      <div className="container collection-container">
        <div className="text-boxed">
          <h2 className="text-heading">Latest Collections</h2>
          <span className="text-desc">
            Samsa will only charge a fee if you make a profit
          </span>
        </div>
        <ProductListStyles className="product-list">
          <ProductItem image="img-sound.jpg" salePrice="230.00"></ProductItem>
          <ProductItem image="img-mouse.jpg" label="new"></ProductItem>
          <ProductItem image="img-vr-glasses.jpg" label="hot"></ProductItem>
          <ProductItem image="img-sony.jpg"></ProductItem>
          <ProductItem image="img-headphone.jpg" label="sale"></ProductItem>
          <ProductItem image="img-xiaomi.jpg"></ProductItem>
        </ProductListStyles>
      </div>
      <Image
        image="img-game-white.png"
        className="collection-image-game"
      ></Image>
    </CollectionStyles>
  );
};

export default Collection;
