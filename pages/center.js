import React, { Fragment } from "react";
import styled from "styled-components";
import Head from "next/head";
import { GridStyles } from "../styles/GridStyles";
import {
  CenterAbsoluteX,
  CenterBlock,
  CenterInlineBlock,
  CenterAbsoluteY,
  CenterAbsolute,
  CenterFlexbox,
  CenterGrid,
} from "../components/Center";
const Layout = styled.div`
  padding: 50px 20px;
  margin: 0 auto;
  max-width: 1000px;
`;
const Heading = styled.h1`
  text-transform: capitalize;
  font-size: 40px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 50px;
  color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
  background-image: linear-gradient(to right, #2979ff, #07a787);
`;

const CenterPage = () => {
  return (
    <Layout>
      <Head>
        <title>Common CSS Center - CodingUI</title>
      </Head>
      <a href="/" className="header-logo">
        <img src="/images/logo.png" alt="codingui" className="logo" />
      </a>
      <Heading>Common CSS Center</Heading>
      <GridStyles>
        <div className="grid__column">
          <CenterBlock></CenterBlock>
        </div>
        <div className="grid__column">
          <CenterInlineBlock></CenterInlineBlock>
        </div>
        <div className="grid__column">
          <CenterAbsoluteX></CenterAbsoluteX>
        </div>
        <div className="grid__column">
          <CenterAbsoluteY></CenterAbsoluteY>
        </div>
        <div className="grid__column">
          <CenterAbsolute></CenterAbsolute>
        </div>
        <div className="grid__column">
          <CenterFlexbox></CenterFlexbox>
        </div>
        <div className="grid__column">
          <CenterGrid></CenterGrid>
        </div>
      </GridStyles>
    </Layout>
  );
};

export default CenterPage;
