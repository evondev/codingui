import React from "react";
import { FooterStyles } from "../styles/FooterStyles";

const Footer = () => {
  return (
    <FooterStyles>
      <div className="container">
        Development by{" "}
        <a
          href="https://www.youtube.com/channel/UC8vjHOEYlnVTqAgE6CFDm_Q"
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
