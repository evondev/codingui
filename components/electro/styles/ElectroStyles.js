import styled from "styled-components";
export const ElectroStyles = styled.div`
  --primary-color: #f86f64;
  --secondary-color: #fc5492;
  --linear: linear-gradient(
    to right bottom,
    var(--primary-color),
    var(--secondary-color)
  );
  * {
    outline: none;
    box-sizing: border-box;
  }
  background-color: white;
  margin: 0 auto;
  max-width: 1920px;
  min-height: 100vh;
  .container {
    margin: 0 auto;
    max-width: 1210px;
    padding: 0 20px;
  }
  .heading-opacity {
    font-weight: 900;
    text-transform: uppercase;
    line-height: 1;
    color: rgba(255, 255, 255, 0.1);
  }
  .btn {
    display: inline-block;
    text-align: center;
    padding: 15px 40px;
    cursor: pointer;
    outline: none;
    border-radius: 100px;
    &--transparent {
      background-color: transparent;
    }
    &--outline {
      border: 1px solid currentColor;
    }
  }

  .menu {
    &-list {
      display: flex;
      align-items: center;
    }
    &-item {
      margin-left: 50px;
    }
    &-link {
      color: white;
      font-weight: 500;
    }
    &-tool {
      display: flex;
      align-items: center;
      color: white;
      font-size: 18px;
    }
    &-cart {
      position: relative;
      margin: 0 15px;
    }
    &-cart-count {
      width: 15px;
      height: 15px;
      border-radius: 10px;
      background-color: black;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 10px;
      position: absolute;
      top: 0;
      right: 0;
      transform: translate(50%, -50%);
    }
  }
`;
