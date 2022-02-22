import React from "react";
import { GridStyles } from "../styles/GridStyles";
import { Dropdown } from "./Dropdown";
import {
  InputFile,
  InputFocusEffect,
  TextField1,
  TextField2,
  TextField3,
} from "./Input";
import { SocialShare, Pagination, Countdown } from "./List";
import { CustomCheckboxToggle, CustomRadio } from "./Checkbox";
import { FlipCard } from "./Card";
import { Calendar } from "./Calendar";
import { Tabs1, Tabs5, Tabs7 } from "./Tab";
import { SocialShareButon } from "./Social";
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
          <Button2></Button2>
          <Button7></Button7>
          <CircleLoading></CircleLoading>
          <CircleLoading2></CircleLoading2>
          <BallsLoading></BallsLoading>
          <Dropdown></Dropdown>
          <TextField1></TextField1>
          <SocialShare></SocialShare>
          <CustomCheckboxToggle></CustomCheckboxToggle>
          <FlipCard></FlipCard>
          <Tabs7></Tabs7>
        </div>
        <div className="grid-column">
          <Button></Button>

          <LineLoading></LineLoading>
          <DotsLoading></DotsLoading>
          <BallLoading></BallLoading>
          <InputFile></InputFile>
          <TextField2></TextField2>
          <Pagination></Pagination>
          <CustomRadio></CustomRadio>
          <Calendar></Calendar>
          <Tabs5></Tabs5>
          <SocialShareButon></SocialShareButon>
        </div>
        <div className="grid-column">
          <Button3></Button3>
          <Button4></Button4>
          <Button8></Button8>
          <Button5></Button5>
          <Button6></Button6>
          <FadeLoading></FadeLoading>
          <DashedLoading></DashedLoading>
          <SquareLoading></SquareLoading>
          <InputFocusEffect></InputFocusEffect>
          <TextField3></TextField3>
          <Countdown></Countdown>
          <Tabs1></Tabs1>
        </div>
      </div>
    </GridStyles>
  );
};

export default Grid;
