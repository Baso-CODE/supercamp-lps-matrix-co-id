import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import alumni_1 from "../../assets/Supercamp/alumni kedokteran/Amodya.webp";
import alumni_2 from "../../assets/Supercamp/alumni kedokteran/Aprilia.webp";
import alumni_3 from "../../assets/Supercamp/alumni kedokteran/Iren.webp";
import alumni_4 from "../../assets/Supercamp/alumni kedokteran/Lyli.webp";
import alumni_5 from "../../assets/Supercamp/alumni kedokteran/Maryam.webp";
import alumni_6 from "../../assets/Supercamp/alumni kedokteran/Muthia.webp";
import alumni_7 from "../../assets/Supercamp/alumni kedokteran/Nabila.webp";
import alumni_8 from "../../assets/Supercamp/alumni kedokteran/Nadila.webp";
import alumni_9 from "../../assets/Supercamp/alumni kedokteran/Nadya.webp";
import alumni_10 from "../../assets/Supercamp/alumni kedokteran/Naufal.webp";
import alumni_11 from "../../assets/Supercamp/alumni kedokteran/Nisrina.webp";
import alumni_12 from "../../assets/Supercamp/alumni kedokteran/Qonita.webp";
import alumni_13 from "../../assets/Supercamp/alumni kedokteran/Raida.webp";
import alumni_14 from "../../assets/Supercamp/alumni kedokteran/Riqqah.webp";
import alumni_15 from "../../assets/Supercamp/alumni kedokteran/Rizky.webp";
import alumni_16 from "../../assets/Supercamp/alumni kedokteran/Rusy.webp";
import alumni_17 from "../../assets/Supercamp/alumni kedokteran/Salma.webp";
import alumni_18 from "../../assets/Supercamp/alumni kedokteran/Sausan.webp";
import alumni_19 from "../../assets/Supercamp/alumni kedokteran/Syaugi.webp";
import alumni_20 from "../../assets/Supercamp/alumni kedokteran/aLYA.webp";
import alumni_21 from "../../assets/Supercamp/alumni kedokteran/anisa.webp";
import alumni_22 from "../../assets/Supercamp/alumni kedokteran/cHAU.webp";
import alumni_23 from "../../assets/Supercamp/alumni kedokteran/kANIA.webp";
import alumni_24 from "../../assets/Supercamp/alumni kedokteran/mariska.webp";
import alumni_25 from "../../assets/Supercamp/alumni kedokteran/rASAGAMA.webp";
import alumni_26 from "../../assets/Supercamp/alumni kedokteran/vasya.webp";
import "./AlumniKedokteranLps.css";

const AlumniKedokteranLps = () => {
  const alumniImages = [
    alumni_1,
    alumni_2,
    alumni_3,
    alumni_4,
    alumni_5,
    alumni_6,
    alumni_7,
    alumni_8,
    alumni_9,
    alumni_10,
    alumni_11,
    alumni_12,
    alumni_13,
    alumni_14,
    alumni_15,
    alumni_16,
    alumni_17,
    alumni_18,
    alumni_19,
    alumni_20,
    alumni_21,
    alumni_22,
    alumni_23,
    alumni_24,
    alumni_25,
    alumni_26,
  ];

  const settings = {
    dots: false,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    speed: 800,
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: true,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: { slidesToShow: 5 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 3, arrows: false },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 2, arrows: false },
      },
    ],
  };

  return (
    <section className="parent-box-alumni-fk-lps">
      <div className="container-alumni">
        <h2 className="title-alumni-kedokteran-lps">
          Alumni Pendidikan Dokter <br />
          <span>di Kampus Favorit</span>
        </h2>

        <Slider {...settings} className="slider-fk-wrapper">
          {alumniImages.map((img, index) => (
            <div key={index} className="item-slider-fk">
              <div className="card-alumni">
                <img
                  className="alumni-img"
                  src={img}
                  alt="Alumni Kedokteran Bimbel LPS"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default AlumniKedokteranLps;
