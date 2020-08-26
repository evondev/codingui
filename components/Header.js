import React from "react";
import { HeaderStyles } from "../styles/HeaderStyles";

const Header = () => {
  return (
    <HeaderStyles>
      <div className="container">
        <h1 className="logo">{`<codingui/>`}</h1>
      </div>
    </HeaderStyles>
  );
};

export default Header;
