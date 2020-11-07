import styled from "styled-components";
export const FeatureStyles = styled.section`
  .feature {
    &-item {
      padding: 50px;
      border-radius: 12px;
      color: white;
      height: 400px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      position: relative;
      overflow: hidden;
      cursor: pointer;
      * {
        user-select: none;
      }
      &.red {
        background-color: #e50815;
      }
      &.blue {
        background-color: #1230fd;
      }
      &.green {
        background-color: #88bb29;
      }
      &.orange {
        background-color: #f39912;
      }
    }
    &-category {
      font-size: 14px;
      text-transform: uppercase;
      margin-bottom: 10px;
      letter-spacing: 0.15px;
    }
    &-title {
      font-weight: 600;
      font-size: 28px;
      margin-bottom: 15px;
    }
    &-heading {
      opacity: 0.1;
      line-height: 1.2;
    }
    &-more {
      display: inline-block;
      margin-top: auto;
      color: white;
      position: relative;
      padding-right: 50px;
      z-index: 5;
      &:after {
        content: "";
        width: 25px;
        height: 1px;
        background-color: white;
        position: absolute;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
      }
    }
    &-image {
      position: absolute;
      bottom: 0;
      right: 0;
      transform: translate(30px, 15%);
    }
  }
  @media screen and (max-width: 1023px) {
    .feature-item {
      padding: 30px;
    }
  }
`;
