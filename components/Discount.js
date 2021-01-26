import React from "react";
import Template from "./Template";

const DiscountUI = () => {
  return (
    <>
      <Template
        className="discount"
        hideCode={true}
        source="fixed"
        author="evondev"
        html={`
        <a href="https://evondev.com/khoa-hoc-html-css" target="_blank" class="discount-layout">
          <div class="discount-media">
            <img src="/images/banner.png" alt="htmlcss course" class="discount-banner"/>
            <h4 class="discount-title">Khoá học HTML CSS</h4>
          </div>
          <div class="discount-info">
            <h5 class="discount-number">449.000 vnđ</h5>
            <div class="discount-promote">
              <span class="discount-text">Mã giảm giá:</span>
              <h6 class="discount-code">EVONTET</h6>
            </div>
            <button class="discount-buy">Nhấn để mua</button>
          </div>

        </a>
        `}
      ></Template>
    </>
  );
};

export { DiscountUI };
