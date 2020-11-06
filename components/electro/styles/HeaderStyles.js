import styled from "styled-components";
export const HeaderStyles = styled.header`
  height: 100vh;
  min-height: 950px;
  background-image: var(--linear);
  .header {
    &-top {
      padding: 30px 0;
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
    }
  }
  .header-content {
    color: white;
    width: 100%;
    padding-top: 245px;
    &-product {
      position: absolute;
      right: 0;
      top: 50%;
      transform: translate(100px, -50%);
    }
    &-category {
      font-size: 14px;
      text-transform: uppercase;
      margin-bottom: 15px;
      font-weight: 500;
      display: inline-block;
    }
    &-heading {
      font-weight: bold;
      font-size: 60px;
      margin-bottom: 15px;
    }
    &-title {
      font-size: 200px;
      margin-bottom: 40px;
    }
    &-inner {
      display: flex;
      align-items: center;
      justify-content: space-between;
      position: relative;
    }
    &-btn {
      color: white;
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

  @media screen and (max-width: 1600px) {
  }
`;
