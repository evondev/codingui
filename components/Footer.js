import React from "react";
import { FooterStyles } from "../styles/FooterStyles";

const Footer = () => {
  return (
    <FooterStyles>
      <div className="container">
        Development by{" "}
        <a
          href="https://fb.com/tuan.trananh.0509"
          target="_blank"
          rel="noopener noreferrer"
        >
          Evondev
        </a>{" "}
        with <i className="fa fa-heart heart"></i> &copy;&nbsp;
        {new Date().getFullYear()}
      </div>
    </FooterStyles>
  );
};

export default Footer;
