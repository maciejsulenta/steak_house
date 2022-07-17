import React, { useState, useEffect } from "react";
import "./Slider.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Autoplay } from "swiper";
import "swiper/scss";
import "swiper/scss/pagination";
import "swiper/scss/effect-cube";
import Button from "../../components/Button";
import { slidesData } from "../../assets/data/slidesData";
SwiperCore.use([Pagination, Autoplay]);

const Slider = () => {
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    const slider = slidesData.map((slide, i) => (
      <SwiperSlide key={slide.id} tag="li">
        <div className="slide-content">
          <div className="slide-content__wrapper">
            <h2
              className="slide-content__title"
              id="title"
              dangerouslySetInnerHTML={{ __html: `${slide.title}` }}
            />
            <p
              className="slide-content__text"
              dangerouslySetInnerHTML={{ __html: `${slide.text}` }}
            />
            <Button />
          </div>
        </div>
        <img src={slide.img} alt={`slide-${i}`} />
      </SwiperSlide>
    ));
    setSlides(slider);
  }, []);

  return (
    <>
      <Swiper
        id="main"
        className="swiper"
        tag="section"
        wrapperTag="ul"
        modules={[Pagination, Autoplay]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        speed={1000}
        pagination
        spaceBetween={0}
        slidesPerView={1}
      >
        {slides}
      </Swiper>
    </>
  );
};

export default Slider;
