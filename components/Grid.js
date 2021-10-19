import React from "react";
import { GridStyles } from "../styles/GridStyles";
import { LoadingButton, EffectButton, TiktokButton } from "./Button";
import {
  InputWithButton,
  InputWithIcon,
  InputFile,
  InputFocus,
  InputFocusEffect,
  TextField1,
  TextField2,
  TextField3,
  QuantityInput,
  InputPassword,
  InputSearch,
} from "./Input";
import { Triangle } from "./Image";
import { Tooltip } from "./Overlay";
import { Dropdown, LightDropdown } from "./Dropdown";
import { ProgressBar, CircleBar } from "./Bar";
import { SocialShare, Pagination, Countdown } from "./List";
import { CustomCheckboxToggle, CustomRadio } from "./Checkbox";
import { Notification, FlipCard, SimpleCard } from "./Card";
import { Labels, Tags } from "./Tags";
import { SearchForm, LoginForm, ContactForm, SubscribeForm } from "./Form";
import { SingleLine, MultiLine, TextGradient } from "./Text";
import {
  CircleLoading,
  LineLoading,
  DotsLoading,
  FadeLoading,
  DashedLoading,
  CircleLoading2,
} from "./Loading";
import { IconOpacity, RatingStar, LikeUnlike, PlayerIcon } from "./Icon";
import { Calendar } from "./Calendar";
import { AvatarList } from "./List2";
import { LineText } from "./Line";
import { Tabs1, Tabs5, Tabs7 } from "./Tab";
import { DropdownMenu } from "./Navigation";
import {
  AutocompleteSearch,
  SimpleSearch1,
  SimpleSearch2,
  SimpleSearch3,
} from "./Search";
import { NotiBell } from "./Notification";
import { SocialShareButon } from "./Social";
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
          <QuantityInput></QuantityInput>
        </div>
        <div className="grid__column">
          <TextField2></TextField2>
          <InputPassword></InputPassword>
        </div>
        <div className="grid__column">
          <TextField3></TextField3>
          <InputSearch></InputSearch>
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
          <LineText></LineText>
          <LightDropdown></LightDropdown>
          <DashedLoading></DashedLoading>
          <LikeUnlike></LikeUnlike>
          <SimpleSearch1></SimpleSearch1>
          <PlayerIcon></PlayerIcon>
        </div>
        <div className="grid__column">
          <SimpleSearch2></SimpleSearch2>
          <ProgressBar></ProgressBar>
          <CustomRadio></CustomRadio>
          <Labels></Labels>
          <MultiLine></MultiLine>
          <LineLoading></LineLoading>
          <InputFile></InputFile>
          <RatingStar></RatingStar>
          <Tags></Tags>
          <AutocompleteSearch></AutocompleteSearch>
          <CircleLoading2></CircleLoading2>
          <SocialShareButon></SocialShareButon>
          <SubscribeForm></SubscribeForm>
        </div>
        <div className="grid__column">
          <SimpleSearch3></SimpleSearch3>
          <TiktokButton></TiktokButton>
          <InputFocus></InputFocus>
          <InputWithButton></InputWithButton>
          <SocialShare></SocialShare>
          <CircleBar></CircleBar>
          <Countdown></Countdown>
          <Notification></Notification>
          <TextGradient></TextGradient>
          <DotsLoading></DotsLoading>
          <FlipCard></FlipCard>
          <AvatarList></AvatarList>
          <NotiBell></NotiBell>
          <FadeLoading></FadeLoading>
          <EffectButton></EffectButton>
        </div>
      </div>
      <div className="grid grid--2">
        <div className="grid__column">
          <DropdownMenu></DropdownMenu>
        </div>
        <div className="grid__column"></div>
      </div>
    </GridStyles>
  );
};

export default Grid;
