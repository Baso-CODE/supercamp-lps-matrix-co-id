import React from "react";
import fasilitasCamp from "../../assets/Supercamp/fasilitas_sc/fasilitas.webp";
import dave_1 from "../../assets/Supercamp/venue/sc_lps_1.jpeg";
import dave_2 from "../../assets/Supercamp/venue/sc_lps_2.jpeg";
import dave_3 from "../../assets/Supercamp/venue/sc_lps_3.jpeg";
import dave_4 from "../../assets/Supercamp/venue/sc_lps_4.png";
import "./FasilitasScLps.css";

const FasilitasScLps = () => {
  return (
    <React.Fragment>
      <div className="parent-fasilitas-supercamp-lps">
        <div className="box-fasilitas-sc-lps">
          <h1 className="title-fasilitas-sc-lps">
            Fasilitas Super dari Supercamp
          </h1>

          <div className="child-box-fasilitas-sc-lps">
            <img
              src={fasilitasCamp}
              alt="Fasilitas lengkap Supercamp SNBT berupa ruang belajar nyaman, asrama, dan program bimbel intensif UTBK"
              className="img-fasilitas-sc-lps"
              loading="lazy"
            />
          </div>

          <div className="parent-img-dave">
            <img
              src={dave_1}
              alt="Suasana ruang belajar peserta Supercamp SNBT dengan sistem karantina intensif"
              className="img-dave"
              loading="lazy"
            />
            <img
              src={dave_2}
              alt="Kegiatan belajar bersama mentor pada program bimbel karantina SNBT"
              className="img-dave"
              loading="lazy"
            />
            <img
              src={dave_3}
              alt="Fasilitas penginapan peserta Supercamp untuk persiapan UTBK dan SNBT"
              className="img-dave"
              loading="lazy"
            />
            <img
              src={dave_4}
              alt="Lingkungan venue Supercamp SNBT yang nyaman dan kondusif untuk belajar"
              className="img-dave"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default FasilitasScLps;
