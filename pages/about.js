import React from "react";
import { AboutStyles } from "../components/about/styles/AboutStyles";
import Head from "next/head";
import AboutHeader from "../components/about/AboutHeader";
import AboutBrand from "../components/about/AboutBrand";
import AboutSpecilizing from "../components/about/AboutSpecilizing";

const about = () => {
  return null;
  return (
    <AboutStyles>
      <Head>
        <title>About Evondev</title>
      </Head>
      <div className="wrapper">
        <div className="menu">
          <img src="/images/me.jpeg" alt="" className="avatar" />
          <ul className="menu-list">
            <li className="menu-item active">About</li>
            <li className="menu-item">Projects</li>
            <li className="menu-item">Skills</li>
            <li className="menu-item">Hobbies</li>
            <li className="menu-item">Socials</li>
          </ul>
        </div>
        <div className="content">
          <AboutHeader></AboutHeader>
        </div>
      </div>
      {/* <AboutBrand></AboutBrand>
      <AboutSpecilizing></AboutSpecilizing> */}
    </AboutStyles>
  );
};

export default about;
