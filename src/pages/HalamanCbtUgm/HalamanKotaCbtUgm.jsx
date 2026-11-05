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
import ListKabHalamanCbtUgm from "../../Components/ListKotaLps/ListHalamanCbtUgm/ListKabHalamanCbtUgm";
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

const HalamanKotaCbtUgm = () => {
  // =========================================
  // AMBIL PARAMETER KOTA
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
  const canonicalUrl = `${DOMAIN}/les-privat-cbt-ugm/${encodeURIComponent(
    slugKota,
  )}`;

  // =========================================
  // IMAGE URL
  // =========================================
  const imageUrl = `${DOMAIN}/images/banner.webp`;

  // =========================================
  // SEO TITLE KHUSUS DOMAIN .CO.ID
  // =========================================
  const pageTitle = `Persiapan UM UGM CBT ${namaKota} | Bimbel & Les Privat`;

  // =========================================
  // META DESCRIPTION
  // =========================================
  const pageDescription = `Program persiapan UM UGM CBT di ${namaKota}. Pelajari materi ujian mandiri UGM melalui bimbel intensif, latihan CBT, tryout, dan pendampingan tutor.`;

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
      name: "Persiapan Seleksi UM UGM CBT",
      description:
        "Bimbingan persiapan ujian mandiri Universitas Gadjah Mada berbasis komputer melalui penguatan akademik, latihan soal, dan simulasi tes.",
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
          content={`Program persiapan ujian mandiri UGM untuk siswa di ${namaKota}`}
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
          Bimbel Persiapan UM UGM CBT di{" "}
          <span className="highlight-city">{namaKota}</span> – Les Privat
          Intensif Seleksi Mandiri UGM
        </h1>

        <p className="desk-seo-lps">
          Universitas Gadjah Mada merupakan salah satu perguruan tinggi negeri
          yang menjadi tujuan calon mahasiswa dari berbagai wilayah Indonesia.
          Salah satu jalur penerimaan yang dapat dipersiapkan adalah Ujian
          Mandiri UGM berbasis komputer atau <strong>UM UGM CBT</strong>. Bagi
          siswa di {namaKota}, Supercamp Matrix Indonesia menyediakan program
          bimbingan belajar untuk membantu membangun kesiapan akademik sebelum
          mengikuti proses seleksi masuk Universitas Gadjah Mada.
          <br />
          <br />
          Persiapan UM UGM CBT perlu dimulai dengan memahami ketentuan seleksi,
          cakupan materi yang diujikan, serta kebutuhan akademik sesuai program
          studi pilihan. Melalui program{" "}
          <strong>Bimbel & Les Privat CBT UGM</strong>, siswa dapat mempelajari
          konsep dasar, meningkatkan kemampuan penalaran, serta memperdalam
          materi akademik melalui latihan soal dan pembahasan terstruktur.
          Materi pembelajaran disesuaikan dengan ketentuan ujian yang berlaku.
          <br />
          <br />
          Selain penguasaan materi, kesiapan menghadapi ujian berbasis komputer
          juga membutuhkan latihan yang konsisten. Simulasi CBT dapat membantu
          peserta membiasakan diri dengan proses pengerjaan soal, mengatur waktu
          ujian, serta mengevaluasi ketepatan jawaban. Hasil latihan dapat
          digunakan untuk mengenali kemampuan awal dan menentukan prioritas
          belajar sebelum menghadapi seleksi yang sebenarnya.
          <br />
          <br />
          Bagi calon mahasiswa dari {namaKota}
          yang memiliki target program studi di Universitas Gadjah Mada,
          perencanaan belajar dapat mempertimbangkan kemampuan akademik, waktu
          persiapan, serta persyaratan jalur penerimaan yang dipilih. Melalui
          pendampingan tutor dan latihan secara terarah, peserta dapat membangun
          strategi belajar yang lebih sistematis untuk mempersiapkan UM UGM CBT.
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
      <ListKabHalamanCbtUgm />
      <FaqScLps />
      <BottomCtaLps />
    </>
  );
};

export default HalamanKotaCbtUgm;
