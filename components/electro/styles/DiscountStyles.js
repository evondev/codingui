import styled from "styled-components";
export const DiscountStyles = styled.section`
  .discount {
    &-container.container {
      padding: 110px 100px;
      background-image: var(--linear-3);
      border-radius: 20px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      position: relative;
      .heading-opacity {
        color: white;
        opacity: 0.1;
        transform: translateX(200px);
      }
    }
    &-content,
    &-media {
      width: 50%;
      color: white;
    }
    &-caption {
      font-size: 14px;
      text-transform: uppercase;
      line-height: 2;
      margin-bottom: 10px;
      font-weight: 500;
      letter-spacing: 1px;
    }
    &-title {
      font-size: 36px;
      font-weight: 500;
      margin-bottom: 50px;
      sup {
        font-size: 20px;
        display: inline-block;
        vertical-align: top;
      }
    }
    &-image {
      position: absolute;
      top: 0;
      right: 50px;
      transform: translateY(-200px);
    }
  }
  @media screen and (max-width: 1023px) {
    .discount-container.container {
      padding: 300px 40px 40px;
      flex-direction: column;
      .heading-opacity {
        position: absolute;
        left: 5%;
        top: 25%;
        transform: none;
        font-size: 150px;
      }
    }
    .discount-content {
      width: 100%;
      flex-direction: column;
    }
    .discount-image {
      right: 0;
    }
    .discount-title {
      margin-bottom: 35px;
    }
  }
`;
