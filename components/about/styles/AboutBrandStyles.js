import styled from "styled-components";
export const AboutBrandStyles = styled.div`
  .partner {
    &-list.container {
      padding: 4rem;
      background-color: white;
      box-shadow: 0 5px 30px -15px rgba(0, 0, 0, 0.2);
      border-radius: 8px;
      position: relative;
      transform: translateY(-50%);
      z-index: 2;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    &-logo {
      max-width: 20rem;
      max-height: 4rem;
      filter: grayscale(10);
    }
  }
`;
