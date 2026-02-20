import React from "react";
import "./JadwalKegiatanScLps.css";

const JadwalKegiatanScLps = () => {
  return (
    <React.Fragment>
      <div className="parent-jadwal-kegiatan-sc-lps">
        <h2 className="title-jadwal-kegiatan-sc-lps">Jadwal Kegiatan</h2>
        <p className="desk-jadwal-kegiatan">
          Berikut merupakan gambaran untuk jadwal kegiatan Supercamp yang akan
          diadakan di Dekat Universitas Indonesia (Depok) dan area sekitar
          Universitas Gadjah Mada (Yogyakarta)
        </p>
        <div className="box-img-jadwal-kegiatan">
          <img
            src="/images/jadwal-belajar/senin-jumat.jpeg"
            alt="Bimbel Spesialis Masuk Kedokteran"
            className="img-jadwal-kegiatan-sc-lps"
          />
          <img
            src="/images/jadwal-belajar/sabtu.jpeg"
            alt="Bimbel Spesialis Masuk Kedokteran"
            className="img-jadwal-kegiatan-sc-lps"
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default JadwalKegiatanScLps;
