import React from "react";
import { HeaderStyles } from "../styles/HeaderStyles";

const Header = () => {
  return (
    <HeaderStyles>
      <div className="container">
        <h1 className="logo">{`<UI/>`}</h1>
        <p className="slogan">
          Just a simple website to share a lot of UIs with Code includes
        </p>
      </div>
    </HeaderStyles>
  );
};

export default Header;
