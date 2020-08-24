import React from "react";
import { GridStyles } from "../styles/GridStyles";
import { ButtonWithIcon, GradientButton, FloatingButton } from "./Button";
import { InputWithButton, InputWithIcon } from "./Input";
import { CircleImage } from "./Image";
import { OverlayIcon } from "./Overlay";
import { Dropdown } from "./Dropdown";

const Grid = () => {
  return (
    <GridStyles>
      <div className="grid">
        <div className="grid__column">
          <InputWithButton></InputWithButton>
          <ButtonWithIcon></ButtonWithIcon>
        </div>
        <div className="grid__column">
          <GradientButton></GradientButton>
          <CircleImage></CircleImage>
        </div>
        <div className="grid__column">
          <FloatingButton></FloatingButton>
          <InputWithIcon></InputWithIcon>
        </div>
      </div>
      <div className="grid grid--2">
        <div className="grid__column">
          <OverlayIcon></OverlayIcon>
        </div>
        <div className="grid__column">
          <Dropdown></Dropdown>
        </div>
      </div>
    </GridStyles>
  );
};

export default Grid;
