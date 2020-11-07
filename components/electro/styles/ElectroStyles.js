import styled from "styled-components";
export const ElectroStyles = styled.div`
  --primary-color: #f86f64;
  --secondary-color: #fc5492;
  --danger-color: #ff1110;
  --success-color: #00d310;
  --warning-color: #ff8a01;
  --gray-dark: #101010;
  --gray-darker: #07112d;
  --linear: linear-gradient(
    to right bottom,
    var(--primary-color),
    var(--secondary-color)
  );
  --linear-2: linear-gradient(to right, #1cd9a6, #59acda);
  --linear-3: linear-gradient(to right, #7852ff, #8b62ff);
  * {
    outline: none;
    box-sizing: border-box;
  }
  background-color: white;
  margin-left: auto;
  margin-right: auto;
  max-width: 1920px;
  min-height: 100vh;
  overflow-x: hidden;
  & + .back-to-top {
    display: none;
  }
  .container {
    margin-left: auto;
    margin-right: auto;
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
    line-height: 1.4;
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
    font-size: 200px;
    white-space: nowrap;
    user-select: none;
    pointer-events: none;
    z-index: 0;
    &--small {
      font-size: 100px;
    }
  }
  .btn {
    display: inline-block;
    text-align: center;
    padding: 17.5px 40px;
    cursor: pointer;
    outline: none;
    border-radius: 100px;
    font-size: 15px;
    font-weight: 500;
    transition: all 0.2s linear;
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
    &--white {
      background-color: white;
    }
  }

  .countdown {
    display: inline-grid;
    grid-template-columns: repeat(7, auto);
    grid-column-gap: 15px;
    &-item {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      text-transform: uppercase;
    }
    &-number {
      font-size: 44px;
      margin-bottom: 15px;
      font-weight: 600;
    }
    &-text {
      letter-spacing: 0.15px;
      font-weight: 500;
    }
    &-conlon {
      font-weight: 600;
      font-size: 44px;
    }
  }

  .menu {
    &-list {
      display: flex;
      align-items: center;
    }
    &-item {
      margin-left: 40px;
    }
    &-link {
      color: white;
      font-weight: 500;
      font-size: 15px;
    }
    &-tool {
      display: flex;
      align-items: center;
      color: white;
      font-size: 22px;
    }
    &-cart {
      position: relative;
      margin: 0 20px;
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
    &-toggle {
      display: none;
    }
  }
  @media screen and (max-width: 1023px) {
    .menu-toggle {
      font-size: 25px;
      color: white;
      display: block;
    }
    .menu-list {
      display: none;
    }
    .text-heading {
      font-size: 30px;
      margin-bottom: 5px;
    }
    .text-desc {
      font-size: 14px;
    }
    .text-boxed {
      margin-bottom: 45px;
    }
    .countdown {
      &-number,
      &-conlon {
        font-size: 34px;
      }
      &-number {
        margin-bottom: 10px;
      }
      &-text {
        font-size: 12px;
      }
    }
  }
`;
