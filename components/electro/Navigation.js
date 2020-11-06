import React from "react";

const Navigation = () => {
  return (
    <nav className="menu">
      <ul className="menu-list">
        <li className="menu-item">
          <a href="#" className="menu-link">
            Home
          </a>
        </li>
        <li className="menu-item">
          <a href="#" className="menu-link">
            About Us
          </a>
        </li>
        <li className="menu-item">
          <a href="#" className="menu-link">
            Services
          </a>
        </li>
        <li className="menu-item">
          <a href="#" className="menu-link">
            News
          </a>
        </li>
        <li className="menu-item">
          <a href="#" className="menu-link">
            Page
          </a>
        </li>
        <li className="menu-item menu-tool">
          <i className="fal fa-heart menu-icon"></i>
          <div className="menu-cart">
            <i className="fal fa-shopping-bag menu-icon"></i>
            <span className="menu-cart-count">0</span>
          </div>
          <i className="fal fa-search menu-icon"></i>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
