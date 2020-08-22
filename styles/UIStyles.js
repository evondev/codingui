import styled from "styled-components";
export const UIStyles = styled.div`
  .input-button {
    display: flex;
    width: 100%;
  }
  .input-button input {
    flex: 1;
    padding: 1rem;
  }
  .input-button button {
    background-color: #292e3e;
    color: white;
    padding: 1rem 2rem;
  }

  .gradient-button {
    padding: 1.5rem 2rem;
    border-radius: 4px;
    color: white;
    font-size: 1.6rem;
    text-transform: uppercase;
    width: 100%;
    font-weight: bold;
    cursor: pointer;
    outline: none;
    font-family: ${(props) => props.theme.font}, sans-serif;
    background-image: linear-gradient(
      to right,
      ${(props) => props.theme.primary},
      ${(props) => props.theme.secondary}
    );
  }
`;
