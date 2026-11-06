import { Helmet } from "react-helmet-async";
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
import { DOMAIN } from "../../utils/domain";
import formatNamaWilayah from "../../utils/formatNamaWilayah";
import "./HalamanKotaLps.css";

const HalamanKotaLps = () => {
  // =========================================
  // PARAMETER KOTA
  // =========================================
  const { id } = useParams();

  // =========================================
  // NORMALISASI SLUG
  // =========================================
  const slugKota = String(id || "")
    .trim()
    .toLowerCase();

  // =========================================
  // FORMAT NAMA KOTA
  // =========================================
  const namaKota = formatNamaWilayah(slugKota);

  // =========================================
  // CANONICAL URL
  // =========================================
  const canonicalUrl = `${DOMAIN}/bimbel-privat-supercamp-utbk-snbt/${encodeURIComponent(
    slugKota,
  )}`;

  // =========================================
  // IMAGE URL
  // =========================================
  const imageUrl = `${DOMAIN}/images/banner.webp`;

  // =========================================
  // SEO TITLE
  // =========================================
  const pageTitle = `Bimbel UTBK SNBT ${namaKota} | Supercamp & Les Privat PTN`;

  // =========================================
  // META DESCRIPTION
  // =========================================
  const pageDescription = `Bimbel UTBK SNBT di ${namaKota} bersama Supercamp Matrix. Persiapan masuk PTN melalui les privat intensif, latihan soal, tryout, dan program karantina.`;

  // =========================================
  // STRUCTURED DATA
  // =========================================
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${canonicalUrl}#webpage`,
    name: pageTitle,
    description: pageDescription,
    url: canonicalUrl,
    inLanguage: "id-ID",

    primaryImageOfPage: {
      "@type": "ImageObject",
      url: imageUrl,
    },

    isPartOf: {
      "@type": "WebSite",
      name: "Supercamp Matrix Indonesia",
      url: `${DOMAIN}/`,
    },

    about: {
      "@type": "Thing",
      name: "Bimbel UTBK SNBT dan Supercamp Masuk PTN",
      description:
        "Program persiapan UTBK SNBT melalui bimbingan akademik, les privat, latihan soal, simulasi ujian, serta program belajar intensif untuk seleksi masuk perguruan tinggi negeri.",
    },
  };

  return (
    <>
      {/* ===================================== */}
      {/* SEO METADATA */}
      {/* ===================================== */}
      <Helmet>
        <title>{pageTitle}</title>

        <meta name="description" content={pageDescription} />

        <link rel="canonical" href={canonicalUrl} />

        <meta name="robots" content="index, follow" />

        {/* ===================================== */}
        {/* OPEN GRAPH */}
        {/* ===================================== */}
        <meta property="og:type" content="website" />

        <meta property="og:site_name" content="Supercamp Matrix Indonesia" />

        <meta property="og:title" content={pageTitle} />

        <meta property="og:description" content={pageDescription} />

        <meta property="og:url" content={canonicalUrl} />

        <meta property="og:image" content={imageUrl} />

        <meta
          property="og:image:alt"
          content={`Program bimbel UTBK SNBT dan Supercamp untuk siswa di ${namaKota}`}
        />

        <meta property="og:locale" content="id_ID" />

        {/* ===================================== */}
        {/* TWITTER CARD */}
        {/* ===================================== */}
        <meta name="twitter:card" content="summary_large_image" />

        <meta name="twitter:title" content={pageTitle} />

        <meta name="twitter:description" content={pageDescription} />

        <meta name="twitter:image" content={imageUrl} />

        {/* ===================================== */}
        {/* JSON-LD STRUCTURED DATA */}
        {/* ===================================== */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      {/* ===================================== */}
      {/* JUMBOTRON */}
      {/* ===================================== */}
      <JumbotronLps />

      {/* ===================================== */}
      {/* SEO CONTENT */}
      {/* ===================================== */}
      <section className="parent-text-seo-lps">
        <div className="container-seo-content">
          <div className="header-seo-lps">
            <h1 className="text-seo-lps">
              Bimbel UTBK SNBT di{" "}
              <span className="highlight-city">{namaKota}</span> – Les Privat
              dan Supercamp Persiapan Masuk PTN
            </h1>
          </div>

          <div className="desk-seo-lps">
            <p>
              Persiapan menghadapi{" "}
              <strong>
                Ujian Tulis Berbasis Komputer Seleksi Nasional Berdasarkan Tes
                (UTBK SNBT)
              </strong>{" "}
              membutuhkan perencanaan belajar yang terarah, pemahaman terhadap
              materi ujian, serta kemampuan mengelola waktu dengan baik. Bagi
              siswa di {namaKota}, program <strong>Bimbel UTBK SNBT</strong>{" "}
              dari Supercamp Matrix Indonesia membantu calon mahasiswa
              mempersiapkan diri melalui bimbingan akademik, latihan soal,
              simulasi ujian, dan evaluasi perkembangan belajar.
            </p>

            <p>
              Melalui program{" "}
              <strong>Les Privat dan Supercamp UTBK SNBT</strong>, peserta dapat
              memperkuat kemampuan penalaran umum, pemahaman bacaan, literasi,
              serta pengetahuan kuantitatif sesuai ketentuan seleksi yang
              berlaku. Pembelajaran diarahkan pada penguasaan konsep, latihan
              penyelesaian soal, serta pengembangan strategi mengerjakan ujian
              secara sistematis. Pendampingan tutor membantu peserta mengenali
              bagian yang masih perlu ditingkatkan.
            </p>

            <p>
              Bagi calon mahasiswa di {namaKota} yang menargetkan perguruan
              tinggi negeri seperti UI, UGM, ITB, UNAIR, UNDIP, maupun program
              studi Kedokteran, persiapan tidak hanya berfokus pada latihan
              soal. Pemilihan program studi, pemahaman daya tampung, serta
              ketentuan penerimaan masing-masing perguruan tinggi juga perlu
              menjadi bagian dari strategi belajar dan perencanaan akademik.
            </p>

            <p>
              Program belajar intensif dapat membantu siswa membangun kebiasaan
              latihan yang lebih konsisten. Melalui tryout, simulasi ujian,
              serta pembahasan hasil latihan, peserta dapat mengevaluasi
              perkembangan kemampuan, meningkatkan ketelitian, dan memperbaiki
              manajemen waktu. Hasil evaluasi dapat digunakan untuk menentukan
              prioritas materi sebelum menghadapi UTBK SNBT.
            </p>

            <p className="closing-statement">
              Supercamp Matrix Indonesia menyediakan pilihan program bimbingan
              untuk membantu siswa mempersiapkan diri menuju seleksi PTN. Dengan{" "}
              <strong>
                Les Privat UTBK SNBT, latihan terstruktur, dan program Supercamp
              </strong>
              , calon mahasiswa dapat menyusun strategi belajar berdasarkan
              kemampuan, waktu persiapan, serta perguruan tinggi yang menjadi
              tujuan.
            </p>
          </div>
        </div>
      </section>

      {/* ===================================== */}
      {/* KOMPONEN HALAMAN */}
      {/* ===================================== */}
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
    </>
  );
};

export default HalamanKotaLps;
