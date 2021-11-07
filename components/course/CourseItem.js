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
    padding: 30px;
    display: flex;
    flex-direction: column;
  }
  .course-name {
    color: #332a2a;
    font-weight: 600;
    font-size: 18px;
    line-height: 1.5;
    margin-bottom: 10px;
  }
  .course-meta {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 40px;
  }
  .course-price {
    color: var(--green);
    font-weight: 600;
    font-size: 25px;
  }
  .course-coupon .text {
    font-weight: 300;
    font-size: 14px;
    color: #aeaeae;
    margin-right: 5px;
  }
  .course-coupon .coupon {
    font-weight: bold;
    color: #fe8b78;
    font-size: 20px;
  }
  .course-buy {
    width: 100%;
    padding: 0 15px;
    height: 55px;
    color: white;
    font-size: 18px;
    font-weight: 600;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: auto;
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
          bắt đầu
        </h3>
        <div className="course-meta">
          <span className="course-price">899.000đ</span>
          <p className="course-coupon">
            <span className="text">Coupon:</span>
            <span className="coupon">EVONTET</span>
          </p>
        </div>
        <a
          href="https://evondev.com/khoa-hoc-html-css-co-ban"
          target="_blank"
          rel="noopener noreferrer"
          className="course-buy course-buy--primary"
        >
          Mua ngay bây giờ
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
        <span className="course-label course-label--new">New</span>
      </div>
      <div className="course-content">
        <h3 className="course-name">
          Khoá học hướng dẫn cắt PSD sang HTML CSS toàn tập với Gulp, Pug, Sass
        </h3>
        <div className="course-meta">
          <span className="course-price">849.000đ</span>
          <p className="course-coupon">
            <span className="text">Coupon:</span>
            <span className="coupon">PSD100</span>
          </p>
        </div>
        <a
          href="https://evondev.com/khoa-hoc-huong-dan-cat-psd"
          target="_blank"
          rel="noopener noreferrer"
          className="course-buy course-buy--secondary"
        >
          Đăng ký luôn
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
          Khoá học Javascript từ cơ bản tới nâng cao dễ dàng dành cho người mới
        </h3>
        <div className="course-meta">
          <span className="course-price">1.499.000đ</span>
          <p className="course-coupon">
            <span className="text">Coupon:</span>
            <span className="coupon">EVONJS15</span>
          </p>
        </div>
        <a
          href="https://evondev.com/khoa-hoc-js-co-ban"
          target="_blank"
          rel="noopener noreferrer"
          className="course-buy course-buy--third"
        >
          Lượm ngay đi
        </a>
      </div>
    </CourseItemStyles>
  );
};

export { CourseItem1, CourseItem2, CourseItem3 };
