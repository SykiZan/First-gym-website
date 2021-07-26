import { useState } from "react";
import "./Slider.css";
import slide_1 from "../../assets/slide_1.jpg";
import slide_2 from "../../assets/slide_2.jpg";
import slide_3 from "../../assets/slide_3.jpg";
import slide_4 from "../../assets/slide_4.jpg";
import slide_5 from "../../assets/slide_5.jpg";
import slide_6 from "../../assets/slide_6.jpg";
import slide_7 from "../../assets/slide_7.jpg";
import slide_8 from "../../assets/slide_8.jpg";

function Slider() {
  const images = [
    { image: slide_1 },
    { image: slide_2 },
    { image: slide_3 },
    { image: slide_4 },
    { image: slide_5 },
    { image: slide_6 },
    { image: slide_7 },
    { image: slide_8 },
  ];

  const [current, setCurrent] = useState(0);
  const sliderLength = images.length;

  const nextSlide = () => {
    if (current === sliderLength - 1) setCurrent(0);
    else setCurrent(current + 1);
  };
  const prevSlide = () => {
    if (current === 0) setCurrent(sliderLength - 1);
    else setCurrent(current - 1);
  };

  return (
    <div id="slider">
      <h1 className="slider-header">Our Facilities</h1>
      <button className="arrow left-arrow" onClick={prevSlide}>
        &larr;
      </button>
      <button className="arrow right-arrow" onClick={nextSlide}>
        &rarr;
      </button>
      <div className="images">
        {images.map((img, index) => {
          return (
            <div
              className={
                index === current ? " slide-image active" : "slide-image"
              }
              key={index}
            >
              {index === current && (
                <img src={img.image} alt="gym" className="slide" />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Slider;
