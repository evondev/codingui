import React from "react";
import { GridStyles } from "../styles/GridStyles";
import InputWithButton from "./input/InputWithButton";
import GradientButton from "./button/GradientButton";

const Grid = () => {
  return (
    <GridStyles>
      <div className="grid">
        <div className="grid__column">
          <InputWithButton></InputWithButton>
        </div>
        <div className="grid__column">
          <GradientButton></GradientButton>
        </div>
        <div className="grid__column"></div>
      </div>
    </GridStyles>
  );
};

export default Grid;
