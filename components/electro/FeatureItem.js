import React from "react";
import Image from "./Image";

const FeatureItem = ({ category, title, heading, image, background }) => {
  return (
    <div className={`feature-item ${background}`}>
      <h5 className="feature-category">{category}</h5>
      <h3 className="feature-title">{title}</h3>
      <h4 className="feature-heading heading-opacity heading-opacity--small">
        {heading}
      </h4>
      <a href="#" className="feature-more">
        See More
      </a>
      <Image image={image} className="feature-image"></Image>
    </div>
  );
};

export default FeatureItem;
