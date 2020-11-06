import styled from "styled-components";
export const CollectionStyles = styled.section`
  position: relative;
  padding: 125px 0 100px;
  .collection {
    &-image-headphone {
      position: absolute;
      top: 200px;
      left: 0;
    }
    &-image-game {
      position: absolute;
      bottom: 0;
      right: 0;
    }
    &-boxed {
      text-align: center;
      margin-bottom: 75px;
    }
  }
`;
