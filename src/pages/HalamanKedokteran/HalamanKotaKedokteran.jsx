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
import ListKabHalamanKedokteran from "../../Components/ListKotaLps/ListHalamanKedokteran/ListKabHalamanKedokteran";
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

const HalamanKotaKedokteran = () => {
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
  const canonicalUrl = `${DOMAIN}/les-privat-masuk-kedokteran/${encodeURIComponent(
    slugKota,
  )}`;

  // =========================================
  // IMAGE URL
  // =========================================
  const imageUrl = `${DOMAIN}/images/banner.webp`;

  // =========================================
  // SEO TITLE
  // =========================================
  const pageTitle = `Bimbel Masuk Kedokteran ${namaKota} | Les Privat FK`;

  // =========================================
  // META DESCRIPTION
  // =========================================
  const pageDescription = `Bimbel masuk Kedokteran di ${namaKota}. Persiapan FK UI, UGM, UNAIR, dan UNPAD melalui les privat, Supercamp, latihan UTBK SNBT, dan tryout intensif.`;

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
      name: "Bimbel Persiapan Masuk Fakultas Kedokteran",
      description:
        "Program bimbingan belajar dan les privat untuk persiapan seleksi Fakultas Kedokteran melalui latihan UTBK SNBT, penguatan akademik, evaluasi kemampuan, dan perencanaan pilihan perguruan tinggi.",
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
          content={`Program persiapan masuk Fakultas Kedokteran untuk siswa di ${namaKota}`}
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
          Bimbel Persiapan Masuk Kedokteran di{" "}
          <span className="highlight-city">{namaKota}</span> – Les Privat dan
          Supercamp Fakultas Kedokteran
        </h1>

        <p className="desk-seo-lps">
          Mempersiapkan diri untuk masuk Fakultas Kedokteran membutuhkan
          perencanaan akademik yang matang, pemahaman terhadap jalur seleksi,
          serta strategi belajar yang sesuai dengan kemampuan siswa. Bagi calon
          mahasiswa di {namaKota}, program{" "}
          <strong>Bimbel Masuk Kedokteran</strong> dari Supercamp Matrix
          Indonesia membantu peserta membangun kesiapan akademik melalui
          bimbingan belajar intensif, latihan soal, dan evaluasi perkembangan
          kemampuan.
          <br />
          <br />
          Salah satu langkah awal dalam persiapan masuk Kedokteran adalah
          menentukan perguruan tinggi tujuan. Calon mahasiswa yang menargetkan
          Fakultas Kedokteran UI, UGM, UNAIR, UNPAD, maupun perguruan tinggi
          lainnya perlu memahami jalur penerimaan, persyaratan akademik, serta
          daya tampung program studi. Informasi tersebut dapat membantu siswa
          menentukan strategi persiapan yang lebih realistis dan sesuai dengan
          target.
          <br />
          <br />
          Bagi peserta yang mengikuti jalur UTBK SNBT, persiapan akademik perlu
          diarahkan pada kemampuan penalaran, literasi, serta pengetahuan
          kuantitatif sesuai ketentuan ujian yang berlaku. Melalui pembahasan
          soal dan latihan terstruktur, siswa dapat meningkatkan ketelitian,
          memahami pendekatan penyelesaian, serta mengembangkan kemampuan
          berpikir kritis ketika menghadapi berbagai jenis soal.
          <br />
          <br />
          Selain jalur UTBK SNBT, calon mahasiswa juga dapat mempertimbangkan
          jalur seleksi mandiri yang disediakan oleh perguruan tinggi tujuan.
          Setiap kampus dapat menerapkan persyaratan dan bentuk seleksi yang
          berbeda, sehingga materi persiapan perlu disesuaikan dengan ketentuan
          resmi yang berlaku pada periode penerimaan mahasiswa.
          <br />
          <br />
          Melalui program <strong>Les Privat dan Supercamp Kedokteran</strong>,
          siswa di {namaKota}
          dapat mengikuti pembelajaran yang lebih terarah, memperkuat kemampuan
          akademik, dan melatih kesiapan menghadapi ujian. Simulasi serta
          evaluasi hasil latihan membantu peserta mengetahui perkembangan
          belajar dan menentukan materi yang masih perlu ditingkatkan sebelum
          mengikuti seleksi Fakultas Kedokteran.
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
      <ListKabHalamanKedokteran />
      <FaqScLps />
      <BottomCtaLps />
    </>
  );
};

export default HalamanKotaKedokteran;
