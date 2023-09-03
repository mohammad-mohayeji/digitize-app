import React from "react";
import ChevronLeftIcon from "../../node_modules/@heroicons/react/20/solid/ChevronLeftIcon";
import ChevronRightIcon from "../../node_modules/@heroicons/react/20/solid/ChevronRightIcon";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const divStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  height: "400px",
};

const slideImages = [
  {
    url: "https://s8.uupload.ir/files/620b413c91ebb4a5d0bc37ae268f9e0745ce803c_1665865368_tnrl.jpg",
    caption: "Slide 1",
  },
  {
    url: "https://s8.uupload.ir/files/d593fccf72a9e8120a2a25189e493aae090f0899_1682493893_fej6.jpg",
    caption: "Slide 3",
  },
];

const buttonStyle = {
  width: "35px",
  background: "#fff",
  borderRadius: "50%",
};

const properties = {
  prevArrow: (
    <button className="ml-3" style={{ ...buttonStyle }}>
      <ChevronLeftIcon />
    </button>
  ),
  nextArrow: (
    <button className="mr-3" style={{ ...buttonStyle }}>
      <ChevronRightIcon />
    </button>
  ),
};

export default function ImageSlider() {
  return (
    <div className="slide-container mb-8">
      <Slide indicators={true} {...properties}>
        {slideImages.map((slideImage, index) => (
          <div key={index}>
            <div style={{ ...divStyle, backgroundImage: `url(${slideImage.url})` }}></div>
          </div>
        ))}
      </Slide>
    </div>
  );
}