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
import ListKecLps from "../../Components/ListKotaLps/ListKecLps";
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

const HalamanKabLps = () => {
  // =========================================
  // PARAMETER KABUPATEN
  // =========================================
  const { id } = useParams();

  // =========================================
  // NORMALISASI SLUG
  // =========================================
  const slugKabupaten = String(id || "")
    .trim()
    .toLowerCase();

  // =========================================
  // FORMAT NAMA KABUPATEN
  // =========================================
  const namaKabupaten = formatNamaWilayah(slugKabupaten);

  // =========================================
  // CANONICAL URL
  // =========================================
  const canonicalUrl = `${DOMAIN}/les-privat-supercamp-utbk-snbt/${encodeURIComponent(
    slugKabupaten,
  )}`;

  // =========================================
  // IMAGE URL
  // =========================================
  const imageUrl = `${DOMAIN}/images/banner.webp`;

  // =========================================
  // SEO TITLE
  // =========================================
  const pageTitle = `Les Privat UTBK SNBT ${namaKabupaten} | Persiapan Masuk PTN`;

  // =========================================
  // META DESCRIPTION
  // =========================================
  const pageDescription = `Les privat UTBK SNBT di ${namaKabupaten} untuk persiapan masuk PTN dan Kedokteran. Latihan soal, tryout, strategi SNBT, dan pendampingan belajar intensif.`;

  // =========================================
  // JSON-LD STRUCTURED DATA
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
      name: "Les Privat Persiapan UTBK SNBT dan Masuk PTN",
      description:
        "Program bimbingan belajar dan les privat untuk persiapan UTBK SNBT melalui penguatan kemampuan penalaran, latihan soal, tryout, serta strategi memilih program studi dan perguruan tinggi negeri.",
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
          content={`Program les privat UTBK SNBT untuk siswa di ${namaKabupaten}`}
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
        {/* JSON-LD */}
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
      <div className="parent-text-seo-lps">
        <h1 className="text-seo-lps">
          Les Privat UTBK SNBT di{" "}
          <span className="highlight-city">{namaKabupaten}</span> – Bimbingan
          Intensif Masuk PTN dan Kedokteran
        </h1>

        <p className="desk-seo-lps">
          Persiapan menghadapi Ujian Tulis Berbasis Komputer Seleksi Nasional
          Berdasarkan Tes (UTBK SNBT) membutuhkan strategi belajar yang sesuai
          dengan kemampuan dan target perguruan tinggi. Bagi siswa di{" "}
          {namaKabupaten}, program <strong>Les Privat UTBK SNBT</strong> dari
          Supercamp Matrix Indonesia membantu calon mahasiswa mempersiapkan diri
          melalui pendampingan akademik, latihan soal, dan evaluasi perkembangan
          belajar.
          <br />
          <br />
          Dalam menghadapi UTBK SNBT, siswa perlu memperkuat kemampuan
          penalaran, memahami informasi secara kritis, serta melatih ketepatan
          dalam menyelesaikan soal. Program bimbingan difokuskan pada
          pengembangan kemampuan yang relevan dengan materi ujian, pembahasan
          soal secara terstruktur, dan latihan berkala untuk membantu peserta
          mengenali bagian yang masih membutuhkan peningkatan.
          <br />
          <br />
          Selain penguasaan materi, pemilihan program studi dan perguruan tinggi
          negeri juga menjadi bagian penting dalam persiapan seleksi. Calon
          mahasiswa di {namaKabupaten} yang menargetkan UI, UGM, ITB, UNDIP,
          maupun Fakultas Kedokteran perlu mempertimbangkan minat, kemampuan
          akademik, daya tampung, serta ketentuan penerimaan yang berlaku pada
          masing-masing program studi dan perguruan tinggi.
          <br />
          <br />
          Melalui simulasi ujian dan evaluasi hasil latihan, siswa dapat
          mengukur perkembangan kemampuan, memperbaiki strategi pengerjaan soal,
          serta mengelola waktu ujian secara lebih efektif. Pendampingan belajar
          yang terarah juga membantu peserta menyusun prioritas persiapan
          berdasarkan hasil evaluasi dan target akademik.
          <br />
          <br />
          Program <strong>Bimbel & Les Privat Supercamp UTBK SNBT</strong>{" "}
          menjadi salah satu pilihan persiapan bagi calon mahasiswa yang
          membutuhkan pembelajaran intensif untuk menghadapi seleksi perguruan
          tinggi negeri. Dengan latihan konsisten dan strategi belajar yang
          disesuaikan, siswa dapat membangun kesiapan akademik menuju PTN serta
          program studi yang diinginkan.
        </p>
      </div>

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
      <ListKecLps />
      <FaqScLps />
      <BottomCtaLps />
    </>
  );
};

export default HalamanKabLps;
