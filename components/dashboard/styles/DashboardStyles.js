import styled from "styled-components";
export const DashboardStyles = styled.div`
  --background: #231c37;
  --gradient: linear-gradient(to right, #c68cfe, #7c88ff, #68e3ee);
  background-color: var(--background);
  width: 100%;
  min-height: 100vh;
  padding: 5rem;
  & + .back-to-top {
    display: none;
  }
  .logo {
    margin-bottom: 70px;
    align-self: center;
  }
  .dashboard- {
    &wrapper {
      width: 100%;
      height: 100%;
      background-color: #443765;
      border-radius: 40px;
      overflow: hidden;
      display: grid;
      grid-template-columns: 1.2fr 4fr;
    }
    &sidebar {
      padding: 70px 20px;
      background-color: #362f57;
      display: flex;
      flex-direction: column;
    }
    &main {
      padding: 50px;
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-column-gap: 30px;
    }
    &tool {
      display: grid;
      grid-column-gap: 10px;
      grid-template-columns: 1fr 60px 60px;
      margin-bottom: 45px;
    }
    &tool-item {
      padding: 20px;
      border-radius: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-size: 20px;
      background-color: #3c315b;
      position: relative;
      flex-shrink: 0;
      width: 60px;
    }
  }
  .menu- {
    &list {
      width: 100%;
    }
    &item {
      padding: 20px;
      border-radius: 2rem;
      color: white;
      display: flex;
      align-items: center;
      cursor: pointer;
      transition: all 0.2s linear;
      font-weight: 500;
      &:hover {
        background-color: #2b294a;
      }
    }
    &icon {
      width: 30px;
      margin-right: 15px;
    }
    &arrow {
      margin-left: auto;
      opacity: 0;
      visibility: hidden;
      transition: all 0.2s ease;
    }
  }

  .noti {
    &-count {
      position: absolute;
      top: 0;
      right: 0;
      width: 30px;
      height: 30px;
      border-radius: 10px;
      background-color: #f578dd;
      font-size: 12px;
      font-weight: 500;
      display: flex;
      align-items: center;
      justify-content: center;
      transform: translate(20%, -20%);
      z-index: 2;
    }
  }

  .search {
    background-color: #4a4172;
    border-radius: 20px;
    padding: 15px;
    display: flex;
    align-items: center;
    width: 100%;
    &-submit {
      border: 0;
      padding: 0;
      background-color: transparent;
      color: white;
      font-size: 20px;
    }
    &-input {
      border: 0;
      padding: 0;
      padding-right: 10px;
      color: white;
      font-size: 16px;
      font-family: "Poppins", sans-serif;
      font-weight: 500;
      background-color: transparent;
      width: 100%;
      flex: 1;
      &::-webkit-input-placeholder {
        color: #787098;
      }
      &::-moz-input-placeholder {
        color: #787098;
      }
    }
  }

  .balance {
    padding: 30px;
    border-radius: 20px;
    background-image: linear-gradient(to right bottom, #9b86f9, #a67cf6);
    color: white;
    display: flex;
    justify-content: space-between;
    &-heading {
      font-size: 18px;
      font-weight: 600;
      margin-bottom: 20px;
    }
    &-money {
      font-weight: 600;
      font-size: 50px;
      margin-bottom: 20px;
    }
    &-price,
    &-price-item {
      display: flex;
      align-items: center;
    }
    &-price-item {
      margin-right: 20px;
      font-weight: 500;
      font-size: 16px;
    }
    &-arrow {
      width: 30px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 10px;
      background-color: #8f49bb;
      border-radius: 10px;
      font-size: 14px;
    }
  }

  .transfer {
    width: 100%;
    padding: 30px;
    background-color: #372e55;
    border-radius: 20px;
    position: relative;
    padding-top: 185px;
    margin-top: 110px;
    &-heading {
      font-size: 30px;
      font-weight: bold;
      text-align: center;
      color: white;
      margin-bottom: 20px;
    }
    &-total {
      display: flex;
      align-items: center;
      justify-content: space-between;
      color: white;
      font-weight: 600;
      margin-bottom: 25px;
      position: relative;
      &:before {
        content: "";
        width: 1px;
        height: 100%;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        background-color: white;
      }
      &-item {
        width: 50%;
        text-align: center;
      }
    }
    &-send {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      text-align: center;
      padding: 20px;
      border-radius: 20px;
      color: white;
      background-image: var(--gradient);
      font-weight: 600;
      i {
        margin-right: 10px;
        font-size: 20px;
      }
    }
  }
  .tab {
    display: flex;
    border-bottom: 4px solid #42385e;
    margin-bottom: 45px;
    &-item {
      width: 50%;
      padding: 25px;
      font-weight: 600;
      color: white;
      text-align: center;
      position: relative;
      &.is-active {
        &:before {
          opacity: 1;
          visibility: visible;
        }
      }
      &:before {
        content: "";
        width: 100%;
        height: 4px;
        background-image: linear-gradient(to right, #c68cfe, #7c88ff, #68e3ee);
        position: absolute;
        bottom: 0;
        left: 0;
        transform: translateY(100%);
        opacity: 0;
        visibility: hidden;
        transition: all 0.2s ease;
      }
    }
  }

  .form {
    &-label {
      font-weight: 600;
      display: inline-block;
      color: white;
      margin-bottom: 15px;
    }
    &-input {
      font-weight: 600;
      border: 0;
      border-radius: 20px;
      padding: 15px;
      background-color: #403760;
      display: block;
      width: 100%;
      color: white;
      &.is-center {
        text-align: center;
      }
    }
    &-notice {
      font-size: 12px;
      text-align: center;
      color: #5a5072;
      margin-top: 20px;
      font-weight: 600;
    }
    &-group {
      margin-bottom: 40px;
    }
    &-row {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(40%, 1fr));
      grid-column-gap: 15px;
    }
  }

  .card {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, -50%);
    margin: 0 auto;
    width: 75%;
    &-item {
      padding: 25px;
      border-radius: 20px;
      background-image: linear-gradient(
        to right bottom,
        #68e3ee,
        #f575da,
        #8c87ff,
        #d3b0e9
      );
      color: white;
    }
    &-header {
      margin-bottom: 25px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      &-brand {
        width: 50px;
        height: 40px;
        border-radius: 15px;
        font-size: 30px;
        background-color: rgba(255, 255, 255, 0.3);
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
    &-number {
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-weight: 600;
      margin-bottom: 40px;
    }
    &-footer {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    &-money {
      font-size: 30px;
      font-weight: 600;
    }
    &-circle {
      width: 50px;
      height: 50px;
      border-radius: 50px;
      position: relative;
      &:before,
      &:after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: white;
        opacity: 0.5;
        border-radius: inherit;
        transform: translateX(-50%);
      }
      &:after {
        transform: translateX(0%);
      }
    }
    &-navigation {
      display: flex;
      align-items: center;
      justify-content: center;
      &-item {
        width: 10px;
        height: 10px;
        border-radius: 10px;
        background-color: white;
        margin: 0 5px;
        opacity: 0.25;
        margin-top: 25px;
        &.is-active {
          width: 50px;
          opacity: 1;
        }
      }
    }
  }
`;
