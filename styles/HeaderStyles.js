import styled from "styled-components";
export const HeaderStyles = styled.header`
  padding: 2.5rem 0;
  text-align: center;
  background-color: white;

  .logo {
    font-weight: bold;
    font-size: 3rem;
    color: #001940;
  }
  .slogan {
    font-size: 1.4rem;
    line-height: 1.6;
    max-width: 40rem;
    margin: 1rem auto 0;
    color: #999;
  }
  .contact-me {
    display: inline-block;
    padding: 1.5rem 3rem;
    border-radius: 4px;
    color: white;
    text-transform: uppercase;
    font-size: 1.4rem;
    background-color: #001940;
    margin-top: 3rem;
    font-weight: 600;
    background-image: linear-gradient(to right, #784ba0, #2b86c5);
  }
`;
