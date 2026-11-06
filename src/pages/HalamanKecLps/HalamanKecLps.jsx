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
import ListKelLps from "../../Components/ListKotaLps/ListKelLps";
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

const HalamanKecLps = () => {
  // =========================================
  // PARAMETER KECAMATAN
  // =========================================
  const { kecSlug } = useParams();

  // =========================================
  // NORMALISASI SLUG
  // =========================================
  const slugKecamatan = String(kecSlug || "")
    .trim()
    .toLowerCase();

  // =========================================
  // FORMAT NAMA KECAMATAN
  // =========================================
  const namaKecamatan = formatNamaWilayah(slugKecamatan);

  // =========================================
  // CANONICAL URL
  // =========================================
  const canonicalUrl = `${DOMAIN}/guru-privat-supercamp-utbk-snbt/${encodeURIComponent(
    slugKecamatan,
  )}`;

  // =========================================
  // IMAGE URL
  // =========================================
  const imageUrl = `${DOMAIN}/images/banner.webp`;

  // =========================================
  // SEO TITLE
  // =========================================
  const pageTitle = `Guru Privat UTBK SNBT ${namaKecamatan} | Bimbel Masuk PTN`;

  // =========================================
  // META DESCRIPTION
  // =========================================
  const pageDescription = `Guru privat UTBK SNBT di ${namaKecamatan} untuk persiapan masuk PTN dan Kedokteran. Latihan soal, strategi ujian, tryout, dan bimbingan intensif.`;

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
      name: "Guru Privat Persiapan UTBK SNBT dan Masuk PTN",
      description:
        "Program bimbingan privat untuk membantu siswa mempersiapkan UTBK SNBT melalui latihan penalaran, pembahasan soal, simulasi ujian, dan evaluasi kemampuan.",
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
          content={`Program guru privat UTBK SNBT untuk siswa di ${namaKecamatan}`}
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
          Guru Privat UTBK SNBT di{" "}
          <span className="highlight-city">{namaKecamatan}</span> – Bimbingan
          Intensif Masuk PTN dan Kedokteran
        </h1>

        <p className="desk-seo-lps">
          Menghadapi UTBK SNBT membutuhkan kemampuan memahami soal, berpikir
          logis, serta menentukan strategi pengerjaan yang sesuai dengan waktu
          ujian. Bagi siswa di {namaKecamatan}, program{" "}
          <strong>Guru Privat UTBK SNBT</strong> dari Supercamp Matrix Indonesia
          membantu calon mahasiswa mempersiapkan diri melalui pembelajaran
          intensif, latihan soal, dan pendampingan akademik yang disesuaikan
          dengan kebutuhan belajar.
          <br />
          <br />
          Dalam proses persiapan, siswa perlu memperkuat kemampuan penalaran
          umum, pemahaman bacaan, pengetahuan kuantitatif, serta literasi yang
          relevan dengan ketentuan UTBK SNBT. Melalui pembahasan soal bersama
          tutor, peserta dapat memahami langkah penyelesaian, mengenali jenis
          kesalahan yang sering muncul, dan meningkatkan ketelitian saat
          menjawab soal.
          <br />
          <br />
          Selain penguasaan materi, pengelolaan waktu menjadi salah satu faktor
          penting dalam menghadapi ujian berbasis komputer. Melalui simulasi
          UTBK, latihan soal dengan batas waktu, serta evaluasi hasil tryout,
          siswa di {namaKecamatan}
          dapat melatih kemampuan menentukan prioritas pengerjaan soal dan
          membangun strategi ujian yang lebih efektif.
          <br />
          <br />
          Bagi calon mahasiswa yang menargetkan perguruan tinggi negeri seperti
          UI, UGM, ITB, UNDIP, maupun program studi Kedokteran, persiapan juga
          perlu mempertimbangkan pilihan jurusan, daya tampung, tingkat
          persaingan, dan persyaratan penerimaan yang berlaku. Pendampingan
          belajar dapat membantu peserta menyusun target akademik berdasarkan
          perkembangan kemampuan dan tujuan pendidikan masing-masing.
          <br />
          <br />
          Melalui program{" "}
          <strong>Bimbel & Les Privat Supercamp UTBK SNBT</strong>, siswa dapat
          membangun kebiasaan belajar yang lebih konsisten, memperkuat kemampuan
          menyelesaikan soal, serta mengevaluasi kesiapan sebelum mengikuti
          seleksi. Dengan strategi belajar yang terarah, calon mahasiswa dapat
          mempersiapkan diri menuju PTN dan program studi impian.
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
      <ListKelLps />
      <FaqScLps />
      <BottomCtaLps />
    </>
  );
};

export default HalamanKecLps;
