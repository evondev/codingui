import styled from "styled-components";
export const BestSellingStyles = styled.section`
  position: relative;
  padding: 120px 0;
  .best {
    &-heading {
      color: rgba(247, 247, 247, 1);
      position: absolute;
      top: 50%;
      left: 0;
      transform: translate(-50%, -50%);
    }
    &-container {
      padding-bottom: 100px;
      margin-bottom: 80px;
      border-bottom: 1px solid #eee;
      display: flex;
      align-items: center;
      justify-content: space-between;
      position: relative;
    }
    &-media,
    &-content {
      position: relative;
      padding: 0 50px;
    }
    &-media {
      width: 60%;
    }
    &-content {
      width: 40%;
    }
    &-media-man {
      position: relative;
      z-index: 2;
    }
    &-media-vr {
      position: absolute;
      bottom: 0;
      right: 0;
      transform: translateX(50px);
    }
    &-desc {
      margin-bottom: 35px;
    }
  }
  .guarantee {
    display: flex;
    align-items: center;
    justify-content: space-between;
    &-item {
      display: grid;
      grid-template-columns: 60px 1fr;
      grid-template-rows: auto 1fr;
      grid-column-gap: 20px;
      align-items: flex-start;
    }
    &-icon {
      grid-row: 1/-1;
    }
    &-title,
    &-desc {
      grid-column: 2/-1;
      font-size: 16px;
    }
    &-title {
      font-weight: 600;
      margin-bottom: 10px;
      color: #2c2c51;
      display: block;
    }
    &-desc {
      color: #677294;
      font-weight: 300;
    }
  }

  @media screen and (max-width: 1023px) {
    padding: 60px 0;
    .best-container {
      flex-direction: column;
      padding-bottom: 60px;
      margin-bottom: 60px;
      & > * {
        width: 100%;
        padding: 0;
      }
    }
    .best-heading {
      font-size: 150px;
      top: 25%;
    }
    .best-media-vr {
      position: relative;
      transform: translate(50px, -25%);
    }
    .guarantee {
      display: grid;
      grid-template-columns: 1fr;
      grid-gap: 50px;
      align-items: flex-start;
      justify-content: center;
      &-item {
        grid-template-columns: 1fr;
        grid-template-rows: auto auto auto;
        justify-items: center;
      }
      &-icon {
        grid-area: 1 / 1 / 2 / -1;
        margin-bottom: 25px;
      }
      &-title {
        grid-area: 2 / 1 / 3 / -1;
      }
      &-desc {
        grid-area: 3 / 1 / -1 / -1;
      }
    }
  }
`;
