import React from "react";
import { GridStyles } from "../styles/GridStyles";
import {
  ButtonWithIcon,
  GradientButton,
  FloatingButton,
  OutlineButton,
  LoadingButton,
} from "./Button";
import { InputWithButton, InputWithIcon, InputFile } from "./Input";
import { CircleImage, RoundedImage, Triangle } from "./Image";
import { OverlayIcon } from "./Overlay";
import { Dropdown } from "./Dropdown";
import { ProgressBar, CircleBar } from "./Bar";
import { SocialShare, Pagination, Countdown } from "./List";
import { CustomCheckboxToggle, CustomRadio } from "./Checkbox";
import { Notification, FlipCard } from "./Card";
import { ResponsiveMedia, ResponsiveImage } from "./Media";
import { AvatarInfo } from "./Layout";
import { Labels, Tags } from "./Tags";
import { SearchForm } from "./Form";
import { CaptainShield } from "./SingleDiv";
import { SingleLine, MultiLine, TextGradient } from "./Text";
import { CircleLoading, LineLoading, DotsLoading } from "./Loading";
import { IconOpacity, RatingStar } from "./Icon";
import { MusicPlayer } from "./Player";
import { UpComingUI } from "./UpComing";
import { Calendar } from "./Calendar";

const Grid = () => {
  return (
    <GridStyles>
      <div className="grid">
        <div className="grid__column">
          <InputWithButton></InputWithButton>
          <ButtonWithIcon></ButtonWithIcon>
          <GradientButton></GradientButton>
          {/* <OutlineButton></OutlineButton> */}
          <Dropdown></Dropdown>
          <CustomCheckboxToggle></CustomCheckboxToggle>
          <Pagination></Pagination>
          <ResponsiveMedia></ResponsiveMedia>
          <Triangle></Triangle>
          <SingleLine></SingleLine>
          <CircleLoading></CircleLoading>
          <LoadingButton></LoadingButton>
          <IconOpacity></IconOpacity>
          <Calendar></Calendar>
          <UpComingUI></UpComingUI>
        </div>
        <div className="grid__column">
          <CircleImage></CircleImage>
          <OverlayIcon></OverlayIcon>
          <FloatingButton></FloatingButton>
          <CustomRadio></CustomRadio>
          <Labels></Labels>
          <RoundedImage></RoundedImage>
          <MultiLine></MultiLine>
          <LineLoading></LineLoading>
          <InputFile></InputFile>
          <RatingStar></RatingStar>
          <Tags></Tags>
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
          <DotsLoading></DotsLoading>
          <MusicPlayer></MusicPlayer>
          <FlipCard></FlipCard>
        </div>
      </div>
    </GridStyles>
  );
};

export default Grid;
