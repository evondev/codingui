import React from "react";
import { GridStyles } from "../styles/GridStyles";
import {
  ButtonWithIcon,
  GradientButton,
  LoadingButton,
  EffectButton,
  TiktokButton,
} from "./Button";
import {
  InputWithButton,
  InputWithIcon,
  InputFile,
  InputFocus,
  InputFocusEffect,
  TextField1,
  TextField2,
  TextField3,
} from "./Input";
import { Triangle } from "./Image";
import { Tooltip } from "./Overlay";
import { Dropdown, LightDropdown } from "./Dropdown";
import { ProgressBar, CircleBar } from "./Bar";
import { SocialShare, Pagination, Countdown } from "./List";
import { CustomCheckboxToggle, CustomRadio } from "./Checkbox";
import { Notification, FlipCard, SimpleCard } from "./Card";
import { GridImage, GridImage2 } from "./Layout";
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
import {
  IconOpacity,
  RatingStar,
  LikeUnlike,
  GradientIcon,
  PlayerIcon,
  AvatarWithCheck,
} from "./Icon";
import { Calendar } from "./Calendar";
import { Table } from "./Table";
import { AvatarList, RecentActivity } from "./List2";
import { LineText } from "./Line";
import { SimpleTab, Tabs1, Tabs5, Tabs7 } from "./Tab";
import { DropdownMenu } from "./Navigation";
import {
  AutocompleteSearch,
  SimpleSearch1,
  SimpleSearch2,
  SimpleSearch3,
} from "./Search";
import { NotiBell } from "./Notification";
import { SocialShareButon } from "./Social";
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
import {
  AvatarDefault,
  AvatarDefault1,
  AvatarDefault2,
  AvatarDefault3,
  AvatarDefault4,
  AvatarDefault5,
} from "./Avatar";
import { CourseItem1, CourseItem2, CourseItem3 } from "./course/CourseItem";

const Grid = () => {
  return (
    <GridStyles>
      <div className="grid">
        <div className="grid__column">
          <CourseItem1></CourseItem1>
        </div>
        <div className="grid__column">
          <CourseItem2></CourseItem2>
        </div>
        <div className="grid__column">
          <CourseItem3></CourseItem3>
        </div>
      </div>
      <div className="grid">
        <div className="grid__column">
          <TextField1></TextField1>
        </div>
        <div className="grid__column">
          <TextField2></TextField2>
        </div>
        <div className="grid__column">
          <TextField3></TextField3>
        </div>
      </div>
      <div className="grid">
        <div className="grid__column">
          <Tabs5></Tabs5>
        </div>
        <div className="grid__column">
          <Tabs7></Tabs7>
        </div>
        <div className="grid__column">
          <Tabs1></Tabs1>
        </div>
      </div>
      <div className="grid">
        <div className="grid__column">
          <SimpleSearch1></SimpleSearch1>
          <PlayerIcon></PlayerIcon>
        </div>
        <div className="grid__column">
          <SimpleSearch2></SimpleSearch2>
          <AvatarWithCheck></AvatarWithCheck>
        </div>
        <div className="grid__column">
          <SimpleSearch3></SimpleSearch3>
          <TiktokButton></TiktokButton>
        </div>
      </div>
      <div className="grid">
        <div className="grid__column">
          <Dropdown></Dropdown>
          <CustomCheckboxToggle></CustomCheckboxToggle>
          <Pagination></Pagination>
          <Triangle></Triangle>
          <SingleLine></SingleLine>
          <CircleLoading></CircleLoading>
          <LoadingButton></LoadingButton>
          <IconOpacity></IconOpacity>
          <Calendar></Calendar>
          <Tooltip></Tooltip>
          <LoginForm></LoginForm>
          <LineText></LineText>
          <LightDropdown></LightDropdown>
          <PlayerLoading></PlayerLoading>
          <DashedLoading></DashedLoading>
          <LikeUnlike></LikeUnlike>
        </div>
        <div className="grid__column">
          <InputWithIcon></InputWithIcon>
          <ProgressBar></ProgressBar>
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
          <SearchForm></SearchForm>
          <Notification></Notification>
          <TextGradient></TextGradient>
          <DotsLoading></DotsLoading>
          <FlipCard></FlipCard>
          <AvatarList></AvatarList>
          <NotiBell></NotiBell>
          <FadeLoading></FadeLoading>
          <EffectButton></EffectButton>
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
    </GridStyles>
  );
};

export default Grid;
