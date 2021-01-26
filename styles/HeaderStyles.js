import styled from "styled-components";
export const HeaderStyles = styled.header`
  padding: 2.5rem 0;
  text-align: center;
  background-color: white;
  .love {
    position: fixed;
    right: 3rem;
    bottom: 3rem;
    z-index: 99;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    &-count {
      color: #999;
      display: inline-block;
      margin-bottom: 5px;
      font-size: 14px;
    }
    &-icon {
      position: relative;
      width: 50px;
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50px;
      cursor: pointer;
      color: rgb(226, 45, 72);
      background-color: white;
      box-shadow: 0 0 20px -10px rgba(0, 0, 0, 0.2);
      i {
        pointer-events: none;
      }
      &.active {
        animation: clicked 0.05s forwards alternate 1 linear;
      }
    }
    &-heart {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      &.active {
        animation: loveFly 0.25s forwards 1 linear;
      }
    }
  }
  @keyframes loveFly {
    to {
      transform: translate(-50%, -10rem);
      opacity: 0;
    }
  }
  @keyframes clicked {
    from {
      transform: scale(1) translateY(0);
    }
    to {
      transform: scale(0.9) translateY(5px);
    }
  }
  .logo {
    max-width: 75px;
    margin: 0 auto 20px;
  }
  .heading {
    text-transform: uppercase;
    font-weight: bold;
    font-size: 40px;
    color: #5e6b79;
    letter-spacing: 2.5px;
  }
  .heading strong {
    font-weight: 800;
    color: transparent;
    -webkit-background-clip: text;
    background-clip: text;
    background-image: linear-gradient(to right, #1abcf4, #5defb8);
  }
  .slogan {
    font-size: 14px;
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
    font-size: 14px;
    background-color: #001940;
    margin-top: 3rem;
    font-weight: 600;
    background-image: linear-gradient(to right, #784ba0, #2b86c5);
  }
`;
