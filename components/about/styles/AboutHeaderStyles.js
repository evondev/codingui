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
      padding-right: 4rem;
    }

    &-caption {
      text-transform: uppercase;
      font-size: 2rem;
      font-weight: 400;
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
    &-me {
      background-image: var(--gradient);
    }
  }
`;
