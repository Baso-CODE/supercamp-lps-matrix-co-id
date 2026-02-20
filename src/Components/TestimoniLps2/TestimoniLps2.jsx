import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import testimoni1 from "../../assets/Supercamp/testimoni/1.webp";
import testimoni10 from "../../assets/Supercamp/testimoni/10.webp";
import testimoni11 from "../../assets/Supercamp/testimoni/11.webp";
import testimoni12 from "../../assets/Supercamp/testimoni/12.webp";
import testimoni13 from "../../assets/Supercamp/testimoni/13.webp";
import testimoni14 from "../../assets/Supercamp/testimoni/14.webp";
import testimoni15 from "../../assets/Supercamp/testimoni/15.webp";
import testimoni16 from "../../assets/Supercamp/testimoni/16.webp";
import testimoni17 from "../../assets/Supercamp/testimoni/17.webp";
import testimoni18 from "../../assets/Supercamp/testimoni/18.webp";
import testimoni19 from "../../assets/Supercamp/testimoni/19.webp";
import testimoni2 from "../../assets/Supercamp/testimoni/2.webp";
import testimoni20 from "../../assets/Supercamp/testimoni/20.webp";
import testimoni21 from "../../assets/Supercamp/testimoni/21.webp";
import testimoni22 from "../../assets/Supercamp/testimoni/22.webp";
import testimoni23 from "../../assets/Supercamp/testimoni/23.webp";
import testimoni24 from "../../assets/Supercamp/testimoni/24.webp";
import testimoni25 from "../../assets/Supercamp/testimoni/25.webp";
import testimoni26 from "../../assets/Supercamp/testimoni/26.webp";
import testimoni27 from "../../assets/Supercamp/testimoni/27.webp";
import testimoni28 from "../../assets/Supercamp/testimoni/28.webp";
import testimoni29 from "../../assets/Supercamp/testimoni/29.webp";
import testimoni3 from "../../assets/Supercamp/testimoni/3.webp";
import testimoni30 from "../../assets/Supercamp/testimoni/30.webp";
import testimoni31 from "../../assets/Supercamp/testimoni/31.webp";
import testimoni32 from "../../assets/Supercamp/testimoni/32.webp";
import testimoni33 from "../../assets/Supercamp/testimoni/33.webp";
import testimoni34 from "../../assets/Supercamp/testimoni/34.webp";
import testimoni35 from "../../assets/Supercamp/testimoni/35.webp";
import testimoni36 from "../../assets/Supercamp/testimoni/36.webp";
import testimoni37 from "../../assets/Supercamp/testimoni/37.webp";
import testimoni38 from "../../assets/Supercamp/testimoni/38.webp";
import testimoni39 from "../../assets/Supercamp/testimoni/39.webp";
import testimoni4 from "../../assets/Supercamp/testimoni/4.webp";
import testimoni40 from "../../assets/Supercamp/testimoni/40.webp";
import testimoni41 from "../../assets/Supercamp/testimoni/41.webp";
import testimoni5 from "../../assets/Supercamp/testimoni/5.webp";
import testimoni6 from "../../assets/Supercamp/testimoni/6.webp";
import testimoni7 from "../../assets/Supercamp/testimoni/7.webp";
import testimoni8 from "../../assets/Supercamp/testimoni/8.webp";
import testimoni9 from "../../assets/Supercamp/testimoni/9.webp";
import "./TestimoniLps2.css";

const TestimoniLps2 = () => {
  return (
    <React.Fragment>
      <div className="box-testimoni-lps-2">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          // pagination={{
          //   clickable: true,
          // }}
          autoplay={{
            delay: 2000, // Delay in ms between slides
            disableOnInteraction: false, // Keeps autoplay even after user interaction
          }}
          breakpoints={{
            // When the window width is >= 640px, show 2 slides
            640: {
              slidesPerView: 1,
            },
            // When the window width is >= 768px, show 3 slides
            768: {
              slidesPerView: 1,
            },
            // When the window width is >= 1024px, show 4 slides
            1024: {
              slidesPerView: 3,
            },
          }}
          modules={[Autoplay]}
          className="mySwiper">
          <SwiperSlide>
            <img
              src={testimoni1}
              alt="Bimbel SNBT Masuk UI UGM ITB Undip Unpad"
              className="img-testimoni-lps2"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={testimoni2}
              alt="Bimbel SNBT Masuk UI UGM ITB Undip Unpad"
              className="img-testimoni-lps2"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={testimoni3}
              alt="Bimbel SNBT Masuk UI UGM ITB Undip Unpad"
              className="img-testimoni-lps2"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={testimoni4}
              alt="Bimbel SNBT Masuk UI UGM ITB Undip Unpad"
              className="img-testimoni-lps2"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={testimoni5}
              alt="Bimbel SNBT Masuk UI UGM ITB Undip Unpad"
              className="img-testimoni-lps2"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={testimoni6}
              alt="Bimbel SNBT Masuk UI UGM ITB Undip Unpad"
              className="img-testimoni-lps2"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={testimoni7}
              alt="Bimbel SNBT Masuk UI UGM ITB Undip Unpad"
              className="img-testimoni-lps2"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={testimoni8}
              alt="Bimbel SNBT Masuk UI UGM ITB Undip Unpad"
              className="img-testimoni-lps2"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={testimoni9}
              alt="Bimbel SNBT Masuk UI UGM ITB Undip Unpad"
              className="img-testimoni-lps2"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={testimoni10}
              alt="Bimbel SNBT Masuk UI UGM ITB Undip Unpad"
              className="img-testimoni-lps2"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={testimoni11}
              alt="Bimbel SNBT Masuk UI UGM ITB Undip Unpad"
              className="img-testimoni-lps2"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={testimoni12}
              alt="Bimbel SNBT Masuk UI UGM ITB Undip Unpad"
              className="img-testimoni-lps2"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={testimoni13}
              alt="Bimbel SNBT Masuk UI UGM ITB Undip Unpad"
              className="img-testimoni-lps2"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={testimoni14}
              alt="Bimbel SNBT Masuk UI UGM ITB Undip Unpad"
              className="img-testimoni-lps2"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={testimoni15}
              alt="Bimbel SNBT Masuk UI UGM ITB Undip Unpad"
              className="img-testimoni-lps2"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={testimoni16}
              alt="Bimbel SNBT Masuk UI UGM ITB Undip Unpad"
              className="img-testimoni-lps2"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={testimoni17}
              alt="Bimbel SNBT Masuk UI UGM ITB Undip Unpad"
              className="img-testimoni-lps2"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={testimoni18}
              alt="Bimbel SNBT Masuk UI UGM ITB Undip Unpad"
              className="img-testimoni-lps2"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={testimoni19}
              alt="Bimbel SNBT Masuk UI UGM ITB Undip Unpad"
              className="img-testimoni-lps2"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={testimoni20}
              alt="Bimbel SNBT Masuk UI UGM ITB Undip Unpad"
              className="img-testimoni-lps2"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={testimoni21}
              alt="Bimbel SNBT Masuk UI UGM ITB Undip Unpad"
              className="img-testimoni-lps2"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={testimoni22}
              alt="Bimbel SNBT Masuk UI UGM ITB Undip Unpad"
              className="img-testimoni-lps2"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={testimoni23}
              alt="Bimbel SNBT Masuk UI UGM ITB Undip Unpad"
              className="img-testimoni-lps2"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={testimoni24}
              alt="Bimbel SNBT Masuk UI UGM ITB Undip Unpad"
              className="img-testimoni-lps2"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={testimoni25}
              alt="Bimbel SNBT Masuk UI UGM ITB Undip Unpad"
              className="img-testimoni-lps2"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={testimoni26}
              alt="Bimbel SNBT Masuk UI UGM ITB Undip Unpad"
              className="img-testimoni-lps2"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={testimoni27}
              alt="Bimbel SNBT Masuk UI UGM ITB Undip Unpad"
              className="img-testimoni-lps2"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={testimoni28}
              alt="Bimbel SNBT Masuk UI UGM ITB Undip Unpad"
              className="img-testimoni-lps2"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={testimoni29}
              alt="Bimbel SNBT Masuk UI UGM ITB Undip Unpad"
              className="img-testimoni-lps2"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={testimoni30}
              alt="Bimbel SNBT Masuk UI UGM ITB Undip Unpad"
              className="img-testimoni-lps2"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={testimoni31}
              alt="Bimbel SNBT Masuk UI UGM ITB Undip Unpad"
              className="img-testimoni-lps2"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={testimoni32}
              alt="Bimbel SNBT Masuk UI UGM ITB Undip Unpad"
              className="img-testimoni-lps2"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={testimoni33}
              alt="Bimbel SNBT Masuk UI UGM ITB Undip Unpad"
              className="img-testimoni-lps2"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={testimoni34}
              alt="Bimbel SNBT Masuk UI UGM ITB Undip Unpad"
              className="img-testimoni-lps2"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={testimoni35}
              alt="Bimbel SNBT Masuk UI UGM ITB Undip Unpad"
              className="img-testimoni-lps2"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={testimoni36}
              alt="Bimbel SNBT Masuk UI UGM ITB Undip Unpad"
              className="img-testimoni-lps2"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={testimoni37}
              alt="Bimbel SNBT Masuk UI UGM ITB Undip Unpad"
              className="img-testimoni-lps2"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={testimoni38}
              alt="Bimbel SNBT Masuk UI UGM ITB Undip Unpad"
              className="img-testimoni-lps2"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={testimoni39}
              alt="Bimbel SNBT Masuk UI UGM ITB Undip Unpad"
              className="img-testimoni-lps2"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={testimoni40}
              alt="Bimbel SNBT Masuk UI UGM ITB Undip Unpad"
              className="img-testimoni-lps2"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={testimoni41}
              alt="Bimbel SNBT Masuk UI UGM ITB Undip Unpad"
              className="img-testimoni-lps2"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </React.Fragment>
  );
};

export default TestimoniLps2;
