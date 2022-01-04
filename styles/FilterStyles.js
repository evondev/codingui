import styled from "styled-components";
export const FilterStyles = styled.div`
  padding: 0 20px;
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-flow: row wrap;
  max-width: 1440px;
  margin: 0 auto 50px;
  .filter-item {
    display: inline-block;
    padding: 12px 20px;
    border-radius: 10px;
    line-height: 1;
    color: #999;
    cursor: pointer;
    font-size: 16px;
    white-space: nowrap;
    text-transform: capitalize;
    border: 1px solid transparent;
    font-weight: 500;
    &.active {
      color: #333;
      border-color: #6a5af9;
      color: #6a5af9;
    }
  }
  @media screen and (max-width: 767px) {
    margin-bottom: 30px;
    gap: 10px;
    .filter-item {
      font-size: 14px;
      padding: 10px 15px;
    }
  }
`;
