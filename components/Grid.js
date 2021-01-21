import React from "react";
import { GridStyles } from "../styles/GridStyles";
import {
  ButtonWithIcon,
  GradientButton,
  FloatingButton,
  LoadingButton,
  EffectButton,
} from "./Button";
import {
  InputWithButton,
  InputWithIcon,
  InputFile,
  InputFocus,
  InputFocusEffect,
} from "./Input";
import { CircleImage, Triangle } from "./Image";
import { OverlayIcon, Tooltip } from "./Overlay";
import { Dropdown, LightDropdown } from "./Dropdown";
import { ProgressBar, CircleBar } from "./Bar";
import { SocialShare, Pagination, Countdown } from "./List";
import { CustomCheckboxToggle, CustomRadio } from "./Checkbox";
import {
  Notification,
  FlipCard,
  SimpleCard,
  CardHover,
  GradientCard,
} from "./Card";
import { ResponsiveMedia, ResponsiveImage } from "./Media";
import { AvatarInfo, GridImage, GridImage2 } from "./Layout";
import { Labels, Tags } from "./Tags";
import { SearchForm, LoginForm, ContactForm, SubscribeForm } from "./Form";
import { CaptainShield } from "./SingleDiv";
import { SingleLine, MultiLine, TextGradient } from "./Text";
import {
  CircleLoading,
  LineLoading,
  DotsLoading,
  FadeLoading,
  DashedLoading,
  CircleLoading2,
  PlayerLoading,
} from "./Loading";
import { IconOpacity, RatingStar, LikeUnlike } from "./Icon";
import { MusicPlayer } from "./Player";
import { UpComingUI } from "./UpComing";
import { Calendar } from "./Calendar";
import { Table } from "./Table";
import { Pricing } from "./Pricing";
import { AvatarList, RecentActivity } from "./List2";
import { LineText } from "./Line";
import { SimpleTab } from "./Tab";
import { DropdownMenu } from "./Navigation";
import { AutocompleteSearch } from "./Search";
import { NotiBell } from "./Notification";
import { SocialShareButon } from "./Social";
import { ComplexShadow } from "./Shadow";
import { SidebarMenu } from "./Sidebar";
import { LargeSignup, SimpleSignup } from "./SignUp";
import {
  Gradient1,
  Gradient2,
  Gradient3,
  Gradient4,
  Gradient5,
  Gradient6,
  Gradient7,
  Gradient8,
  Gradient9,
  Gradient10,
  Gradient11,
  Gradient12,
  Gradient13,
  Gradient14,
  Gradient15,
} from "./Gradient";

const Grid = () => {
  return (
    <GridStyles>
      <div className="grid">
        <div className="grid__column">
          <Gradient5></Gradient5>
          <Gradient4></Gradient4>
          <Gradient3></Gradient3>
          <Gradient2></Gradient2>
          <Gradient1></Gradient1>
        </div>
        <div className="grid__column">
          <Gradient10></Gradient10>
          <Gradient9></Gradient9>
          <Gradient8></Gradient8>
          <Gradient7></Gradient7>
          <Gradient6></Gradient6>
        </div>
        <div className="grid__column">
          <Gradient15></Gradient15>
          <Gradient14></Gradient14>
          <Gradient13></Gradient13>
          <Gradient12></Gradient12>
          <Gradient11></Gradient11>
        </div>
      </div>
      <div className="grid">
        <div className="grid__column">
          <PlayerLoading></PlayerLoading>
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
          <DashedLoading></DashedLoading>
          <ComplexShadow></ComplexShadow>
          <LikeUnlike></LikeUnlike>
          <GradientCard></GradientCard>
        </div>
        <div className="grid__column">
          <AvatarInfo></AvatarInfo>
          <ResponsiveImage></ResponsiveImage>
          <InputWithIcon></InputWithIcon>
          <ProgressBar></ProgressBar>
          <CircleImage></CircleImage>
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
          <AutocompleteSearch></AutocompleteSearch>
          <InputFocusEffect></InputFocusEffect>
          <CircleLoading2></CircleLoading2>
          <SocialShareButon></SocialShareButon>
          <SubscribeForm></SubscribeForm>
        </div>
        <div className="grid__column">
          <InputFocus></InputFocus>
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
          <AvatarList></AvatarList>
          <NotiBell></NotiBell>
          <FadeLoading></FadeLoading>
          <EffectButton></EffectButton>
          <CardHover></CardHover>
          <SidebarMenu></SidebarMenu>
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
      <div className="grid grid--23">
        <div className="grid__column">
          <SimpleSignup></SimpleSignup>
        </div>
        <div className="grid__column">
          <LargeSignup></LargeSignup>
        </div>
      </div>
      <div className="grid">
        <div className="grid__column">
          <GridImage2></GridImage2>
        </div>
      </div>
      <div className="grid">
        <div className="grid__column">
          <GridImage></GridImage>
        </div>
      </div>
    </GridStyles>
  );
};

export default Grid;
