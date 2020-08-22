import React from "react";
import { FooterStyles } from "../styles/FooterStyles";

const Footer = () => {
  return (
    <FooterStyles>
      <div className="container">
        Development by Evondev with <i className="fa fa-heart heart"></i>{" "}
        &copy;&nbsp;
        {new Date().getFullYear()}
      </div>
    </FooterStyles>
  );
};

export default Footer;
