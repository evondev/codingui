import React from "react";
import { SavedStyles } from "./styles/SavedStyles";
import Image from "./Image";

const Saved = () => {
  return (
    <SavedStyles className="saved">
      <h2 className="heading-opacity">Apple watch</h2>
      <div className="container saved-container">
        <Image image="img-apple-watch.png" className="saved-image"></Image>
        <div className="saved-content">
          <Image
            image="icon-percent.png"
            className="saved-image-percent"
          ></Image>
          <h3 className="text-heading">
            Enjoy Music & Save 50% off on Shopping Online
          </h3>
          <ul className="saved-list">
            <li className="saved-item">Samsa will only charge a fee</li>
            <li className="saved-item">Charge a fee if you make a profit</li>
          </ul>
          <a href="#" className="btn btn--gradient">
            Go to Shop
          </a>
        </div>
      </div>
    </SavedStyles>
  );
};

export default Saved;
