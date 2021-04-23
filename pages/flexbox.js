import React from "react";
import styled from "styled-components";
import {
  FlexEqualSize,
  FlexGrid,
  FlexDynamicItem,
  FlexSquareLayout,
  FlexLastItemOnRight,
  FlexLast2ItemOnRight,
  FlexEqualHeight,
} from "../components/Flexbox";
import { GridStyles } from "../styles/GridStyles";
import Head from "next/head";
const Flex = {
  Layout: styled.div`
    padding: 50px 20px;
    margin: 0 auto;
    max-width: 1000px;
  `,
};

const FlexboxPage = () => {
  return (
    <Flex.Layout>
      <Head>
        <title>Common CSS Flexbox layout with code</title>
      </Head>
      <GridStyles>
        <div className="grid__column">
          <FlexDynamicItem></FlexDynamicItem>
        </div>
        <div className="grid__column">
          <FlexSquareLayout></FlexSquareLayout>
        </div>
        <div className="grid__column">
          <FlexEqualSize></FlexEqualSize>
        </div>
        <div className="grid__column">
          <FlexLastItemOnRight></FlexLastItemOnRight>
        </div>
        <div className="grid__column">
          <FlexLast2ItemOnRight></FlexLast2ItemOnRight>
        </div>
        <div className="grid__column">
          <FlexEqualHeight></FlexEqualHeight>
        </div>
        <div className="grid__column">
          <FlexGrid></FlexGrid>
        </div>
      </GridStyles>
    </Flex.Layout>
  );
};

export default FlexboxPage;
