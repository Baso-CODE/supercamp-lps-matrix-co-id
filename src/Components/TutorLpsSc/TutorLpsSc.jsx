import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import tutor_1 from "../../assets/Supercamp/tutor/teacher_1.webp";
import tutor_2 from "../../assets/Supercamp/tutor/teacher_2.webp";
import tutor_3 from "../../assets/Supercamp/tutor/teacher_3.webp";
import tutor_4 from "../../assets/Supercamp/tutor/teacher_4.webp";
import "./TutorLpsSc.css";

const TutorLpsSc = () => {
  const settings = {
    dots: false,
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    className: "button-slider",
  };
  return (
    <React.Fragment>
      <div className="parent-all-tutor-lps">
        <h1 className="text-all-tutor-lps">Our Professional Teacher</h1>
        <div className="slider-top-lps" style={{ background: "" }}>
          <Slider {...settings}>
            <div className="top-slider-lps">
              <div className="slider">
                <img
                  className="cta-lps"
                  src={tutor_1}
                  alt="Program Bimbel - Les Privat SBMPTN"
                />
              </div>
            </div>
            <div className="top-slider-lps">
              <div className="slider">
                <img
                  className="cta-lps"
                  src={tutor_2}
                  alt="Program Bimbel - Les Privat SBMPTN"
                />
              </div>
            </div>
            <div className="top-slider-lps">
              <div className="slider">
                <img
                  className="cta-lps"
                  src={tutor_3}
                  alt="Program Bimbel - Les Privat SBMPTN"
                />
              </div>
            </div>
            <div className="top-slider-lps">
              <div className="slider">
                <img
                  className="cta-lps"
                  src={tutor_4}
                  alt="Program Bimbel - Les Privat SBMPTN"
                />
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </React.Fragment>
  );
};

export default TutorLpsSc;
