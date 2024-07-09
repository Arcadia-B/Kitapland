import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import classic_1 from "../../Assets/classic-1.png";
import classic_2 from "../../Assets/classic-2.jpg";
import classic_3 from "../../Assets/classic-3.jpg";
import classic_4 from "../../Assets/classic-4.jpg";
import classic_5 from "../../Assets/classic-5.png";
import classic_6 from "../../Assets/classic-6.png";
import classic_7 from "../../Assets/classic-7.jpg";

export default function App() {
  return (
    <>
      <div className="container mx-auto w-full max-w-screen-lg">
        <Swiper
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
          slidesPerView={4}
        >
          <SwiperSlide>
            <img
              src={classic_1}
              alt="Classic 1"
              className="rounded-lg h-auto w-full object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={classic_2}
              alt="Classic 2"
              className="rounded-lg h-auto w-full object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={classic_3}
              alt="Classic 3"
              className="rounded-lg h-auto w-full object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={classic_4}
              alt="Classic 4"
              className="rounded-lg h-auto w-full object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={classic_5}
              alt="Classic 5"
              className="rounded-lg h-auto w-full object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={classic_6}
              alt="Classic 6"
              className="rounded-lg h-auto w-full object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={classic_7}
              alt="Classic 7"
              className="rounded-lg h-auto w-full object-cover"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
