import React from "react";
import { GridStyles } from "../styles/GridStyles";
// import { LoadingButton, EffectButton, TiktokButton } from "./Button";
// import {
//   InputWithButton,
//   InputWithIcon,
//   InputFile,
//   InputFocus,
//   InputFocusEffect,
//   TextField1,
//   TextField2,
//   TextField3,
//   QuantityInput,
//   InputPassword,
//   InputSearch,
// } from "./Input";
// import { Triangle } from "./Image";
// import { Tooltip } from "./Overlay";
// import { Dropdown, LightDropdown } from "./Dropdown";
// import { ProgressBar, CircleBar } from "./Bar";
// import { SocialShare, Pagination, Countdown } from "./List";
// import { CustomCheckboxToggle, CustomRadio } from "./Checkbox";
// import { Notification, FlipCard, SimpleCard } from "./Card";
// import { Labels, Tags } from "./Tags";
// import { SearchForm, LoginForm, ContactForm, SubscribeForm } from "./Form";
// import { SingleLine, MultiLine, TextGradient } from "./Text";
// import {
//   CircleLoading,
//   LineLoading,
//   DotsLoading,
//   FadeLoading,
//   DashedLoading,
//   CircleLoading2,
//   SquareLoading,
//   DoubleCircle,
// } from "./Loading";
// import { IconOpacity, RatingStar, LikeUnlike, PlayerIcon } from "./Icon";
// import { Calendar } from "./Calendar";
// import { AvatarList } from "./List2";
// import { LineText } from "./Line";
// import { Tabs1, Tabs5, Tabs7 } from "./Tab";
// import { DropdownMenu } from "./Navigation";
// import {
//   AutocompleteSearch,
//   SimpleSearch1,
//   SimpleSearch2,
//   SimpleSearch3,
// } from "./Search";
// import { NotiBell } from "./Notification";
// import { SocialShareButon } from "./Social";
// import CourseItem, {
//   CourseItem1,
//   CourseItem2,
//   CourseItem3,
// } from "./course/CourseItem";
import {
  Button,
  Button2,
  Button3,
  Button4,
  Button5,
  Button6,
  Button7,
  Button8,
} from "./Button";
import {
  BallLoading,
  BallsLoading,
  CircleLoading,
  CircleLoading2,
  DashedLoading,
  DotsLoading,
  FadeLoading,
  LineLoading,
  SquareLoading,
} from "./Loading";

const Grid = () => {
  return (
    <GridStyles>
      <div className="grid-layout">
        <div className="grid-column">
          <Button></Button>
          <Button2></Button2>
          <Button7></Button7>
          <CircleLoading></CircleLoading>
          <CircleLoading2></CircleLoading2>
          <BallsLoading></BallsLoading>
        </div>
        <div className="grid-column">
          <Button3></Button3>
          <Button4></Button4>
          <Button8></Button8>
          <LineLoading></LineLoading>
          <DotsLoading></DotsLoading>
          <BallLoading></BallLoading>
        </div>
        <div className="grid-column">
          <Button5></Button5>
          <Button6></Button6>
          <FadeLoading></FadeLoading>
          <DashedLoading></DashedLoading>
          <SquareLoading></SquareLoading>
        </div>
      </div>
      {/* <div className="grid grid-course">
        <div className="grid__column">
          <CourseItem
            image={"/images/html-css-course.jpg"}
            title="Khoá học HTML CSS cơ bản dành cho người mới bắt đầu"
            label="Bán chạy nhất"
            price="899.000"
            coupon="EVONTET"
            link="khoa-hoc-html-css"
            cta="Mua ngay luôn"
          ></CourseItem>
        </div>
        <div className="grid__column">
          <CourseItem
            image={"/images/html-css-psd-course.png"}
            title="Khoá học HTML CSS nâng cao cắt giao diện với Pug và Sass"
            price="799.000"
            coupon="PSD100"
            link="khoa-hoc-huong-dan-cat-psd"
            cta="Mua ngay luôn"
          ></CourseItem>
        </div>
        <div className="grid__column">
          <CourseItem
            image={"/images/js-course.jpg"}
            title="Khoá học Javascript từ cơ bản tới nâng cao dành cho người mới"
            price="999.000"
            coupon="EVONJS15"
            link="khoa-hoc-js-co-ban"
            cta="Mua ngay luôn"
          ></CourseItem>
        </div>
        <div className="grid__column">
          <CourseItem
            image={"/images/js-course.jpg"}
            title="Khoá học ReactJS cơ bản đến nâng cao dành cho người mới"
            price="949.000"
            link="khoa-hoc-react-co-ban"
            cta="Mua liền"
          ></CourseItem>
        </div>
      </div> */}
      {/* <div className="grid">
        <div className="grid__column">
          <TextField1></TextField1>
          <QuantityInput></QuantityInput>
          <SquareLoading></SquareLoading>
        </div>
        <div className="grid__column">
          <TextField2></TextField2>
          <InputPassword></InputPassword>
          <DoubleCircle></DoubleCircle>
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
      </div> */}
    </GridStyles>
  );
};

export default Grid;
