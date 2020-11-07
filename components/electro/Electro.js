import React from "react";
import BestSelling from "./BestSelling";
import Brands from "./Brands";
import Collection from "./Collection";
import Discount from "./Discount";
import Feature from "./Feature";
import Footer from "./Footer";
import Header from "./Header";
import Saved from "./Saved";
import SellerProduct from "./SellerProduct";
import { ElectroStyles } from "./styles/ElectroStyles";
import Subscribe from "./Subscribe";

const Electro = () => {
  return (
    <ElectroStyles>
      <Header></Header>
      <BestSelling></BestSelling>
      <Feature></Feature>
      <Collection></Collection>
      <Saved></Saved>
      <SellerProduct></SellerProduct>
      <Discount></Discount>
      <Brands></Brands>
      <Subscribe></Subscribe>
      <Footer></Footer>
    </ElectroStyles>
  );
};

export default Electro;
