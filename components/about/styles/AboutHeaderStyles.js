import styled from "styled-components";
export const AboutHeaderStyles = styled.header`
  .header {
    &-container {
      display: flex;
      align-items: center;
      & > * {
        width: 50%;
      }
    }
    &-content {
      padding: 2rem 5rem;
    }
    &-inner {
      max-width: 50rem;
      margin: 0 auto;
    }
    &-hello {
      color: var(--primary-color);
    }
    &-caption {
      text-transform: uppercase;
      font-size: 2rem;
      font-weight: 600;
      margin-bottom: 2rem;
    }
    &-position {
      font-weight: bold;
      font-size: 4rem;
      text-transform: uppercase;
      margin-bottom: 4rem;
    }
    &-desc {
      color: var(--text-color);
      font-weight: 300;
      line-height: 1.6;
      margin-bottom: 4rem;
    }
    &-social {
      display: inline-flex;
      &-item {
        padding: 1.5rem 2rem;
        color: var(--primary-color);
        text-align: center;
        display: block;
        border: 1px solid currentColor;
        border-radius: 5rem;
        width: 15rem;
        font-size: 1.6rem;
        &:first-child {
          color: white;
          background-image: var(--gradient);
          margin-right: 2rem;
        }
      }
    }
  }
`;
