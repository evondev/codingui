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
        .product-media {
          height: 320px;
        }
      }
    }
  }
  .product {
    &-item {
      position: relative;
      z-index: 5;
      background-color: #fff;
    }
    &-media:hover .product-action {
      opacity: 1;
      visibility: visible;
      transition: all 0.2s linear;
    }
    &-media:hover .product-image {
      opacity: 0.75;
    }
    &-media {
      position: relative;
      height: 440px;
      z-index: 2;
    }
    &-image {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: all 0.2s linear;
    }

    &-content {
      text-align: center;
      padding: 30px 15px;
    }
    &-name {
      color: #051441;
      margin-bottom: 10px;
      font-size: 20px;
      line-height: 1.5;
      text-transform: capitalize;
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
      font-weight: 500;
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
    transition: all 0.2s linear;
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
  @media screen and (max-width: 1023px) {
    &.product-list {
      display: grid;
      justify-content: flex-start;
      grid-auto-columns: 80%;
      grid-auto-flow: column;
      grid-gap: 1.5rem;
      overflow: auto;
      overflow-y: hidden;
      scroll-snap-type: x mandatory;
      scroll-snap-stop: always;
      -ms-touch-action: manipulation;
      touch-action: manipulation;
      -webkit-overflow-scrolling: touch;
      scroll-padding: 1rem;
      grid-template-columns: unset;
      grid-template-rows: auto;
      &::-webkit-scrollbar {
        display: none;
        width: 0;
      }
      & > * {
        scroll-snap-align: start;
      }
    }
    .product-media {
      height: 370px;
    }
  }
`;
