import styled from "styled-components";
export const SavedStyles = styled.section`
  position: relative;
  background-image: var(--linear-2);
  padding: 100px 0 90px;
  &.saved {
    .heading-opacity {
      position: absolute;
      top: 50%;
      transform: translate(-600px, -50%);
      color: white;
      opacity: 0.1;
    }
    .text-heading {
      color: white;
      margin-bottom: 30px;
      line-height: 1.4;
    }
  }
  .saved {
    &-container {
      display: flex;
      align-items: center;
      justify-content: space-between;
      position: relative;
    }
    &-content {
      max-width: 45%;
      margin-left: auto;
    }
    &-image {
      position: absolute;
      top: -30px;
      left: 0;
    }
    &-image-percent {
      margin-bottom: 25px;
    }
    &-list {
      margin-bottom: 30px;
      color: white;
    }
    &-item {
      font-size: 16px;
      line-height: 2;
      position: relative;
      padding-left: 40px;
      &:before {
        content: "";
        width: 20px;
        height: 2px;
        background-color: white;
        left: 0;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
      }
    }
  }
  @media screen and (max-width: 1023px) {
    padding: 60px 0;
    .saved-image {
      position: absolute;
      bottom: 0;
      right: 0;
      max-width: 150px;
      z-index: 0;
      top: unset;
      left: unset;
      transform: translateY(50px);
    }
    .saved-container {
      flex-direction: column-reverse;
    }
    .saved-content {
      margin-left: 0;
      max-width: 100%;
    }
  }
`;
