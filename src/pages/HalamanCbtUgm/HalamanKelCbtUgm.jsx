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

const HalamanKelCbtUgm = () => {
  // =========================================
  // AMBIL SLUG KELURAHAN
  // =========================================
  const { kelSlug } = useParams();

  // =========================================
  // FORMAT NAMA KELURAHAN
  // =========================================
  const namaKelurahan = formatNamaWilayah(kelSlug);

  // =========================================
  // NORMALISASI SLUG
  // =========================================
  const slugKelurahan = String(kelSlug || "")
    .trim()
    .toLowerCase();

  // =========================================
  // CANONICAL URL
  // =========================================
  const canonicalUrl = `${DOMAIN}/guru-les-privat-cbt-ugm/${encodeURIComponent(
    slugKelurahan,
  )}`;

  // =========================================
  // IMAGE URL
  // =========================================
  const imageUrl = `${DOMAIN}/images/banner.webp`;

  // =========================================
  // SEO TITLE - KHUSUS .CO.ID
  // =========================================
  const pageTitle = `Guru Privat CBT UGM ${namaKelurahan} | Persiapan UM UGM`;

  // =========================================
  // META DESCRIPTION
  // =========================================
  const pageDescription = `Guru les privat CBT UGM di ${namaKelurahan}. Belajar lebih terarah melalui pendampingan personal, latihan soal UM UGM CBT, dan evaluasi kemampuan akademik.`;

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
      name: "Guru Les Privat Persiapan UM UGM CBT",
      description:
        "Pendampingan belajar individual untuk mempersiapkan ujian mandiri Universitas Gadjah Mada melalui latihan soal, penguatan konsep, dan evaluasi kemampuan akademik.",
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
          content={`Program guru les privat UM UGM CBT di ${namaKelurahan}`}
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
          Guru Les Privat CBT UGM di{" "}
          <span className="highlight-city">{namaKelurahan}</span> – Pendampingan
          Personal Persiapan UM UGM CBT
        </h1>

        <p className="desk-seo-lps">
          Persiapan mengikuti Ujian Mandiri Universitas Gadjah Mada memerlukan
          pemahaman materi yang kuat dan strategi belajar yang sesuai dengan
          kemampuan masing-masing peserta. Bagi siswa di {namaKelurahan},
          program <strong>Guru Les Privat CBT UGM</strong> dari Supercamp Matrix
          Indonesia membantu calon mahasiswa mempersiapkan seleksi melalui
          pembelajaran individual yang lebih terarah.
          <br />
          <br />
          Dalam pembelajaran privat, siswa dapat memusatkan perhatian pada
          materi yang belum dikuasai, memperdalam pemahaman konsep, serta
          melatih kemampuan menyelesaikan soal secara sistematis. Pendampingan
          dapat mencakup penguatan kemampuan dasar, latihan tes potensi, dan
          pembahasan materi akademik yang relevan dengan program studi tujuan
          serta ketentuan ujian yang berlaku.
          <br />
          <br />
          Selain memperkuat penguasaan materi, latihan secara berkala juga
          membantu siswa mengenali pola kesalahan dan memperbaiki strategi
          pengerjaan soal. Melalui pembahasan bersama tutor, simulasi CBT, serta
          evaluasi hasil latihan, peserta di {namaKelurahan}
          dapat menentukan prioritas belajar dan mengalokasikan waktu persiapan
          dengan lebih efektif.
          <br />
          <br />
          Untuk calon mahasiswa yang menargetkan Universitas Gadjah Mada,
          persiapan juga perlu mempertimbangkan persyaratan seleksi dan program
          studi yang dipilih. Melalui pendampingan privat, latihan terstruktur,
          serta pemantauan perkembangan kemampuan, siswa dapat membangun
          kesiapan akademik dan kepercayaan diri menghadapi UM UGM CBT.
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

export default HalamanKelCbtUgm;
