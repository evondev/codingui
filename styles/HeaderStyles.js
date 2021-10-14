import styled from "styled-components";
export const HeaderStyles = styled.header`
  padding: 5rem 0 2.5rem;
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

  .heading {
    text-transform: uppercase;
    font-weight: bold;
    font-size: 50px;
    color: #757575;
    letter-spacing: 1.5px;
  }
  .heading strong {
    font-weight: 800;
    color: transparent;
    background-clip: text;
    -webkit-background-clip: text;
    background-size: 400% 400%;
    background-image: linear-gradient(to right, #ffb4dc, #6a5af9);
  }
  @media screen and (max-width: 767px) {
    padding-top: 25px;
    padding-bottom: 15px;
    .logo {
      max-width: 50px;
      margin-bottom: 10px;
    }
    .heading {
      font-size: 30px;
    }
  }
`;
