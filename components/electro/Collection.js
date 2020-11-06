import React from "react";
import Image from "./Image";
import { CollectionStyles } from "./styles/CollectionStyles";
import { ProductListStyles } from "./styles/ProductListStyles";

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
          <div className="product-item">
            <div className="product-media">
              <Image image="img-bag.jpg" className="product-image"></Image>
              <div className="product-action">
                <div className="product-action-item">
                  <i className="fal fa-shopping-bag"></i>
                </div>
                <div className="product-action-item">
                  <i className="fal fa-heart"></i>
                </div>
              </div>
              <span className="product-label product-label--sale">Sale</span>
            </div>
            <div className="product-content">
              <h3 className="product-name">Mango women's bag</h3>
              <div className="product-price">
                <span className="product-price-sale">$199.00</span>
                <span className="product-price-main">$230.00</span>
              </div>
            </div>
          </div>
          <div className="product-item">
            <div className="product-media">
              <Image image="img-bag2.jpg" className="product-image"></Image>
              <div className="product-action">
                <div className="product-action-item">
                  <i className="fal fa-shopping-bag"></i>
                </div>
                <div className="product-action-item">
                  <i className="fal fa-heart"></i>
                </div>
              </div>
            </div>
            <div className="product-content">
              <h3 className="product-name">Mango women's bag</h3>
              <div className="product-price">
                <span className="product-price-sale">$199.00</span>
                <span className="product-price-main">$230.00</span>
              </div>
            </div>
          </div>
          <div className="product-item">
            <div className="product-media">
              <Image image="img-bag3.jpg" className="product-image"></Image>
              <div className="product-action">
                <div className="product-action-item">
                  <i className="fal fa-shopping-bag"></i>
                </div>
                <div className="product-action-item">
                  <i className="fal fa-heart"></i>
                </div>
              </div>
              <span className="product-label product-label--hot">Hot</span>
            </div>
            <div className="product-content">
              <h3 className="product-name">Mango women's bag</h3>
              <div className="product-price">
                <span className="product-price-sale">$199.00</span>
                <span className="product-price-main">$230.00</span>
              </div>
            </div>
          </div>
          <div className="product-item">
            <div className="product-media">
              <Image image="img-glass.jpg" className="product-image"></Image>
              <div className="product-action">
                <div className="product-action-item">
                  <i className="fal fa-shopping-bag"></i>
                </div>
                <div className="product-action-item">
                  <i className="fal fa-heart"></i>
                </div>
              </div>
            </div>
            <div className="product-content">
              <h3 className="product-name">Mango women's bag</h3>
              <div className="product-price">
                <span className="product-price-sale">$199.00</span>
                <span className="product-price-main">$230.00</span>
              </div>
            </div>
          </div>
          <div className="product-item">
            <div className="product-media">
              <Image image="img-glasses.jpg" className="product-image"></Image>
              <div className="product-action">
                <div className="product-action-item">
                  <i className="fal fa-shopping-bag"></i>
                </div>
                <div className="product-action-item">
                  <i className="fal fa-heart"></i>
                </div>
              </div>
            </div>
            <div className="product-content">
              <h3 className="product-name">Mango women's bag</h3>
              <div className="product-price">
                <span className="product-price-sale">$199.00</span>
                <span className="product-price-main">$230.00</span>
              </div>
            </div>
          </div>
          <div className="product-item">
            <div className="product-media">
              <Image image="img-glass1.jpg" className="product-image"></Image>
              <div className="product-action">
                <div className="product-action-item">
                  <i className="fal fa-shopping-bag"></i>
                </div>
                <div className="product-action-item">
                  <i className="fal fa-heart"></i>
                </div>
              </div>
              <span className="product-label product-label--new">New</span>
            </div>
            <div className="product-content">
              <h3 className="product-name">Mango women's bag</h3>
              <div className="product-price">
                <span className="product-price-sale">$199.00</span>
                <span className="product-price-main">$230.00</span>
              </div>
            </div>
          </div>
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
