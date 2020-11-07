import styled from "styled-components";
export const HeaderStyles = styled.header`
  min-height: 950px;
  padding-bottom: 100px;
  background-image: var(--linear);
  position: relative;
  .header {
    &-top {
      padding: 35px 0;
    }
    &-top-inner {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    &-dash {
      position: absolute;
      top: 50%;
      left: 0;
      transform: translate(-50%, -50%);
      pointer-events: none;
    }
  }
  .header-content {
    color: white;
    width: 100%;
    &-product {
      position: relative;
      transform: translateX(-150px);
      z-index: 2;
    }
    &-category {
      font-size: 14px;
      letter-spacing: 1.4px;
      text-transform: uppercase;
      margin-bottom: 15px;
      display: inline-block;
    }
    &-heading {
      font-weight: bold;
      font-size: 60px;
      line-height: 1.3;
      margin-bottom: 15px;
    }
    &-title {
      margin-bottom: 20px;
      color: rgba(255, 255, 255, 0.1);
    }
    &-inner {
      display: flex;
      align-items: center;
      justify-content: space-between;
      position: relative;
    }
    &-btn {
      color: white;
      &:hover {
        color: var(--gray-dark);
        background-color: white;
        border-color: white;
      }
    }
  }
  .header-line {
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
    text-align: right;
    &-item {
      height: 1px;
      width: 15px;
      background-color: white;
      display: block;
      margin-left: auto;
      margin-bottom: 5px;
      opacity: 0.5;
      cursor: pointer;
      &.is-active {
        width: 30px;
        opacity: 1;
      }
    }
  }

  @media screen and (max-width: 1023px) {
    min-height: unset;
    overflow: hidden;
    .header-dash {
      max-width: 50%;
    }
    .header-content {
      padding-top: 50px;
    }
    .header-top {
      padding: 25px 0;
    }
    .header-content-heading {
      font-size: 35px;
    }
    .header-content-title {
      font-size: 80px;
    }
    .header-content-product {
      position: absolute;
      right: 0;
      bottom: 0;
      transform: none;
      max-width: 250px;
      transform: translateY(70px);
    }
  }
`;
