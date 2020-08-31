import React from "react";
import { GridStyles } from "../styles/GridStyles";
import { ButtonWithIcon, GradientButton, FloatingButton } from "./Button";
import { InputWithButton, InputWithIcon } from "./Input";
import { CircleImage } from "./Image";
import { OverlayIcon } from "./Overlay";
import { Dropdown } from "./Dropdown";
import { ProgressBar, CircleBar } from "./Bar";
import { SocialShare, Pagination, Countdown, Calculation } from "./List";
import { CustomCheckboxToggle, CustomRadio } from "./Checkbox";
import { CardMessage } from "./Card";
import { ResponsiveMedia, ResponsiveImage } from "./Media";
import { AvatarInfo } from "./Layout";
import { CaptainShield } from "./SingleDiv";
import { DatingForm } from "./Form";

const Grid = () => {
  return (
    <GridStyles>
      <div className="grid">
        <div className="grid__column">
          <InputWithButton></InputWithButton>
          <ButtonWithIcon></ButtonWithIcon>
          <GradientButton></GradientButton>
          <Dropdown></Dropdown>
          <CustomCheckboxToggle></CustomCheckboxToggle>
          <Pagination></Pagination>
          <ResponsiveMedia></ResponsiveMedia>
          <Calculation></Calculation>
        </div>
        <div className="grid__column">
          <CircleImage></CircleImage>
          <OverlayIcon></OverlayIcon>
          <FloatingButton></FloatingButton>
          <CardMessage></CardMessage>
          <CustomRadio></CustomRadio>
          <DatingForm></DatingForm>
        </div>
        <div className="grid__column">
          <InputWithIcon></InputWithIcon>
          <ProgressBar></ProgressBar>
          <SocialShare></SocialShare>
          <CircleBar></CircleBar>
          <Countdown></Countdown>
          <AvatarInfo></AvatarInfo>
          <ResponsiveImage></ResponsiveImage>
          <CaptainShield></CaptainShield>
        </div>
      </div>
    </GridStyles>
  );
};

export default Grid;
