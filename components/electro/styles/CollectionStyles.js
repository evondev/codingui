import styled from "styled-components";
export const CollectionStyles = styled.section`
  position: relative;
  padding: 120px 0 90px;
  .collection {
    &-image-headphone {
      position: absolute;
      top: 200px;
      left: 0;
    }
    &-image-game {
      position: absolute;
      bottom: 100px;
      right: 0;
    }
    &-boxed {
      text-align: center;
      margin-bottom: 75px;
    }
  }
  @media screen and (max-width: 1023px) {
    padding: 60px 0;
    .collection-image-headphone {
      max-width: 50%;
      top: 0;
    }
    .collection-image-game {
      max-width: 50%;
      transform: none;
    }
  }
`;
