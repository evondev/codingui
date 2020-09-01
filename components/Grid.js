import React from "react";
import { GridStyles } from "../styles/GridStyles";
import {
  ButtonWithIcon,
  GradientButton,
  FloatingButton,
  RoundedButton,
  OutlineButton,
  LoadingButton,
} from "./Button";
import { InputWithButton, InputWithIcon, InputFile } from "./Input";
import { CircleImage, RoundedImage, Triangle } from "./Image";
import { OverlayIcon } from "./Overlay";
import { Dropdown } from "./Dropdown";
import { ProgressBar, CircleBar } from "./Bar";
import { SocialShare, Pagination, Countdown, Calculation } from "./List";
import { CustomCheckboxToggle, CustomRadio } from "./Checkbox";
import { Notification } from "./Card";
import { ResponsiveMedia, ResponsiveImage } from "./Media";
import { AvatarInfo } from "./Layout";
import { Labels } from "./Tags";
import { SearchForm } from "./Form";
import { CaptainShield } from "./SingleDiv";
import { SingleLine, MultiLine, TextGradient } from "./Text";
import { CircleLoading, LineLoading, DotsLoading } from "./Loading";

const Grid = () => {
  return (
    <GridStyles>
      <div className="grid">
        <div className="grid__column">
          <InputWithButton></InputWithButton>
          <ButtonWithIcon></ButtonWithIcon>
          <GradientButton></GradientButton>
          <RoundedButton></RoundedButton>
          <OutlineButton></OutlineButton>
          <Dropdown></Dropdown>
          <CustomCheckboxToggle></CustomCheckboxToggle>
          <Pagination></Pagination>
          <ResponsiveMedia></ResponsiveMedia>
          <Triangle></Triangle>
          <SingleLine></SingleLine>
          {/* <CircleLoading></CircleLoading> */}
          {/* <LoadingButton></LoadingButton> */}
        </div>
        <div className="grid__column">
          <CircleImage></CircleImage>
          <OverlayIcon></OverlayIcon>
          <FloatingButton></FloatingButton>
          {/* <CardMessage></CardMessage> */}
          <CustomRadio></CustomRadio>
          <Labels></Labels>
          <RoundedImage></RoundedImage>
          <Calculation></Calculation>
          <MultiLine></MultiLine>
          {/* <LineLoading></LineLoading> */}
          <InputFile></InputFile>
        </div>
        <div className="grid__column">
          <InputWithIcon></InputWithIcon>
          <ProgressBar></ProgressBar>
          <SocialShare></SocialShare>
          <CircleBar></CircleBar>
          <Countdown></Countdown>
          <AvatarInfo></AvatarInfo>
          <ResponsiveImage></ResponsiveImage>
          <SearchForm></SearchForm>
          <CaptainShield></CaptainShield>
          <Notification></Notification>
          <TextGradient></TextGradient>
          {/* <DotsLoading></DotsLoading> */}
        </div>
      </div>
    </GridStyles>
  );
};

export default Grid;
