import styled from "styled-components";
export const FilterStyles = styled.div`
  background-color: white;
  overflow-x: auto;
  margin-bottom: 25px;
  border-top: 1px solid #eee;
  padding: 25px 20px;
  display: flex;
  justify-content: center;
  &::-webkit-scrollbar {
    display: none;
    width: 0;
  }
  @media screen and (max-width: 767px) {
    justify-content: flex-start;
  }
  .filter-item {
    display: inline-block;
    padding: 15px;
    border-radius: 6px;
    color: #999;
    transition: 0.25s linear;
    cursor: pointer;
    font-size: 14px;
    font-weight: 500;
    white-space: nowrap;
    &.active {
      background-color: #eee;
      color: #333;
      pointer-events: none;
    }
  }
`;
