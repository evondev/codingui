import React from "react";
import styled from "styled-components";
const CourseItemStyles = styled.div`
  background-color: #ffffff;
  box-shadow: 0px 4px 16px rgba(215, 215, 215, 0.25) !important;
  border-radius: 8px !important;
  font-family: "Montserrat", sans-serif;
  margin-bottom: 30px !important;
  height: 100%;
  padding: 0 !important;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 767px) {
    margin-bottom: 20px;
  }
  .course-media {
    position: relative;
    padding-top: 56.25%;
    border-radius: inherit;
    overflow: hidden;
  }
  .course-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .course-content {
    padding: 20px;
    display: flex;
    flex-direction: column;
    flex: 1;
  }
  .course-name {
    color: #332a2a;
    font-weight: 600;
    line-height: 1.5;
    margin-bottom: 10px;
    font-size: 16px;
    @media screen and (min-width: 1024px) {
      font-size: 18px;
    }
  }
  .course-meta {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 40px;
    margin-top: auto;
    @media screen and (max-width: 1023.98px) {
      flex-direction: column;
      align-items: flex-start;
      gap: 5px;
      margin-bottom: 15px;
    }
  }
  .course-price {
    color: var(--green);
    font-weight: 500;
    font-size: 20px;
  }
  .course-coupon .text {
    font-weight: 300;
    font-size: 14px;
    color: #aeaeae;
    margin-right: 5px;
  }
  .course-coupon .coupon {
    font-weight: 500;
    color: #fe8b78;
    font-size: 16px;
    @media screen and (min-width: 1024px) {
      font-size: 18px;
    }
  }
  .course-buy {
    width: 100%;
    padding: 0 15px;
    height: 55px;
    color: white;
    font-size: 16px;
    font-weight: 600;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 1023.98px) {
      height: 45px;
    }

    &--primary {
      background: linear-gradient(90.06deg, #f86086 -4.45%, #fe8d77 104.12%);
    }
    &--secondary {
      background: linear-gradient(90.06deg, #2cccff -4.45%, #22dfbf 104.12%);
    }
    &--third {
      background: linear-gradient(90.06deg, #6f5cf1 -4.45%, #fc5776 104.12%);
    }
    &--default {
      background-color: #ccc;
      pointer-events: none;
    }
  }
  .course-label {
    position: absolute;
    right: 20px;
    top: 20px;
    text-transform: uppercase;
    padding: 5px 20px;
    border-radius: 100px;
    font-size: 12px;
    color: white;
    font-weight: bold;
    &--hot {
      background-color: #f86385;
    }
    &--new {
      background-color: var(--green);
    }
  }
  .placeholder-image {
    background-color: #eee;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .placeholder-line {
    height: 20px;
    background-color: #eee;
    width: 100%;
    margin-bottom: 10px;
  }
  .placeholder-price {
    width: 100px;
    margin-bottom: 0;
  }
`;
const CourseItem1 = () => {
  return (
    <CourseItemStyles data-source="course" className="grid-item">
      <div className="course-media">
        <img
          src="/images/html-css-course.jpg"
          alt="html css course"
          className="course-image"
          loading="lazy"
        />
        <span className="course-label course-label--hot">Hot</span>
      </div>
      <div className="course-content">
        <h3 className="course-name">
          Khoá học tự học thiết kế website HTML CSS hiệu quả dành cho người mới
        </h3>
        <div className="course-meta">
          <span className="course-price">899.000đ</span>
          <p className="course-coupon">
            <span className="text">Mã giảm giá:</span>
            <span className="coupon">EVONTET</span>
          </p>
        </div>
        <a
          href="https://evondev.com/khoa-hoc-html-css-co-ban"
          target="_blank"
          rel="noopener noreferrer"
          className="course-buy course-buy--secondary"
        >
          Mua ngay
        </a>
      </div>
    </CourseItemStyles>
  );
};
const CourseItem2 = () => {
  return (
    <CourseItemStyles data-source="course" className="grid-item">
      <div className="course-media">
        <img
          src="/images/html-css-psd-course.png"
          alt="html css course"
          className="course-image"
          loading="lazy"
        />
      </div>
      <div className="course-content">
        <h3 className="course-name">
          Khoá học HTML CSS nâng cao với cắt giao diện từ A đến Z
        </h3>
        <div className="course-meta">
          <span className="course-price">799.000đ</span>
          <p className="course-coupon">
            <span className="text">Mã giảm giá:</span>
            <span className="coupon">PSD100</span>
          </p>
        </div>
        <a
          href="https://evondev.com/khoa-hoc-huong-dan-cat-psd"
          target="_blank"
          rel="noopener noreferrer"
          className="course-buy course-buy--third"
        >
          Nhấn để mua
        </a>
      </div>
    </CourseItemStyles>
  );
};
const CourseItem3 = () => {
  return (
    <CourseItemStyles data-source="course" className="grid-item">
      <div className="course-media">
        <img
          src="/images/js-course.jpg"
          alt="javascript course"
          className="course-image"
          loading="lazy"
        />
      </div>
      <div className="course-content">
        <h3 className="course-name">
          Khoá học Javascript từ cơ bản tới nâng cao dành cho người mới
        </h3>
        <div className="course-meta">
          <span className="course-price">1.099.000đ</span>
          <p className="course-coupon">
            <span className="text">Mã giảm giá:</span>
            <span className="coupon">EVONJS15</span>
          </p>
        </div>
        <a
          href="https://evondev.com/khoa-hoc-js-co-ban"
          target="_blank"
          rel="noopener noreferrer"
          className="course-buy course-buy--primary"
        >
          Sở hữu bây giờ
        </a>
      </div>
    </CourseItemStyles>
  );
};

export { CourseItem1, CourseItem2, CourseItem3 };
