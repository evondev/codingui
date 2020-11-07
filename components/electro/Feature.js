import React from "react";
import { FeatureStyles } from "./styles/FeatureStyles";
import Slider from "react-slick";
import FeatureItem from "./FeatureItem";

const sliderOpts = {
  autoplay: true,
  infinite: true,
  draggable: true,
  pauseOnFocus: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false,
  touchThreshold: 100,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const Feature = () => {
  return (
    <FeatureStyles>
      <Slider {...sliderOpts}>
        <FeatureItem
          category="Fashion men"
          title="Apple Watch 5"
          heading="Watch"
          image="img-apple-watch-rtl.png"
          background="red"
        ></FeatureItem>
        <FeatureItem
          category="Fashion men"
          title="Asus Zenbook Pro"
          heading="Devices"
          image="img-zenbook.png"
          background="green"
        ></FeatureItem>
        <FeatureItem
          category="Fashion men"
          title="Apple Watch 5"
          heading="Access"
          image="img-drone.png"
          background="orange"
        ></FeatureItem>
        <FeatureItem
          category="Fashion men"
          title="Apple Watch 5"
          heading="Watch"
          image="img-apple-watch-rtl.png"
          background="red"
        ></FeatureItem>
        <FeatureItem
          category="Fashion men"
          title="Asus Zenbook Pro"
          heading="Devices"
          image="img-zenbook.png"
          background="green"
        ></FeatureItem>
        <FeatureItem
          category="Fashion men"
          title="Apple Watch 5"
          heading="Access"
          image="img-drone.png"
          background="orange"
        ></FeatureItem>
        <FeatureItem
          category="Fashion men"
          title="Asus Zenbook Pro"
          heading="Devices"
          image="img-zenbook.png"
          background="blue"
        ></FeatureItem>
      </Slider>
    </FeatureStyles>
  );
};

export default Feature;
