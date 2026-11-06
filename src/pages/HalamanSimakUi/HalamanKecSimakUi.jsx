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
import ListKelHalamanSimakUi from "../../Components/ListHalamanSimakUi/ListKelHalamanSimakUi";
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

const HalamanKecSimakUi = () => {
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
  const canonicalUrl = `${DOMAIN}/bimbingan-simak-ui/${encodeURIComponent(
    slugKecamatan,
  )}`;

  // =========================================
  // IMAGE URL
  // =========================================
  const imageUrl = `${DOMAIN}/images/banner.webp`;

  // =========================================
  // SEO TITLE
  // =========================================
  const pageTitle = `Bimbel SIMAK UI ${namaKecamatan} | Les Privat & KKI UI`;

  // =========================================
  // META DESCRIPTION
  // =========================================
  const pageDescription = `Bimbel SIMAK UI di ${namaKecamatan}. Persiapan masuk UI melalui les privat, latihan soal, tryout, evaluasi belajar, serta pendampingan seleksi KKI.`;

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
      name: "Bimbingan Persiapan SIMAK UI dan Seleksi KKI UI",
      description:
        "Program les privat dan bimbingan belajar untuk persiapan seleksi masuk Universitas Indonesia melalui SIMAK UI serta persiapan program Kelas Khusus Internasional sesuai persyaratan masing-masing program studi.",
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
          content={`Program bimbel SIMAK UI untuk siswa di ${namaKecamatan}`}
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
          Bimbel & Les Privat SIMAK UI di{" "}
          <span className="highlight-city">{namaKecamatan}</span> – Persiapan
          Intensif Masuk UI dan Kelas Internasional
        </h1>

        <p className="desk-seo-lps">
          Mempersiapkan diri menghadapi seleksi masuk Universitas Indonesia
          membutuhkan strategi belajar yang mempertimbangkan kemampuan akademik,
          program studi tujuan, dan ketentuan jalur penerimaan. Bagi calon
          mahasiswa di {namaKecamatan}, program{" "}
          <strong>Bimbel & Les Privat SIMAK UI</strong> dari Supercamp Matrix
          Indonesia membantu peserta menyusun persiapan akademik melalui
          pendampingan belajar, latihan soal, dan evaluasi perkembangan
          kemampuan.
          <br />
          <br />
          Salah satu langkah penting dalam persiapan SIMAK UI adalah memahami
          materi dan mekanisme seleksi yang berlaku pada periode penerimaan.
          Dengan mempelajari informasi resmi dari Universitas Indonesia, peserta
          dapat menyesuaikan prioritas belajar berdasarkan jalur dan program
          studi yang dipilih. Latihan terstruktur membantu siswa memahami pola
          penyelesaian soal, meningkatkan ketelitian, serta membangun strategi
          pengerjaan dalam batas waktu ujian.
          <br />
          <br />
          Program <strong>Les Privat Persiapan SIMAK UI</strong> dapat membantu
          peserta memusatkan perhatian pada materi yang belum dikuasai. Melalui
          pembahasan bersama tutor, siswa dapat mengenali kesalahan yang sering
          terjadi dan mengembangkan pendekatan penyelesaian soal yang lebih
          efektif. Simulasi ujian serta evaluasi hasil latihan menjadi bagian
          penting untuk memantau perkembangan kemampuan belajar.
          <br />
          <br />
          Selain jalur seleksi untuk program sarjana reguler, calon mahasiswa
          juga dapat mempertimbangkan
          <strong> Kelas Khusus Internasional (KKI) UI</strong>. Program
          internasional dapat memiliki persyaratan akademik, kemampuan bahasa,
          dan mekanisme penerimaan yang berbeda sesuai program studi. Oleh
          karena itu, siswa di {namaKecamatan} perlu memastikan ketentuan yang
          berlaku melalui informasi resmi kampus sebelum menentukan strategi
          persiapan.
          <br />
          <br />
          Melalui program <strong>Bimbel SIMAK UI dan KKI UI</strong>, calon
          mahasiswa dapat membangun kebiasaan belajar yang konsisten,
          mengevaluasi kemampuan akademik, serta mempersiapkan diri secara lebih
          sistematis menghadapi proses seleksi Universitas Indonesia.
          Pendampingan yang disesuaikan dengan kebutuhan membantu peserta
          menentukan prioritas latihan dan memperkuat kesiapan menuju program
          studi pilihan.
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
      <ListKelHalamanSimakUi />
      <FaqScLps />
      <BottomCtaLps />
    </>
  );
};

export default HalamanKecSimakUi;
