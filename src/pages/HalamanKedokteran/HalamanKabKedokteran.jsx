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
import ListKecHalamanKedokteran from "../../Components/ListKotaLps/ListHalamanKedokteran/ListKecHalamanKedokteran";
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

const HalamanKabKedokteran = () => {
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
  const canonicalUrl = `${DOMAIN}/bimbingan-masuk-kedokteran/${encodeURIComponent(
    slugKabupaten,
  )}`;

  // =========================================
  // IMAGE URL
  // =========================================
  const imageUrl = `${DOMAIN}/images/banner.webp`;

  // =========================================
  // SEO TITLE
  // =========================================
  const pageTitle = `Bimbel Kedokteran ${namaKabupaten} | Les Privat Masuk FK`;

  // =========================================
  // META DESCRIPTION
  // =========================================
  const pageDescription = `Bimbel masuk Kedokteran di ${namaKabupaten}. Persiapan intensif FK UI, UGM, UNAIR, dan UNDIP melalui les privat, latihan UTBK SNBT, tryout, dan evaluasi belajar.`;

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
      name: "Bimbingan Persiapan Masuk Fakultas Kedokteran",
      description:
        "Program bimbel dan les privat untuk membantu calon mahasiswa mempersiapkan seleksi masuk Fakultas Kedokteran melalui penguatan kemampuan akademik, latihan UTBK SNBT, simulasi ujian, dan evaluasi hasil belajar.",
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
          content={`Program bimbel dan les privat masuk Fakultas Kedokteran di ${namaKabupaten}`}
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
      <div className="parent-text-seo-lps">
        <h1 className="text-seo-lps">
          Bimbel & Les Privat Masuk Kedokteran di{" "}
          <span className="highlight-city">{namaKabupaten}</span> – Persiapan
          Intensif Seleksi Fakultas Kedokteran
        </h1>

        <p className="desk-seo-lps">
          Masuk Fakultas Kedokteran merupakan salah satu tujuan pendidikan yang
          membutuhkan persiapan akademik secara matang. Tingginya persaingan
          penerimaan mahasiswa menjadikan calon peserta perlu memahami jalur
          seleksi, meningkatkan kemampuan akademik, dan menyusun strategi
          belajar yang terarah. Bagi siswa di {namaKabupaten}, program{" "}
          <strong>Bimbel & Les Privat Masuk Kedokteran</strong> dari Supercamp
          Matrix Indonesia membantu calon mahasiswa mempersiapkan diri melalui
          pendampingan belajar intensif dan evaluasi kemampuan.
          <br />
          <br />
          Persiapan menuju Fakultas Kedokteran dapat dimulai dengan menentukan
          perguruan tinggi tujuan dan memahami jalur penerimaan yang tersedia.
          Calon mahasiswa yang menargetkan FK UI, UGM, UNAIR, UNDIP, maupun
          perguruan tinggi lainnya perlu memperhatikan persyaratan seleksi, daya
          tampung, serta ketentuan penerimaan masing-masing kampus. Perencanaan
          ini membantu siswa menentukan prioritas belajar berdasarkan target
          program studi dan jalur seleksi yang dipilih.
          <br />
          <br />
          Bagi peserta yang mengikuti jalur UTBK SNBT, penguatan kemampuan
          penalaran, literasi, dan pengetahuan kuantitatif menjadi bagian
          penting dalam persiapan akademik. Melalui latihan soal secara berkala,
          pembahasan bersama tutor, serta simulasi ujian, siswa dapat
          meningkatkan pemahaman konsep dan melatih kemampuan menyelesaikan soal
          secara lebih sistematis.
          <br />
          <br />
          Selain UTBK SNBT, beberapa perguruan tinggi juga menyediakan jalur
          seleksi mandiri dengan persyaratan dan bentuk ujian yang berbeda.
          Karena itu, siswa di {namaKabupaten}
          perlu menyesuaikan materi latihan dengan ketentuan resmi dari
          perguruan tinggi yang menjadi tujuan. Pendampingan privat dapat
          membantu peserta mengidentifikasi materi yang belum dikuasai, menyusun
          jadwal belajar, dan memantau perkembangan kemampuan secara berkala.
          <br />
          <br />
          Melalui program <strong>Bimbel Supercamp Masuk Kedokteran</strong>,
          calon mahasiswa dapat membangun kebiasaan belajar yang lebih
          konsisten, meningkatkan kesiapan menghadapi ujian, serta mengembangkan
          strategi akademik sesuai kemampuan dan target kampus. Dengan persiapan
          yang terstruktur, siswa memiliki kesempatan untuk menghadapi proses
          seleksi Fakultas Kedokteran secara lebih percaya diri.
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
      <ListKecHalamanKedokteran />
      <FaqScLps />
      <BottomCtaLps />
    </>
  );
};

export default HalamanKabKedokteran;
