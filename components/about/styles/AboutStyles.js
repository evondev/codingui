import styled from "styled-components";
export const AboutStyles = styled.div`
  width: 100%;
  height: 100vh;
  min-height: 60rem;
  --primary-color: #00fb8e;
  --secondary-color: #75ebfe;
  --primary-light-color: #93a0f3;
  --title-color: #071e48;
  --text-color: #4b4b4b;
  --gradient: linear-gradient(
    to right,
    var(--primary-color),
    var(--secondary-color)
  );
  --font-size: 1.6rem;
  font-size: var(--font-size);
  color: var(--title-color);
  .wrapper {
    width: 100%;
    height: 100%;
    background-color: white;
    display: grid;
    grid-template-columns: auto 1fr;
  }
  .text-primary {
    color: var(--primary-color);
  }
  .menu {
    border-right: 1px solid #eee;
    &-item {
      cursor: pointer;
      padding: 3rem 2rem;
      text-transform: uppercase;
      transition: all 0.2s ease;
      font-size: 1.3rem;
      font-weight: 500;
      position: relative;
      color: #999;
      &:after {
        content: "";
        width: 1px;
        height: 100%;
        position: absolute;
        right: -1px;
        top: 0;
      }
      &.active {
        color: var(--title-color);
      }
      &.active:after {
        background-color: var(--primary-color);
      }
    }
  }
  .avatar {
    width: 6rem;
    height: 6rem;
    border-radius: 6rem;
    margin: 2rem auto;
    object-fit: cover;
  }
  .content {
    padding: 4rem;
  }
  .text-gradient {
    background-image: var(--gradient);
    color: transparent;
    -webkit-background-clip: text;
    background-clip: text;
  }
`;
