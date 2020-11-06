import React from "react";

const Image = ({ image, className, alt }) => {
  return (
    <img src={`/images/electro/${image}`} className={className} alt={alt} />
  );
};

export default Image;
