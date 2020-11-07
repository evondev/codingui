import styled from "styled-components";
export const SubscribeStyles = styled.section`
  .subscribe {
    transform: translateY(50%);
    &-content {
      padding: 70px;
      border-radius: 8px;
      background-image: var(--linear);
      display: grid;
      grid-template-columns: 1fr 1.5fr;
      grid-column-gap: 80px;
      align-items: center;
    }
    .text-heading {
      font-size: 26px;
      font-weight: 600;
      margin-bottom: 15px;
      color: white;
    }
    .text-desc {
      color: white;
      font-size: 15px;
    }
    &-form {
      display: flex;
      width: 100%;
    }
    &-input {
      padding: 15px 30px;
      width: 100%;
      flex: 1;
      border-radius: 100px;
      background-color: rgba(255, 255, 255, 0.1);
      border: 1px solid white;
      color: white;
      font-size: 16px;
      &::-webkit-input-placeholder {
        color: white;
      }
      &::-moz-input-placeholder {
        color: white;
      }
    }
    &-submit {
      flex-shrink: 0;
      margin-left: 20px;
    }
    &-submit-text {
      color: transparent;
      background-image: var(--linear);
      background-clip: text;
      -webkit-background-clip: text;
    }
  }
  @media screen and (max-width: 1023px) {
    .subscribe {
      transform: none;
      margin-bottom: -150px;
      position: relative;
      z-index: 5;
    }
    .subscribe-content {
      padding: 25px;
      display: flex;
      flex-direction: column;
    }
    .subscribe-info {
      margin-bottom: 20px;
    }
    .subscribe-form {
      flex-direction: column;
    }
    .subscribe-submit {
      margin-left: 0;
      margin-top: 15px;
    }
  }
`;
