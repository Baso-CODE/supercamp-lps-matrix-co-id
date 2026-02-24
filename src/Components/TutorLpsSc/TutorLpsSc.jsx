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
    dots: true,
    autoplay: false,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    adaptiveHeight: true,
  };

  const tutors = [
    {
      img: tutor_1,
      alt: "Tutor Supercamp spesialis UTBK SNBT dan masuk Kedokteran",
    },
    {
      img: tutor_2,
      alt: "Pengajar profesional bimbel Supercamp persiapan UTBK SNBT 2026",
    },
    {
      img: tutor_3,
      alt: "Master teacher Supercamp berpengalaman meloloskan siswa ke PTN favorit",
    },
    {
      img: tutor_4,
      alt: "Tutor karantina belajar Supercamp untuk seleksi masuk Kedokteran",
    },
  ];

  return (
    <section className="parent-all-tutor-lps">
      <h2 className="text-all-tutor-lps">
        Tutor Profesional Supercamp UTBK SNBT
      </h2>

      <p className="desk-tutor-lps">
        Tim pengajar berpengalaman yang mendampingi siswa secara intensif dalam
        persiapan UTBK SNBT dan seleksi masuk Fakultas Kedokteran serta PTN
        favorit.
      </p>

      <div className="slider-top-lps">
        <Slider {...settings}>
          {tutors.map((tutor, index) => (
            <div key={index} className="top-slider-lps">
              <div className="slider">
                <img
                  className="cta-lps"
                  src={tutor.img}
                  alt={tutor.alt}
                  loading="lazy"
                  decoding="async"
                  width="600"
                  height="750"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default TutorLpsSc;
