import styled from "styled-components";
export const FilterStyles = styled.div`
  background-color: white;
  overflow-x: auto;
  margin-bottom: 50px;
  padding: 0 20px;
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
    padding: 0 15px;
    border-radius: 6px;
    color: #999;
    transition: 0.25s linear;
    cursor: pointer;
    font-size: 16px;
    font-weight: 300;
    line-height: 1.4;
    white-space: nowrap;
    &.active {
      color: var(--green);
      pointer-events: none;
    }
    &.featured {
      color: var(--pink);
      font-weight: 600;
    }
    &.featured2 {
      color: var(--purple);
      font-weight: 600;
    }
  }
  @media screen and (max-width: 767px) {
    margin-bottom: 30px;
    .filter-item {
      font-size: 14px;
      padding: 0 10px;
    }
  }
`;
