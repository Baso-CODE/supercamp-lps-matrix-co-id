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

const HalamanKelLps = () => {
  // =========================================
  // PARAMETER KELURAHAN
  // =========================================
  const { kelSlug } = useParams();

  // =========================================
  // NORMALISASI SLUG
  // =========================================
  const slugKelurahan = String(kelSlug || "")
    .trim()
    .toLowerCase();

  // =========================================
  // FORMAT NAMA KELURAHAN
  // =========================================
  const namaKelurahan = formatNamaWilayah(slugKelurahan);

  // =========================================
  // CANONICAL URL
  // =========================================
  const canonicalUrl = `${DOMAIN}/bimbingan-privat-supercamp-utbk-snbt/${encodeURIComponent(
    slugKelurahan,
  )}`;

  // =========================================
  // IMAGE URL
  // =========================================
  const imageUrl = `${DOMAIN}/images/banner.webp`;

  // =========================================
  // SEO TITLE
  // =========================================
  const pageTitle = `Les Privat UTBK SNBT ${namaKelurahan} | Supercamp PTN`;

  // =========================================
  // META DESCRIPTION
  // =========================================
  const pageDescription = `Les privat UTBK SNBT di ${namaKelurahan} untuk persiapan masuk PTN. Pendampingan personal, latihan soal, tryout, evaluasi belajar, dan program Supercamp.`;

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
      name: "Les Privat dan Supercamp Persiapan UTBK SNBT",
      description:
        "Program pendampingan belajar untuk persiapan UTBK SNBT melalui latihan soal, penguatan kemampuan penalaran, simulasi ujian, dan evaluasi perkembangan akademik.",
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
          content={`Program les privat UTBK SNBT di ${namaKelurahan}`}
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
          Les Privat UTBK SNBT di{" "}
          <span className="highlight-city">{namaKelurahan}</span> – Bimbingan
          Personal dan Supercamp Masuk PTN
        </h1>

        <p className="desk-seo-lps">
          Setiap siswa memiliki kemampuan akademik, gaya belajar, dan target
          perguruan tinggi yang berbeda. Oleh karena itu, persiapan menghadapi
          UTBK SNBT perlu disesuaikan dengan kebutuhan masing-masing peserta.
          Bagi siswa di {namaKelurahan}, program{" "}
          <strong>Les Privat UTBK SNBT</strong> dari Supercamp Matrix Indonesia
          membantu calon mahasiswa mempersiapkan diri melalui pendampingan
          belajar yang terarah, latihan soal, dan evaluasi kemampuan secara
          berkala.
          <br />
          <br />
          Pembelajaran privat memberikan kesempatan kepada siswa untuk
          memusatkan perhatian pada materi yang masih sulit dipahami. Persiapan
          dapat mencakup penguatan penalaran, kemampuan memahami bacaan,
          literasi, dan pengetahuan kuantitatif sesuai dengan ketentuan UTBK
          SNBT. Melalui pembahasan bersama tutor, peserta dapat mengenali
          langkah penyelesaian soal, memperbaiki kesalahan, serta meningkatkan
          ketelitian dalam mengerjakan latihan.
          <br />
          <br />
          Selain penguasaan materi, latihan dengan batas waktu juga penting
          untuk membangun kesiapan menghadapi ujian. Siswa di {namaKelurahan}
          dapat memanfaatkan tryout dan simulasi UTBK untuk melatih manajemen
          waktu, memahami tingkat kesulitan soal, serta mengevaluasi
          perkembangan kemampuan. Hasil evaluasi dapat digunakan untuk
          menentukan prioritas materi dan menyusun jadwal belajar yang lebih
          efektif.
          <br />
          <br />
          Bagi calon mahasiswa yang menargetkan perguruan tinggi negeri seperti
          UI, UGM, ITB, UNDIP, maupun program studi Kedokteran, persiapan juga
          perlu mempertimbangkan daya tampung, persyaratan seleksi, serta
          pilihan program studi. Pendampingan akademik membantu peserta menyusun
          target belajar berdasarkan kemampuan dan tujuan pendidikan
          masing-masing.
          <br />
          <br />
          Melalui program <strong>Les Privat dan Supercamp UTBK SNBT</strong>,
          calon mahasiswa dapat memperkuat pemahaman akademik, membangun
          kebiasaan belajar yang lebih konsisten, serta melatih kesiapan
          menghadapi ujian. Dengan pembelajaran terstruktur dan evaluasi
          berkala, siswa dapat mempersiapkan diri menuju seleksi PTN secara
          lebih sistematis.
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
      <FaqScLps />
      <BottomCtaLps />
    </>
  );
};

export default HalamanKelLps;
