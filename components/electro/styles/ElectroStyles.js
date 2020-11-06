import styled from "styled-components";
export const ElectroStyles = styled.div`
  --primary-color: #f86f64;
  --secondary-color: #fc5492;
  --danger-color: #ff1110;
  --success-color: #00d310;
  --warning-color: #ff8a01;
  --gray-dark: #101010;
  --linear: linear-gradient(
    to right bottom,
    var(--primary-color),
    var(--secondary-color)
  );
  --linear-2: linear-gradient(to right, #1cd9a6, #59acda);
  * {
    outline: none;
    box-sizing: border-box;
  }
  background-color: white;
  margin: 0 auto;
  max-width: 1920px;
  min-height: 100vh;
  & + .back-to-top {
    display: none;
  }
  .container {
    margin: 0 auto;
    max-width: 1210px;
    padding-left: 20px;
    padding-right: 20px;
  }
  .text-boxed {
    text-align: center;
    margin-bottom: 75px;
  }
  .text-heading {
    font-size: 36px;
    margin-bottom: 15px;
    font-weight: 500;
    color: #051441;
    line-height: 1.2;
  }
  .text-desc {
    font-size: 15px;
    color: #677294;
    line-height: 1.6;
  }

  .heading-opacity {
    font-weight: 900;
    text-transform: uppercase;
    line-height: 1;
  }
  .btn {
    display: inline-block;
    text-align: center;
    padding: 20px 40px;
    cursor: pointer;
    outline: none;
    border-radius: 100px;
    font-size: 15px;
    font-weight: 500;
    &--transparent {
      background-color: transparent;
    }
    &--primary {
      background-color: var(--primary-color);
      color: white;
    }
    &--outline {
      border: 1px solid currentColor;
    }
    &--gradient {
      background-image: var(--linear);
      color: white;
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
