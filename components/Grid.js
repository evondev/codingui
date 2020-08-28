import React from "react";
import { GridStyles } from "../styles/GridStyles";
import { ButtonWithIcon, GradientButton, FloatingButton } from "./Button";
import { InputWithButton, InputWithIcon } from "./Input";
import { CircleImage } from "./Image";
import { OverlayIcon } from "./Overlay";
import { Dropdown } from "./Dropdown";
import { ProgressBar, CircleBar } from "./Bar";
import { SocialShare, Pagination, Countdown } from "./List";
import { CustomCheckbox } from "./Checkbox";
import { CardMessage } from "./Card";

const Grid = () => {
  return (
    <GridStyles>
      <div className="grid">
        <div className="grid__column">
          <InputWithButton></InputWithButton>
          <ButtonWithIcon></ButtonWithIcon>
          <GradientButton></GradientButton>
          <Dropdown></Dropdown>
          <CustomCheckbox></CustomCheckbox>
          <Pagination></Pagination>
        </div>
        <div className="grid__column">
          <CircleImage></CircleImage>
          <OverlayIcon></OverlayIcon>
          <FloatingButton></FloatingButton>
          <CardMessage></CardMessage>
        </div>
        <div className="grid__column">
          <InputWithIcon></InputWithIcon>
          <ProgressBar></ProgressBar>
          <SocialShare></SocialShare>
          <CircleBar></CircleBar>
          <Countdown></Countdown>
        </div>
      </div>
    </GridStyles>
  );
};

export default Grid;
