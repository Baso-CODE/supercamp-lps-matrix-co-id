import axios from "axios";
import React, { useEffect, useState } from "react";

import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";

import AlumniKedokteranLps from "../../Components/AlumniKedokteranLps/AlumniKedokteranLps";
import AlumniPtnLps from "../../Components/AlumniPTNLPS/AlumniPTNLPS";
import BenefitScLps from "../../Components/BenefitScLPS/BenefitScLPS";
import BottomCtaLps from "../../Components/BottomCtaLps/BottomCtaLps";
import FaqScLps from "../../Components/FaqScLps/FaqScLps";
import FasilitasScLps from "../../Components/FasilitasScLps/FasilitasScLps";
import JadwalKegiatanScLps from "../../Components/JadwalKegiatanScLps/JadwalKegiatanScLps";
import JumbotronLps from "../../Components/Jumbotron/Jumbotron";
import KegiatanScLps from "../../Components/KegiatanScLps/KegiatanScLps";
import KerjasamaHotel from "../../Components/KerjaSamaHotel/KerjaSamaHotel";
import ListAlumni from "../../Components/ListAlumni/ListAlumni";
import ListKabLps from "../../Components/ListKotaLps/ListKabLps";
import LulusanLps from "../../Components/LulusanLPS/LulusanLPS";
import PaketBelajarSnbtNew from "../../Components/PaketBelajarSnbt/PaketBelajarSnbtNew";
import PaketSupercampLps from "../../Components/PaketSupercamp/PaketSupercampLps";
import SlideCtaLps from "../../Components/SlideCtaLps/SlideCtaLps";
import TargetBelajarLps from "../../Components/TargetBelajarLps/TargetBelajarLps";
import TestimoniLps from "../../Components/TestimoniLps/TestimoniLps";
import TestimoniLps2 from "../../Components/TestimoniLps2/TestimoniLps2";
import TutorLpsSc from "../../Components/TutorLpsSc/TutorLpsSc";
import VenueScLps from "../../Components/VenueScLps/VenueScLps";
import VideoScLps from "../../Components/VideoScLps/VideoScLps";
import WaktuPelaksanaanSc from "../../Components/WaktuPelaksanaanSc/WaktuPelaksanaanSc";
import "./HalamanKotaLps.css";

const HalamanKotaLps = () => {
  const { id } = useParams();

  const [kota, setKota] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Keluar jika `id` belum tersedia
    if (!id) return;

    const getKota = async () => {
      setLoading(true);
      setError(null);

      try {
        // --- Penggunaan axios standar dan URL endpoint ---
        const response = await axios.get(
          `https://apilps.edusmart-indonesia.com/kota/${id}`,
        );
        // --- Selesai ---

        setKota(response.data);
      } catch (err) {
        console.error("Gagal mengambil data kota:", err);
        setError("Gagal memuat data kota.");
        setKota(null);
      } finally {
        setLoading(false);
      }
    };

    getKota(); // Panggil fungsi pengambilan data
  }, [id]); // Dependensi hanya perlu `id`

  // --- Penanganan UI (Loading, Error, Not Found) ---
  if (loading) {
    return <div>Memuat data kota...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!kota) {
    return <div>Data kota dengan ID {id} tidak ditemukan.</div>;
  }

  return (
    <React.Fragment>
      <Helmet>
        {/* Basic SEO */}
        <title>
          Bimbel UTBK SNBT {kota.kota} 2026 - Karantina Supercamp & Privat
          Kedokteran
        </title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content={`Bimbel UTBK SNBT ${kota.kota} terbaik 2026. Program Supercamp Karantina & Les Privat Kedokteran. Lulus UI, UGM, ITB, UNAIR lewat SIMAK UI & CBT UGM. Guru ke rumah & Online.`}
        />
        <meta
          name="keywords"
          content={`bimbel utbk snbt ${kota.kota}, les privat ptn ${kota.kota}, supercamp kedokteran 2026, karantina simak ui, cbt ugm, Bimbel LPS`}
        />
        <link
          rel="canonical"
          href={`https://supercampmatrix.com/bimbel-privat-supercamp-utbk-snbt/${kota.slug}`}
        />

        {/* Open Graph / Facebook / WhatsApp */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content={`Bimbel UTBK SNBT ${kota.kota} 2026 - Karantina Kedokteran #1`}
        />
        <meta
          property="og:description"
          content={`Daftar sekarang di Bimbel Supercamp Matrix ${kota.kota}. Persiapan intensif masuk Kedokteran & PTN Favorit. Program Proven & Bergaransi.`}
        />
        <meta
          property="og:url"
          content={`https://supercampmatrix.com/bimbel-privat-supercamp-utbk-snbt/${kota.slug}`}
        />
        <meta
          property="og:image"
          content="https://supercampmatrix.com/images/banner.webp"
        />

        {/* Twitter Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content={`Bimbel UTBK SNBT ${kota.kota} - Bimbel LPS`}
        />

        {/* Schema Markup JSON-LD (Sangat Penting untuk SEO Lokal) */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            name: `Bimbel Supercamp Matrix ${kota.kota}`,
            description: `Lembaga bimbingan belajar persiapan masuk PTN dan Kedokteran di ${kota.kota}.`,
            url: `https://supercampmatrix.com/bimbel-privat-supercamp-utbk-snbt/${kota.slug}`,
            address: {
              "@type": "PostalAddress",
              addressLocality: kota.kota,
              addressCountry: "ID",
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "1250",
            },
          })}
        </script>
      </Helmet>

      <JumbotronLps />
      <section className="parent-text-seo-lps">
        <div className="container-seo-content">
          <div className="header-seo-lps">
            <h1 className="text-seo-lps">
              Bimbel UTBK SNBT di{" "}
              <span className="highlight-city">{kota.kota}</span> - Les Privat &
              Supercamp PTN Kedokteran 2026
            </h1>
          </div>

          <div className="desk-seo-lps">
            <p>
              <strong>Bimbel LPS</strong> adalah solusi strategis bagi Anda yang
              membutuhkan layanan intensif privat untuk persiapan{" "}
              <strong>UTBK SNBT</strong> dan{" "}
              <strong>Bimbel Karantina Masuk PTN & Kedokteran</strong>. Kami
              hadir sebagai mitra belajar yang siap mendampingi Anda meraih
              kursi di PTN impian.
            </p>
            <p>
              Melalui pendampingan eksklusif dari <em>Master Teacher</em>{" "}
              berkompeten, kami telah membuktikan keberhasilan dengan meloloskan
              ratusan siswa ke berbagai jurusan favorit setiap tahunnya. Kami
              percaya setiap siswa memiliki potensi unik yang bisa dioptimalkan
              melalui metode belajar yang tepat, latihan terukur, dan
              pendampingan maksimal.
            </p>
            <p className="closing-statement">
              Pilihlah program yang telah terbukti (*proven*) dan beragam paket
              belajar fleksibel yang sesuai dengan kebutuhan Anda.{" "}
              <strong>Bersama Bimbel LPS — Sukses Raih PTN Impian!</strong>
            </p>
          </div>
        </div>
      </section>
      <LulusanLps />
      <AlumniKedokteranLps />
      <AlumniPtnLps />
      <BenefitScLps />
      <KerjasamaHotel />
      <TargetBelajarLps />
      <FasilitasScLps />
      <PaketSupercampLps />
      <PaketBelajarSnbtNew />
      <WaktuPelaksanaanSc />
      <VenueScLps />
      <JadwalKegiatanScLps />
      <SlideCtaLps />
      <KegiatanScLps />
      <VideoScLps />
      <TutorLpsSc />
      <TestimoniLps />
      <TestimoniLps2 />
      <ListAlumni />
      <ListKabLps />
      <FaqScLps />
      <BottomCtaLps />
    </React.Fragment>
  );
};

export default HalamanKotaLps;
