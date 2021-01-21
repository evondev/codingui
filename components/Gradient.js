import React, { useEffect } from "react";
import Template from "./Template";

const GradientDefault = ({ number = 1, dir = "to right", color1, color2 }) => {
  return (
    <Template
      title={`GradientBackground #${number}`}
      source="gradient"
      html={`
        <div class="gradient${number}"></div>
        `}
      htmlCopy={`
        <div class="gradient${number}"></div>
        `}
      css={`
        .gradient${number} {
          width: 100%;
          height: 150px;
          border-radius: 8px;
          background-image: linear-gradient(${dir}, #${color1}, #${color2});
        }
      `}
      cssCopy={`background-image: linear-gradient(
              ${dir},
              #${color1},
              #${color2}
            );`}
    ></Template>
  );
};

export const Gradient1 = () =>
  GradientDefault({
    number: 1,
    color1: "f40076",
    color2: "df98fa",
  });
export const Gradient2 = () =>
  GradientDefault({
    number: 2,
    color1: "d6ff7f",
    color2: "00b3cc",
  });
export const Gradient3 = () =>
  GradientDefault({
    number: 3,
    color1: "cb5eee",
    color2: "4be1ec",
  });
export const Gradient4 = () =>
  GradientDefault({
    number: 4,
    color1: "0b63f6",
    color2: "003cc5",
  });
export const Gradient5 = () =>
  GradientDefault({
    number: 5,
    color1: "df98fa",
    color2: "9055ff",
  });
export const Gradient6 = () =>
  GradientDefault({
    number: 6,
    color1: "FFA70F",
    color2: "E33ED9",
  });
export const Gradient7 = () =>
  GradientDefault({
    number: 7,
    color1: "1ABCF4",
    color2: "5DEFB8",
  });
export const Gradient8 = () =>
  GradientDefault({
    number: 8,
    color1: "1BF67B",
    color2: "0D736E",
  });
export const Gradient9 = () =>
  GradientDefault({
    number: 9,
    color1: "D73350",
    color2: "FC6F69",
  });
export const Gradient10 = () =>
  GradientDefault({
    number: 10,
    color1: "A73EF5",
    color2: "FB53E1",
  });
export const Gradient11 = () =>
  GradientDefault({
    number: 11,
    color1: "FFCD2B",
    color2: "FB07EE",
  });
export const Gradient12 = () =>
  GradientDefault({
    number: 12,
    color1: "00FB8E",
    color2: "4101B7",
  });
export const Gradient13 = () =>
  GradientDefault({
    number: 13,
    color1: "FE0C6B",
    color2: "29055E",
    dir: "to right bottom",
  });
export const Gradient14 = () =>
  GradientDefault({
    number: 14,
    color1: "FF7C2C",
    color2: "0BC799",
  });
export const Gradient15 = () =>
  GradientDefault({
    number: 15,
    color1: "37CCFF",
    color2: "7B22FF",
  });
