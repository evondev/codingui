import styled from "styled-components";
export const GridStyles = styled.div`
  --font-code: "SF Mono";
  --code-bg: #292e3e;
  max-width: 1440px;
  margin: 0 auto;
  min-height: calc(100vh - 30rem);
  .grid {
    padding: 1rem;
    @media screen and (min-width: 768px) {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(32rem, 1fr));
      grid-gap: 5rem;
      padding: 2rem 5rem 0;
      &--2 {
        grid-template-columns: repeat(2, 1fr);
      }
    }
  }

  .grid__item {
    margin-bottom: 5rem;
    background-color: white;
    padding: 1rem 2rem 2rem;
    border-radius: 2px;
  }

  .grid__name {
    padding: 1rem 0;
    font-size: 1.4rem;
    font-weight: 600;
    color: #333;
    display: inline-block;
    max-width: 22rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .grid__desc {
    font-size: 1.6rem;
    color: #333;
    margin-bottom: 2.5rem;
    line-height: 1.6;
  }
  .grid__header {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-bottom: 1rem;
  }
  .grid__copies {
    white-space: nowrap;
  }
  .grid__copy {
    cursor: pointer;
    color: #999;
    font-size: 1.2rem;
    padding: 1rem;
    display: inline-block;
    font-weight: normal;
    transition: 0.2s linear;
  }
  .grid__show {
    display: flex;
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
    font-size: 1.2rem;
    justify-content: flex-end;
    margin-left: auto;
    width: max-content;
    padding: 1rem;
    cursor: pointer;
    background-color: #eee;
    color: #999;
    &.active {
      color: white;
      background-color: #ccc;
    }
  }
  .grid__code {
    margin-top: 2rem;
    max-height: 20rem;
    overflow-y: auto;
    &::-webkit-scrollbar {
      width: 5px;
    }

    &::-webkit-scrollbar-track {
      border-radius: 5rem;
      background-color: #eee;
    }

    &::-webkit-scrollbar-thumb {
      background-color: #ccc;
      border-radius: 5rem;
    }
  }

  .grid pre[class*="language-"] {
    background-color: var(--code-bg) !important;
  }
  .grid code[class*="language-"],
  .grid pre {
    font-family: "SF Mono", "Roboto Mono", Arial, Helvetica, sans-serif;
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 1.6;
    max-width: 100%;
    &::-webkit-scrollbar {
      display: none;
      width: 0;
    }
  }

  .tag {
    margin-top: 2rem;
    display: flex;
    justify-content: flex-end;
    &-item {
      display: inline-block;
      padding: 5px 1rem;
      font-size: 1rem;
      border-radius: 2rem;
      color: white;
      margin-left: 5px;
      text-transform: uppercase;
    }
    &-html {
      background-color: #00aefd;
    }
    &-css {
      background-color: #e74c3c;
    }
  }

  @media screen and (max-width: 767px) {
    .grid__column {
      margin-bottom: 0;
    }
    .grid__item {
      margin-bottom: 2rem;
    }
  }
`;
