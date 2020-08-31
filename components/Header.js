import React from "react";
import { HeaderStyles } from "../styles/HeaderStyles";

const Header = () => {
  return (
    <HeaderStyles>
      <div className="container">
        <h1 className="logo">{`<codingui/>`}</h1>
        <p className="slogan">Just simple place to share a lot of free UIs</p>
      </div>
    </HeaderStyles>
  );
};

export default Header;
