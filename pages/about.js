import React from "react";
import { AboutStyles } from "../components/about/styles/AboutStyles";
import Head from "next/head";
import AboutHeader from "../components/about/AboutHeader";
import AboutBrand from "../components/about/AboutBrand";
import AboutSpecilizing from "../components/about/AboutSpecilizing";

const about = () => {
  return (
    <AboutStyles>
      <Head>
        <title>Thanks for visiting my personal CV</title>
      </Head>
      <AboutHeader></AboutHeader>
      <AboutBrand></AboutBrand>
      <AboutSpecilizing></AboutSpecilizing>
    </AboutStyles>
  );
};

export default about;
