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
import ListKelHalamanCbtUgm from "../../Components/ListKotaLps/ListHalamanCbtUgm/ListKelHalamanCbtUgm";
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

const HalamanKecCbtUgm = () => {
  // =========================================
  // AMBIL PARAMETER KECAMATAN
  // =========================================
  const { kecSlug } = useParams();

  // =========================================
  // FORMAT NAMA KECAMATAN
  // =========================================
  const namaKecamatan = formatNamaWilayah(kecSlug);

  // =========================================
  // NORMALISASI SLUG
  // =========================================
  const slugKecamatan = String(kecSlug || "")
    .trim()
    .toLowerCase();

  // =========================================
  // CANONICAL URL
  // =========================================
  const canonicalUrl = `${DOMAIN}/bimbingan-privat-cbt-ugm/${encodeURIComponent(
    slugKecamatan,
  )}`;

  // =========================================
  // IMAGE URL
  // =========================================
  const imageUrl = `${DOMAIN}/images/banner.webp`;

  // =========================================
  // SEO TITLE - KHUSUS .CO.ID
  // =========================================
  const pageTitle = `Les Privat UM UGM CBT ${namaKecamatan} | Bimbel Intensif`;

  // =========================================
  // META DESCRIPTION
  // =========================================
  const pageDescription = `Les privat UM UGM CBT di ${namaKecamatan}. Persiapkan ujian mandiri UGM dengan latihan soal, strategi manajemen waktu, simulasi CBT, dan evaluasi belajar.`;

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
      name: "Les Privat Persiapan UM UGM CBT",
      description:
        "Pendampingan belajar untuk persiapan ujian mandiri Universitas Gadjah Mada berbasis komputer, meliputi latihan soal, strategi pengerjaan tes, dan evaluasi kemampuan.",
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
          content={`Program les privat UM UGM CBT di ${namaKecamatan}`}
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
          Les Privat UM UGM CBT di{" "}
          <span className="highlight-city">{namaKecamatan}</span> – Strategi
          Ujian Mandiri Masuk UGM
        </h1>

        <p className="desk-seo-lps">
          Menghadapi ujian mandiri Universitas Gadjah Mada membutuhkan lebih
          dari sekadar menghafal materi pelajaran. Calon mahasiswa perlu
          memahami konsep akademik, melatih kemampuan berpikir kritis, serta
          membangun strategi pengerjaan soal yang efektif. Bagi siswa di{" "}
          {namaKecamatan}, program <strong>Les Privat UM UGM CBT</strong> dari
          Supercamp Matrix Indonesia membantu peserta mempersiapkan seleksi
          melalui pembelajaran intensif yang disesuaikan dengan kebutuhan dan
          kemampuan awal.
          <br />
          <br />
          Pendampingan belajar diarahkan pada penguasaan materi yang relevan
          dengan ujian mandiri UGM, termasuk penguatan kemampuan dasar,
          penalaran, dan materi akademik sesuai program studi tujuan. Melalui
          latihan soal bertahap dan pembahasan bersama tutor, siswa dapat
          mengembangkan pendekatan penyelesaian masalah, meningkatkan
          ketelitian, serta mengidentifikasi kesalahan yang sering terjadi
          selama latihan.
          <br />
          <br />
          Salah satu tantangan dalam ujian berbasis komputer adalah membagi
          waktu secara tepat untuk setiap soal. Oleh karena itu, peserta dapat
          melatih strategi pengerjaan melalui simulasi CBT, pembahasan soal
          dengan batas waktu, serta evaluasi hasil latihan. Pendekatan ini
          membantu siswa di {namaKecamatan}
          membangun kebiasaan mengerjakan soal secara lebih sistematis tanpa
          mengabaikan akurasi jawaban.
          <br />
          <br />
          Bagi calon mahasiswa yang menargetkan Universitas Gadjah Mada,
          persiapan juga perlu disesuaikan dengan persyaratan resmi dan
          ketentuan seleksi pada periode pendaftaran yang berlaku. Melalui
          pendampingan privat, latihan terencana, serta pemantauan perkembangan
          kemampuan, siswa dapat meningkatkan kesiapan untuk menghadapi UM UGM
          CBT dan menyusun strategi belajar menuju program studi pilihan.
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
      <ListKelHalamanCbtUgm />
      <FaqScLps />
      <BottomCtaLps />
    </>
  );
};

export default HalamanKecCbtUgm;
