import React, { useState } from "react";
import "./KegiatanScLps.css";

const KegiatanScLps = () => {
  const [activeLocation, setActiveLocation] = useState("depok");

  const basePath = "/images/kegiatan-supercamp/";

  // 2. Data nama file untuk masing-masing lokasi
  const dataJogja = [
    "/jogja/kegiatan-wisata.webp",
    "/jogja/motivation-training.webp",
    "/jogja/fun-games-bersama-siswa.webp",
    "/jogja/campus-tour-rektor-ugm.webp",
    "/jogja/sesi-privat-one-on-one.webp",
    "/jogja/mini-games.webp",
    "/jogja/kegiatan-bimbingan-sistem-kelas.webp",
    "/jogja/campus-tour-ugm-fakultas-ekonomi-bisnis.webp",
  ];

  const dataDepok = [
    "/depok/campus-tour-depan-kantor-rektor.webp",
    "/depok/campus-tour.webp",
    "/depok/kegiatan-belajar-karantina-one-on-one.webp",
    "/depok/kegiatan-belajar-karantina-sistem-kelas.webp",
    "/depok/konsultasi-progress-siswa.webp",
    "/depok/motivation-training.webp",
    "/depok/perjalanan-menuju-kampus.webp",
    "/depok/sesi-intensif-quiz-online.webp",
    "/depok/sesi-tryout-online-utbk-snbt.webp",
    "/depok/workshop-strategy-lolos-utbk.webp",
    "/depok/siswa-supercamp-2024.jpeg",
    "/depok/siswa-supercamp-2025.jpeg",
  ];

  // Helper untuk menentukan gambar mana yang ditampilkan
  const currentImages = activeLocation === "depok" ? dataDepok : dataJogja;

  return (
    <div className="parent-all-kegiatan-sc-lps">
      <h1 className="title-kegiatan-sc-lps">Kegiatan Seru di Supercamp Kami</h1>

      {/* Tombol Navigasi Tab */}
      <div className="tab-container-sc">
        <button
          className={`tab-btn-sc ${activeLocation === "jogja" ? "active" : ""}`}
          onClick={() => setActiveLocation("jogja")}>
          Supercamp Jogja
        </button>
        <button
          className={`tab-btn-sc ${activeLocation === "depok" ? "active" : ""}`}
          onClick={() => setActiveLocation("depok")}>
          Supercamp Depok
        </button>
      </div>

      {/* Area Gambar (Looping) */}
      {/* Kita menggunakan key={activeLocation} agar React mereset animasi saat tab berubah */}
      <div key={activeLocation} className="content-wrapper fade-in">
        <div className="box-img-kegiatan-sc-lps">
          {currentImages.map((fileName, index) => (
            <img
              key={index}
              src={`${basePath}${fileName}`}
              alt={`Kegiatan Supercamp ${activeLocation.toUpperCase()} ${
                index + 1
              }`}
              className="img-kegiatan-sc-lps"
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default KegiatanScLps;
