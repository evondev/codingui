import styled from "styled-components";
export const GridStyles = styled.div`
  --font-code: "SF Mono";
  --code-bg: #292e3e;
  max-width: 1440px;
  margin: 0 auto;
  min-height: calc(100vh - 300px);
  .grid {
    padding: 0 20px;
    @media screen and (min-width: 768px) {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
      grid-gap: 50px;
      &--2 {
        grid-template-columns: repeat(2, 50%);
      }
      &--23 {
        grid-template-columns: 1fr 2fr;
      }
    }
  }
  .grid__column {
    display: flex;
    flex-direction: column-reverse;
    justify-content: flex-end;
  }
  .grid-item {
    margin-bottom: 50px;
    background-color: white;
    padding: 20px 20px;
    box-shadow: 0px 4px 16px rgba(215, 215, 215, 0.5);
    border-radius: 8px;
  }
  .grid-header {
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .grid-idea {
    font-size: 10px;
    color: #c4c4c4;
    font-weight: 300;
    white-space: nowrap;
  }
  .grid-author {
    font-weight: 500;
    color: #c4c4c4;
  }
  .grid-name {
    color: #191c39;
    font-size: 14px;
    font-weight: 500;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 100%;
    max-width: 100%;
    position: relative;
  }

  .grid-footer {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 0 20px;
  }
  .grid-copy {
    padding: 10px;
    background-color: #b5b5b5;
    border-radius: 4px;
    color: white;
    font-weight: 500;
    font-size: 13px;
    transition: all 0.25s ease-in;
    @media screen and (max-width: 767px) {
      font-size: 11px;
    }
  }
  .grid-copy--html:hover {
    background-color: #1c55e8;
  }
  .grid-copy--css:hover {
    background-color: #eb6215;
  }
  .grid-copy--js:hover {
    background-color: #efd81d;
  }
  .grid-view {
    flex-shrink: 0;
    background-image: linear-gradient(to right bottom, #ff6bcb, #e74c3c);
    margin-left: 10px;
  }
  .grid-result {
    margin: 0 auto 30px;
    position: relative;
    z-index: 0;
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
    .grid-item {
      margin-bottom: 3rem;
    }
  }
  .momo {
    background-color: #ae2170;
    padding: 20px;
    .grid__header {
      display: none;
    }
  }
  .discount {
    padding: 0;
    border-radius: 8px;
    overflow: hidden;
    font-family: "Montserrat", sans-serif;
    box-shadow: var(--shadow);
    &-media {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      border-right: 1px dashed #eee;
      padding-right: 30px;
    }
    &-banner {
      width: 120px;
      height: 120px;
      object-fit: cover;
      border-radius: 50rem;
    }
    &-title {
      font-weight: bold;
      margin-top: 20px;
      font-size: 18px;
      color: #404d91;
    }
    &-layout {
      display: grid;
      grid-template-columns: auto 1fr;
      grid-gap: 0;
      align-items: center;
      padding: 30px;
    }
    &-number {
      font-size: 40px;
      font-weight: 600;
      margin-bottom: 30px;
      text-align: right;
      color: #404d91;
    }
    &-promote {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      color: #cbcfdc;
      font-size: 20px;
    }
    &-text {
      color: #404d91;
      font-size: 18px;
      margin-right: 10px;
      font-weight: 500;
    }
    &-code {
      padding: 15px 30px;
      color: #ff442c;
      text-transform: uppercase;
      font-size: 25px;
      font-weight: 600;
      background-color: #ffece9;
      border-radius: 100rem;
      margin-left: 20px;
    }
    &-info {
      padding-left: 30px;
    }
    &-buy {
      display: block;
      margin-left: auto;
      margin-top: 30px;
      padding: 15px;
      color: white;
      text-transform: uppercase;
      font-size: 18px;
      background-image: linear-gradient(to right, #37ccff, #7b22ff);
      border-radius: 4px;
      font-family: "Montserrat", sans-serif;
      font-weight: 600;
    }
    .grid__header {
      display: none;
    }
    @media screen and (max-width: 767px) {
      &-layout {
        grid-template-columns: 100%;
      }
      &-info {
        margin-top: 30px;
        padding-left: 0;
      }
      &-media {
        border-right: 0;
        padding-right: 0;
      }
      &-number,
      &-promote {
        justify-content: center;
        text-align: center;
      }
    }
  }
  /* Modal Code */
  @import url("https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;500&display=swap");
  .modal-code-heading {
    display: inline-block;
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 20px;
    color: transparent;
    background-clip: text;
    -webkit-background-clip: text;
    background-image: linear-gradient(to right, #ff6bcb, #e74c3c);
  }
  .modal-code {
    margin-top: 50px;
  }
  .modal-code pre {
    padding: 20px !important;
    font-family: "Roboto Mono", monospace;
    font-weight: 500;
  }
`;
