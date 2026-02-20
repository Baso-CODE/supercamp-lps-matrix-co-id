import React from "react";
import mm_1 from "../../assets/new/venue_supercamp_/fasilitas_bimbel_masuk_ptn_1.webp";
import mm_2 from "../../assets/new/venue_supercamp_/fasilitas_bimbel_masuk_ptn_2.webp";
import mm_3 from "../../assets/new/venue_supercamp_/fasilitas_bimbel_masuk_ptn_3.webp";
import venueUtama from "../../assets/new/venue_supercamp_/fasilitas_bimbel_supercamp_kedokteran.webp";
import iconLokasi from "../../assets/Supercamp/untungnya supercamp/icon_check.webp";
import "./VenueScLps.css";

const VenueScLps = () => {
  // const settings = {
  //   dots: false,
  //   autoplay: true,
  //   autoplaySpeed: 3000,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 4,
  //   slidesToScroll: 1,
  //   arrows: true,
  //   className: "button-slider",
  // };
  return (
    <React.Fragment>
      <div className="text-img-venue-sc-lps">
        <img
          src={venueUtama}
          alt="Les Privat CBT UGM"
          className="venue-utama-sc-lps"
        />
        <div className="combine-text-img-venue">
          <span className="text-venue-sc-lps">VENUE SUPERCAMP</span>
          <h1 className="title-venue-sc-lps">
            FASILITAS MENGINAP SUPER NYAMAN
          </h1>
          <p className="desk-sc-lps">
            Fasilitas hotel yang super nyaman demi memaksimalkan hasil belajar
            siswa <br className="break-desk-venue" /> Supercamp dan berada
            ditempat strategis berdekatan dengan kampus UGM
          </p>
          <div className="parent-rincian-venue-sc-lps">
            <img
              src={mm_1}
              alt="Les Privat CBT UGM"
              className="img-rincian-venue-sc-lps"
            />
            <img
              src={mm_2}
              alt="Les Privat CBT UGM"
              className="img-rincian-venue-sc-lps"
            />
            <img
              src={mm_3}
              alt="Les Privat CBT UGM"
              className="img-rincian-venue-sc-lps"
            />
          </div>
        </div>
      </div>
      {/* <div className="slider-top-lps" style={{ background: "" }}>
            <Slider {...settings}>
              <div className="top-slider-lps">
                <div className="slider">
                  <img
                    className="gallery-kegiatan-lps"
                    src={mm_1}
                    alt="Program Bimbel - Les Privat SBMPTN"
                  />
                </div>
              </div>
              <div className="top-slider-lps">
                <div className="slider">
                  <img
                    className="gallery-kegiatan-lps"
                    src={mm_2}
                    alt="Program Bimbel - Les Privat SBMPTN"
                  />
                </div>
              </div>
              <div className="top-slider-lps">
                <div className="slider">
                  <img
                    className="gallery-kegiatan-lps"
                    src={mm_3}
                    alt="Program Bimbel - Les Privat SBMPTN"
                  />
                </div>
              </div>
              <div className="top-slider-lps">
                <div className="slider">
                  <img
                    className="gallery-kegiatan-lps"
                    src={mm_4}
                    alt="Program Bimbel - Les Privat SBMPTN"
                  />
                </div>
              </div>
              <div className="top-slider-lps">
                <div className="slider">
                  <img
                    className="gallery-kegiatan-lps"
                    src={mm_5}
                    alt="Program Bimbel - Les Privat SBMPTN"
                  />
                </div>
              </div>
              <div className="top-slider-lps">
                <div className="slider">
                  <img
                    className="gallery-kegiatan-lps"
                    src={mm_6}
                    alt="Program Bimbel - Les Privat SBMPTN"
                  />
                </div>
              </div>
              <div className="top-slider-lps">
                <div className="slider">
                  <img
                    className="gallery-kegiatan-lps"
                    src={mm_7}
                    alt="Program Bimbel - Les Privat SBMPTN"
                  />
                </div>
              </div>
            </Slider>
            </div> */}

      {/* LOKASI & WAKTU */}
      <div className="parent-lokasi-karantina-sc-lps">
        <h1 className="title-lokasi-karantina-sc-lps">Lokasi Karantina</h1>
        <span className="parent-text-icon-lokasi-sc-lps">
          <img
            src={iconLokasi}
            alt="Les Privat CBT UGM"
            className="icon-lokasi-sc-lps"
          />{" "}
          Jabodetabek dilaksanakan di Dave Apartment, Depok (dekat Universitas
          Indonesia)
        </span>
        <span className="parent-text-icon-lokasi-sc-lps">
          <img
            src={iconLokasi}
            alt="Les Privat CBT UGM"
            className="icon-lokasi-sc-lps"
          />{" "}
          Yogyakarta dilaksanakan di Hotel MM UGM, Yogyakarta (dekat Universitas
          Gadjah Mada)
        </span>
      </div>

      <div className="parent-lokasi-karantina-sc-lps">
        <h1 className="title-lokasi-karantina-sc-lps">Waktu Karantina</h1>
        <span className="parent-text-icon-lokasi-sc-lps">
          <img
            src={iconLokasi}
            alt="Les Privat CBT UGM"
            className="icon-lokasi-sc-lps"
          />{" "}
          Program INTENSIF dapat dimulai SEKARANG
        </span>
        <span className="parent-text-icon-lokasi-sc-lps">
          <img
            src={iconLokasi}
            alt="Les Privat CBT UGM"
            className="icon-lokasi-sc-lps"
          />{" "}
          Program Supercamp 2026 Gelombang 1 pada bulan APRIL
        </span>
        <span className="parent-text-icon-lokasi-sc-lps">
          <img
            src={iconLokasi}
            alt="Les Privat CBT UGM"
            className="icon-lokasi-sc-lps"
          />{" "}
          Program Supercamp 2026 Gelombang 2 pada bulan MEI
        </span>
      </div>
    </React.Fragment>
  );
};

export default VenueScLps;
