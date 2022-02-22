import styled from "styled-components";
export const FilterStyles = styled.div`
  padding: 0 20px;
  display: flex;
  gap: 20px;
  flex-flow: row wrap;
  justify-content: center;
  max-width: 800px;
  margin: 0 auto 50px;
  .filter-item {
    display: inline-block;
    padding: 10px 20px;
    border-radius: 8px;
    line-height: 1;
    color: white;
    cursor: pointer;
    font-size: 16px;
    white-space: nowrap;
    text-transform: capitalize;
    border: 1px solid var(--purple-dark);
    font-weight: 500;
    &.active {
      color: white;
      background-image: linear-gradient(to right top, #6a5af9, #d66efd);
      border: none;
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
