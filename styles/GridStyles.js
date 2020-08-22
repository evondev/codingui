import styled from "styled-components";
export const GridStyles = styled.div`
  --font-code: "SF Mono";
  --code-bg: #292e3e;
  .grid {
    padding: 1rem;
    @media screen and (min-width: 768px) {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(32rem, 1fr));
      grid-gap: 5rem;
      padding: 5rem;
    }
  }

  .grid__column {
    margin-bottom: 3rem;
  }

  .grid__result {
    overflow: hidden;
    margin-bottom: 2rem;
    background-color: #eee;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
  }

  .grid__name {
    font-size: 1.6rem;
    font-weight: 500;
    display: inline-block;
    padding: 1rem;
    background-color: black;
    color: white;
    margin-bottom: 1rem;
  }

  .grid__desc {
    font-size: 1.6rem;
    color: #333;
    margin-bottom: 2.5rem;
    line-height: 1.6;
  }
  .grid__copy {
    cursor: pointer;
    position: absolute;
    top: 0;
    right: 0;
    padding: 5px;
    transform: translateY(-100%);
    font-size: 1.2rem;
    text-transform: uppercase;
    background-color: var(--gray);
    color: white;
  }
  .grid__code {
    position: relative;
    margin-top: 5rem;
  }

  .grid__code:before {
    content: "HTML";
    position: absolute;
    top: 0;
    left: 0;
    transform: translateY(-100%);
    display: inline-block;
    padding: 5px;
    text-transform: uppercase;
    font-size: 1.4rem;
    background-color: #a597ec;
    color: white;
    font-weight: 600;
    letter-spacing: 2px;
  }
  .grid__code.grid__css:before {
    content: "CSS";
  }

  .grid pre[class*="language-"] {
    background-color: var(--code-bg) !important;
  }
  .grid code[class*="language-"],
  .grid pre {
    white-space: nowrap;
    font-family: var(--font-code);
    font-weight: 400;
    font-size: 1.4rem;
    padding: 1rem !important;
    &::-webkit-scrollbar {
      display: none;
      width: 0;
    }
  }
`;
