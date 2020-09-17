import styled from "styled-components";
export const AboutSpecilizingStyles = styled.div`
  padding-bottom: 10rem;
  .specilize {
    &-box {
      max-width: 40rem;
      padding-bottom: 5rem;
    }
    &-heading {
      font-size: 5rem;
      margin-bottom: 3rem;
      font-weight: 600;
    }
    &-desc {
      font-weight: 300;
      line-height: 1.8;
      color: var(--text-color);
    }
    &-list {
      display: flex;
      justify-content: center;
    }
    &-item {
      border-radius: 5px;
      margin: 0 1rem;
      width: 10rem;
      height: 10rem;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 4rem;
      color: white;
      background-image: var(--gradient);
      /* &.html {
        background-color: #f16524;
      }
      &.css {
        background-color: #2965f1;
      }
      &.js {
        background-color: #f7df1f;
      }
      &.sass {
        background-color: #cf649a;
      }
      &.gulp {
        background-color: #e74c3c;
      }
      &.react {
        background-color: #60dafb;
      }
      &.codepen {
        background-color: #000;
      }
      &.github {
        background-color: #333;
      } */
    }
  }
`;
