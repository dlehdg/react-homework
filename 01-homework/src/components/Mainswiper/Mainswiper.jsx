import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "./Mainswiper.css";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function MainSwiper() {
  return (
    <div>
      <Swiper
        className="swiper1"
        slidesPerView={1}
        modules={[Pagination, Navigation]}
        navigation={{
          nextEl: ".next-slide-button",
          prevEl: ".prev-slide-button",
        }}
        pagination={{ clickable: true, type: "fraction" }}
        autoplay={{ delay: 5000 }}
        loop={true}
      >
        <SwiperSlide>
          <img src="/images/main/main-swiper/mainbanner1.svg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/main/main-swiper/mainbanner2.svg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/main/main-swiper/mainbanner3.svg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/main/main-swiper/mainbanner4.svg" alt="" />
        </SwiperSlide>
      </Swiper>

      <div className="swiper-button-prev prev-slide-button swiper-button-prev1">
        <img src="/images/main/swiper-button1.svg" alt="" />
      </div>
      <div className="swiper-button-next next-slide-button swiper-button-next1">
        <img src="/images/main/swiper-button1-right.svg" alt="" />
      </div>
    </div>
  );
}

export default MainSwiper;
