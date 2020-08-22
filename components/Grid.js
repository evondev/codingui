import React from "react";
import { GridStyles } from "../styles/GridStyles";
import { UIStyles } from "../styles/UIStyles";
import InputWithButton from "./input/InputWithButton";
import GradientButton from "./button/GradientButton";

const Grid = () => {
  return (
    <GridStyles>
      <UIStyles>
        <div className="grid">
          <InputWithButton></InputWithButton>
          <GradientButton></GradientButton>
        </div>
      </UIStyles>
    </GridStyles>
  );
};

export default Grid;
