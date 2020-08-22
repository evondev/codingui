import React from "react";
import Template from "./Template";

const Base = () => {
  return (
    <Template
      title="Base code"
      desc="Những thứ cơ bản mình dùng trong dự án này như reset css(Meyerweb), đơn vị rem, box-sizing: border-box, font chữ là Montserrat... để các bạn biết thiết lập trước khi dùng, để lỡ các bạn copy về dùng rồi bảo sao mà không giống ^^. Dự án này mình phát triển dựa trên NextJS và deploy bằng Vercel."
      html={``}
      css={`
        /* reset css */
        html {
          font-size: 62.5%; /* để sử dụng đơn vị rem */
        }
      `}
    ></Template>
  );
};

export default Base;
