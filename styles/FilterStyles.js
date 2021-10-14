import styled from "styled-components";
export const FilterStyles = styled.div`
  background-color: white;
  overflow-x: auto;
  margin-bottom: 50px;
  padding: 0 20px;
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-flow: row wrap;
  &::-webkit-scrollbar {
    display: none;
    width: 0;
  }
  .filter-item {
    display: inline-block;
    padding: 10px 20px;
    border-radius: 4px;
    background-color: #fafafa;
    color: #999;
    transition: 0.25s linear;
    cursor: pointer;
    font-size: 16px;
    font-weight: 300;
    line-height: 1.4;
    white-space: nowrap;
    &.active {
      color: white;
      background-color: #20e3b2;
    }
  }
  @media screen and (max-width: 767px) {
    margin-bottom: 30px;
    .filter-item {
      font-size: 14px;
      padding: 10px 15px;
    }
  }
`;
