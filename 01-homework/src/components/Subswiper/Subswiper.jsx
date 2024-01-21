import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "./Subswiper.css";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function Subswiper({ itemlist }) {
  return (
    <div>
      <div className="today-products-title">이 상품 어때요?</div>

      <div>
        <Swiper
          className="swiper2"
          slidesPerView={4}
          slidesPerGroup={4}
          spaceBetween={100}
          modules={[Pagination, Navigation]}
          navigation={{
            nextEl: ".next-slide-button2",
            prevEl: ".prev-slide-button2",
          }}
          pagination={{
            clickable: true,
            type: "fraction",
            el: ".swiper-pagination2",
          }}
          autoplay={{ delay: 5000 }}
          loop={true}
        >
          {itemlist.map((item) => (
            <SwiperSlide key={item.desc}>
              <div className="today-card">
                <figure>
                  <img src={item.img} alt="" />
                </figure>
                <div>
                  <span class="brand">[{item.brand}]</span>
                  <span class="desc">{item.desc}</span>
                </div>
                <div>
                  <span class="discount">{item.discount}%</span>
                  <span class="price">{item.price}원</span>
                </div>
                <span class="real-price">{item.realprice}원</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="swiper-button-prev prev-slide-button2 swiper-button-prev2">
          <img src="/images/main/swiper-button2.svg" alt="" />
        </div>
        <div className="swiper-button-next next-slide-button2 swiper-button-next2">
          <img src="/images/main/swiper-button2-right.svg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Subswiper;
