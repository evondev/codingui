import React from "react";
import Electro from "../components/electro/Electro";
import Head from "next/head";

const ElectroLandingPage = () => {
  return (
    <>
      <Head>
        <title>Electro Landing Page</title>
        <link rel="stylesheet" href="./slick.css" />
      </Head>
      <Electro></Electro>
    </>
  );
};

export default ElectroLandingPage;
