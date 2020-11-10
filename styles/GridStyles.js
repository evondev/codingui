import styled from "styled-components";
export const GridStyles = styled.div`
  --font-code: "SF Mono";
  --code-bg: #292e3e;
  max-width: 1440px;
  margin: 0 auto;
  min-height: calc(100vh - 300px);
  .grid {
    padding: 1rem;
    @media screen and (min-width: 768px) {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
      grid-gap: 50px;
      padding: 20px 50px 0;
      &--2 {
        grid-template-columns: repeat(2, 50%);
      }
      &--23 {
        grid-template-columns: 1fr 2fr;
      }
    }
  }

  .grid__item {
    margin-bottom: 50px;
    background-color: white;
    padding: 10px 20px 20px;
    border-radius: 2px;
    &[data-source="upcoming"] {
      background-color: transparent;
      padding: 0;
      .grid__header {
        display: none;
      }
    }
  }

  .grid__column {
    display: flex;
    flex-direction: column-reverse;
    justify-content: flex-end;
  }

  .grid__name {
    padding: 1rem 0;
    font-size: 14px;
    font-weight: 600;
    color: #333;
    display: inline-block;
    max-width: 22rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .grid__author {
    font-size: 11px;
    color: #999;
    font-weight: 300;
    text-align: center;
    a {
      font-weight: 600;
      color: inherit;
    }
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
    font-size: 12px;
    padding: 1rem;
    display: inline-block;
    font-weight: normal;
    transition: 0.2s linear;
  }
  .grid__bottom {
    margin-top: 1.5rem;
  }
  .grid__show {
    margin-left: auto;
  }
  .grid__show,
  .grid__edit {
    display: flex;
    font-size: 12px;
    justify-content: flex-end;
    margin-left: auto;
    width: max-content;
    padding: 1rem;
    cursor: pointer;
    border-radius: 4px;
    border: 1px solid #eee;
    /* background-color: #eee; */
    color: #ccc;
    &.active {
      background-color: var(--purple);
      color: white;
    }
  }
  .grid__edit {
    margin-left: 1rem;
    border-radius: 4px;
    justify-content: center;
    align-items: center;
    &.active {
      background-color: var(--purple);
      color: white;
    }
  }
  .grid__code {
    margin-top: 2rem;
    max-height: 20rem;
    overflow: auto;
    &.edit {
      overflow: hidden;
    }

    &::-webkit-scrollbar {
      width: 5px;
      height: 5px;
    }

    &::-webkit-scrollbar-track {
      border-radius: 5rem;
      background-color: #eee;
    }

    &::-webkit-scrollbar-thumb {
      background-color: #ccc;
      border-radius: 5rem;
    }
    textarea {
      font-family: "SF Mono", "Roboto Mono", Arial, Helvetica, sans-serif !important;
      font-weight: 400 !important;
      font-size: 14px !important;
      line-height: 1.6 !important;
      resize: none !important;
      width: 100% !important;
      height: 20rem !important;
      padding: 0.5em !important;
      background: rgb(248, 248, 255) !important;
      border: 0 !important;
      border-radius: 0 !important;
      display: block !important;
      opacity: 1 !important;
      visibility: visible !important;
      position: unset !important;
      color: #333 !important;
      white-space: pre !important;
      &::-webkit-scrollbar {
        width: 5px;
        height: 5px;
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
  }

  .grid pre[class*="language-"] {
    background-color: var(--code-bg) !important;
  }
  .grid code[class*="language-"],
  .grid pre {
    font-family: "SF Mono", "Roboto Mono", Arial, Helvetica, sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 1.6;
    max-width: 100%;
    &::-webkit-scrollbar {
      display: none;
      width: 0;
    }
  }
  @media screen and (max-width: 767px) {
    .grid__column {
      margin-bottom: 0;
    }
    .grid__item {
      margin-bottom: 2rem;
    }
    .grid__header {
      flex-direction: column-reverse;
      align-items: flex-start;
    }
    .grid__name {
      max-width: 100%;
      width: 100%;
    }
    .grid__copies {
      margin-left: -1rem;
    }
  }
`;
