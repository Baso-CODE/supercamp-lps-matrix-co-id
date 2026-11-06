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
import VideoScLps from "../../Components/VideoScLps/VideoScLps";
import WaktuPelaksanaanSc from "../../Components/WaktuPelaksanaanSc/WaktuPelaksanaanSc";
import { DOMAIN } from "../../utils/domain";
import formatNamaWilayah from "../../utils/formatNamaWilayah";

const HalamanKelPtn = () => {
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
  const canonicalUrl = `${DOMAIN}/guru-bimbel-masuk-ptn/${encodeURIComponent(
    slugKelurahan,
  )}`;

  // =========================================
  // IMAGE URL
  // =========================================
  const imageUrl = `${DOMAIN}/images/banner.webp`;

  // =========================================
  // SEO TITLE
  // =========================================
  const pageTitle = `Guru Privat Masuk PTN ${namaKelurahan} | Bimbel Intensif`;

  // =========================================
  // META DESCRIPTION
  // =========================================
  const pageDescription = `Guru les privat masuk PTN di ${namaKelurahan}. Persiapan UTBK SNBT dan seleksi mandiri dengan latihan soal, pendampingan personal, serta evaluasi belajar.`;

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
      name: "Guru Privat Persiapan Masuk Perguruan Tinggi Negeri",
      description:
        "Program pendampingan belajar individual untuk persiapan seleksi masuk PTN melalui UTBK SNBT dan jalur mandiri, termasuk latihan soal, penguatan akademik, serta evaluasi perkembangan belajar.",
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
          content={`Program guru privat masuk PTN untuk siswa di ${namaKelurahan}`}
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
          Guru Les Privat Masuk PTN di{" "}
          <span className="highlight-city">{namaKelurahan}</span> – Pendampingan
          Intensif Persiapan SNBT dan Seleksi Mandiri
        </h1>

        <p className="desk-seo-lps">
          Setiap calon mahasiswa memiliki kemampuan akademik, minat, dan target
          perguruan tinggi yang berbeda. Oleh karena itu, persiapan menghadapi
          seleksi masuk perguruan tinggi negeri perlu disesuaikan dengan
          kebutuhan belajar masing-masing peserta. Bagi siswa di {namaKelurahan}
          , program <strong>Guru Les Privat Masuk PTN</strong> dari Supercamp
          Matrix Indonesia membantu calon mahasiswa membangun kesiapan melalui
          pendampingan belajar yang lebih personal.
          <br />
          <br />
          Pembelajaran privat memungkinkan siswa memusatkan perhatian pada
          materi yang masih sulit dipahami dan memperdalam kemampuan akademik
          secara bertahap. Untuk peserta yang menargetkan jalur UTBK SNBT,
          persiapan dapat difokuskan pada kemampuan penalaran, literasi,
          pemahaman bacaan, serta pengetahuan kuantitatif sesuai ketentuan
          ujian. Sementara itu, siswa yang memilih jalur seleksi mandiri dapat
          mempersiapkan materi berdasarkan persyaratan perguruan tinggi tujuan.
          <br />
          <br />
          Dalam proses persiapan masuk PTN, latihan soal dan evaluasi kemampuan
          menjadi bagian penting untuk menentukan prioritas belajar. Melalui
          pembahasan bersama tutor dan simulasi ujian, peserta dapat mengenali
          kesalahan yang sering muncul, meningkatkan ketelitian, serta melatih
          manajemen waktu ketika mengerjakan soal. Hasil evaluasi membantu siswa
          di {namaKelurahan}
          menyusun jadwal belajar yang lebih sesuai dengan perkembangan
          kemampuan masing-masing.
          <br />
          <br />
          Selain kesiapan akademik, calon mahasiswa juga perlu mempertimbangkan
          pilihan program studi dan kampus. Perguruan tinggi seperti UI, UGM,
          ITB, UNAIR, UNDIP, maupun PTN lainnya memiliki ketentuan penerimaan
          dan daya tampung yang berbeda. Dengan memahami jalur seleksi dan
          persyaratan yang berlaku, siswa dapat menyusun strategi memilih
          jurusan berdasarkan minat, kemampuan, dan tujuan pendidikan.
          <br />
          <br />
          Melalui program <strong>Bimbel & Les Privat Masuk PTN</strong>, calon
          mahasiswa dapat membangun kebiasaan belajar yang konsisten, memperkuat
          pemahaman akademik, serta mengevaluasi perkembangan kemampuan sebelum
          menghadapi ujian. Pendampingan individual membantu siswa menyusun
          persiapan yang lebih terarah menuju perguruan tinggi negeri pilihan.
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

export default HalamanKelPtn;
