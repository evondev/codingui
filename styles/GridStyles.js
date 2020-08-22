import styled from "styled-components";
export const GridStyles = styled.div`
  --font-code: "SF Mono";
  --code-bg: #292e3e;
  .grid {
    display: grid;
    grid-template-columns: repeat(4, minmax(calc(25% - 4rem), 1fr));
    grid-gap: 2rem;
    padding: 1rem;
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
    font-size: 1.4rem;
    color: #333;
    margin-bottom: 2.5rem;
    line-height: 1.6;
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
  }
`;
