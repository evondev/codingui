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
`;
