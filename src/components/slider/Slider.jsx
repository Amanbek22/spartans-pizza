import React from "react";
import ReactSlider from "react-slick";

function Slider() {
  const setting = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
  };
  return (
    <div className="container">
      <ReactSlider {...setting}>
        <div className="testSliderCard">1</div>
        <div className="testSliderCard">2</div>
        <div className="testSliderCard">3</div>
        <div className="testSliderCard">4</div>
        <div className="testSliderCard">5</div>
        <div className="testSliderCard">6</div>
        <div className="testSliderCard">7</div>
        <div className="testSliderCard">8</div>
        <div className="testSliderCard">9</div>
      </ReactSlider>
    </div>
  );
}

export default Slider;
