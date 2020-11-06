import React from "react";
import BestSelling from "./BestSelling";
import Collection from "./Collection";
import Header from "./Header";
import Saved from "./Saved";
import SellerProduct from "./SellerProduct";
import { ElectroStyles } from "./styles/ElectroStyles";

const Electro = () => {
  return (
    <ElectroStyles>
      <Header></Header>
      <BestSelling></BestSelling>
      <Collection></Collection>
      <Saved></Saved>
      <SellerProduct></SellerProduct>
    </ElectroStyles>
  );
};

export default Electro;
