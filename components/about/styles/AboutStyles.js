import styled from "styled-components";
export const AboutStyles = styled.div`
  width: 100%;
  max-width: 1600px;
  margin: 0 auto;
  min-height: 100vh;
  background-color: white;
  --primary-color: #c68fff;
  --primary-light-color: #93a0f3;
  --title-color: #071e48;
  --text-color: #4b4b4b;
  --gradient: linear-gradient(
    to right,
    var(--primary-color),
    var(--primary-light-color)
  );
  --font-size: 1.6rem;
  font-size: var(--font-size);
  color: var(--title-color);

  .text-primary {
    color: var(--primary-color);
  }
  .container {
    max-width: 1120px;
    margin: 0 auto;
    padding: 0 2rem;
  }
  @media screen and (max-width: 1279px) {
    display: none;
  }
`;
