import styled from "styled-components";
export const SavedStyles = styled.section`
  position: relative;
  background-image: var(--linear-2);
  padding: 100px 0;
  .heading-opacity {
    font-size: 170px;
    position: absolute;
    top: 50%;
    transform: translate(-25%, -50%);
    color: white;
    opacity: 0.1;
  }
  .text-heading {
    color: white;
    font-weight: 600;
    margin-bottom: 30px;
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
      top: -50px;
      left: 0;
    }
    &-image-percent {
      margin-bottom: 10px;
    }
    &-list {
      margin-bottom: 30px;
      color: white;
    }
    &-item {
      font-size: 16px;
      line-height: 2;
    }
  }
`;
