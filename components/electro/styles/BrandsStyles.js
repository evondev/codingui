import styled from "styled-components";
export const BrandsStyles = styled.section`
  padding: 120px 0 0;
  text-align: center;

  .brand {
    .text-boxed {
      max-width: 600px;
      margin-left: auto;
      margin-right: auto;
    }
    .text-heading {
      font-size: 32px;
      line-height: 1.4;
    }
    &-list {
      display: flex;
      flex-flow: row wrap;
      justify-content: space-between;
      justify-content: center;
      margin-left: -60px;
    }
    &-item {
      width: calc(20% - 60px);
      margin-bottom: 60px;
      margin-left: 60px;
    }
    &-logo {
      opacity: 0.5;
      transition: all 0.2s linear;
      &:hover {
        opacity: 1;
      }
    }
  }
`;
