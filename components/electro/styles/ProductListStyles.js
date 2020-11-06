import styled from "styled-components";
export const ProductListStyles = styled.div`
  &.product {
    &-list {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: auto auto;
      grid-gap: 30px;
      &--4 {
        grid-template-columns: repeat(4, 1fr);
      }
    }
  }
  .product {
    &-item:hover .product-action {
      opacity: 1;
      visibility: visible;
    }
    &-media {
      position: relative;
      height: 440px;
    }
    &-image {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    &-content {
      text-align: center;
      padding: 30px;
    }
    &-name {
      color: #051441;
      margin-bottom: 15px;
      font-size: 20px;
      line-height: 1.5;
    }
    &-price {
      font-size: 20px;
    }
    &-price-main {
      color: #999;
      margin-left: 15px;
      text-decoration: line-through;
    }
    &-price-sale {
      font-weight: 600;
    }
  }
  .product-label {
    color: white;
    text-transform: uppercase;
    padding: 5px 15px;
    border-radius: 50px;
    font-weight: 500;
    font-size: 14px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 20px;
    right: 20px;
    z-index: 2;
    &--hot {
      width: 45px;
      height: 45px;
      background-color: var(--danger-color);
    }
    &--new {
      background-color: var(--success-color);
    }
    &--sale {
      background-color: var(--warning-color);
    }
  }
  .product-action {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: inline-grid;
    grid-template-columns: auto auto;
    grid-column-gap: 20px;
    opacity: 0;
    visibility: hidden;
    transition: all 0.2s ease;
    &-item {
      align-items: center;
      background-color: var(--gray-dark);
      border-radius: 4px;
      color: white;
      cursor: pointer;
      display: flex;
      font-size: 25px;
      height: 70px;
      justify-content: center;
      width: 70px;
      position: relative;
      z-index: 1;
    }
    &-item:before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: -1;
      background-image: var(--linear);
      border-radius: 4px;
      transform: scale(0);
      transition: all 0.2s linear;
    }

    &-item:hover:before {
      transform: scale(1);
    }
  }
`;
