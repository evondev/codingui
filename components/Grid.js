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
import { OverlayIcon, Tooltip } from "./Overlay";
import { Dropdown, LightDropdown } from "./Dropdown";
import { ProgressBar, CircleBar } from "./Bar";
import { SocialShare, Pagination, Countdown } from "./List";
import { CustomCheckboxToggle, CustomRadio } from "./Checkbox";
import { Notification, FlipCard, SimpleCard } from "./Card";
import { ResponsiveMedia, ResponsiveImage } from "./Media";
import { AvatarInfo } from "./Layout";
import { Labels, Tags } from "./Tags";
import { SearchForm, LoginForm, ContactForm } from "./Form";
import { CaptainShield } from "./SingleDiv";
import { SingleLine, MultiLine, TextGradient } from "./Text";
import { CircleLoading, LineLoading, DotsLoading } from "./Loading";
import { IconOpacity, RatingStar } from "./Icon";
import { MusicPlayer } from "./Player";
import { UpComingUI } from "./UpComing";
import { Calendar } from "./Calendar";
import { Table } from "./Table";
import { Pricing } from "./Pricing";
import { RecentActivity } from "./List2";
import { LineText } from "./Line";
import { SimpleTab } from "./Tab";
import { DropdownMenu } from "./Navigation";

const Grid = () => {
  return (
    <GridStyles>
      <div className="grid">
        <div className="grid__column">
          <ButtonWithIcon></ButtonWithIcon>
          <GradientButton></GradientButton>
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
          <Tooltip></Tooltip>
          <LoginForm></LoginForm>
          <LineText></LineText>
          <SimpleTab></SimpleTab>
          <LightDropdown></LightDropdown>
          <UpComingUI></UpComingUI>
        </div>
        <div className="grid__column">
          <AvatarInfo></AvatarInfo>
          <ResponsiveImage></ResponsiveImage>
          <InputWithIcon></InputWithIcon>
          <ProgressBar></ProgressBar>
          <CircleImage></CircleImage>
          <OverlayIcon></OverlayIcon>
          <FloatingButton></FloatingButton>
          <CustomRadio></CustomRadio>
          <Labels></Labels>
          <MultiLine></MultiLine>
          <LineLoading></LineLoading>
          <InputFile></InputFile>
          <RatingStar></RatingStar>
          <Tags></Tags>
          <SimpleCard></SimpleCard>
          <ContactForm></ContactForm>
        </div>
        <div className="grid__column">
          <InputWithButton></InputWithButton>
          <SocialShare></SocialShare>
          <CircleBar></CircleBar>
          <Countdown></Countdown>
          <Pricing></Pricing>
          <SearchForm></SearchForm>
          <CaptainShield></CaptainShield>
          <Notification></Notification>
          <TextGradient></TextGradient>
          <DotsLoading></DotsLoading>
          <MusicPlayer></MusicPlayer>
          <FlipCard></FlipCard>
          <RecentActivity></RecentActivity>
        </div>
      </div>
      <div className="grid grid--2">
        <div className="grid__column">
          <DropdownMenu></DropdownMenu>
        </div>
        <div className="grid__column"></div>
      </div>
      <div className="grid">
        <Table></Table>
      </div>
    </GridStyles>
  );
};

export default Grid;
