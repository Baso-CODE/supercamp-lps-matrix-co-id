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

const HalamanKelKedokteran = () => {
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
  const canonicalUrl = `${DOMAIN}/guru-les-privat-masuk-kedokteran/${encodeURIComponent(
    slugKelurahan,
  )}`;

  // =========================================
  // IMAGE URL
  // =========================================
  const imageUrl = `${DOMAIN}/images/banner.webp`;

  // =========================================
  // SEO TITLE
  // =========================================
  const pageTitle = `Guru Privat Kedokteran ${namaKelurahan} | Persiapan Masuk FK`;

  // =========================================
  // META DESCRIPTION
  // =========================================
  const pageDescription = `Guru les privat masuk Kedokteran di ${namaKelurahan}. Persiapan FK UI, UGM, dan UNAIR melalui latihan UTBK SNBT, evaluasi akademik, dan bimbingan personal.`;

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
      name: "Guru Privat Persiapan Masuk Fakultas Kedokteran",
      description:
        "Program pendampingan belajar individual untuk membantu calon mahasiswa mempersiapkan seleksi Fakultas Kedokteran melalui penguatan kemampuan akademik, latihan soal, dan evaluasi perkembangan belajar.",
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
          content={`Program guru les privat masuk Kedokteran di ${namaKelurahan}`}
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
          Guru Les Privat Masuk Kedokteran di{" "}
          <span className="highlight-city">{namaKelurahan}</span> – Pendampingan
          Intensif Persiapan Fakultas Kedokteran
        </h1>

        <p className="desk-seo-lps">
          Setiap calon mahasiswa memiliki kemampuan akademik dan target Fakultas
          Kedokteran yang berbeda. Karena itu, proses persiapan seleksi perlu
          disesuaikan dengan kebutuhan belajar masing-masing peserta. Bagi siswa
          di {namaKelurahan}, program{" "}
          <strong>Guru Les Privat Masuk Kedokteran</strong> dari Supercamp
          Matrix Indonesia membantu calon mahasiswa membangun kesiapan akademik
          melalui pendampingan belajar individual.
          <br />
          <br />
          Pembelajaran privat memberikan kesempatan kepada siswa untuk
          memperdalam materi yang belum dikuasai dan meningkatkan kemampuan
          menyelesaikan soal secara bertahap. Untuk peserta yang menargetkan
          seleksi melalui UTBK SNBT, persiapan dapat difokuskan pada kemampuan
          penalaran, literasi, dan pengetahuan kuantitatif sesuai ketentuan
          ujian yang berlaku. Materi latihan juga perlu disesuaikan apabila
          siswa memilih jalur seleksi mandiri perguruan tinggi.
          <br />
          <br />
          Dalam proses persiapan masuk Fakultas Kedokteran, evaluasi kemampuan
          menjadi bagian penting untuk menentukan prioritas belajar. Melalui
          latihan soal, pembahasan bersama tutor, dan simulasi ujian, peserta
          dapat mengenali kesalahan yang sering muncul serta memperbaiki
          strategi pengerjaan soal. Hasil evaluasi membantu siswa di{" "}
          {namaKelurahan}
          menyusun target belajar yang lebih terarah.
          <br />
          <br />
          Bagi calon mahasiswa yang menargetkan FK UI, UGM, UNAIR, UNDIP, atau
          perguruan tinggi lainnya, pemahaman terhadap jalur penerimaan, daya
          tampung, serta persyaratan seleksi perlu menjadi bagian dari
          perencanaan akademik. Setiap perguruan tinggi dapat memiliki ketentuan
          penerimaan yang berbeda, sehingga persiapan harus mengikuti informasi
          resmi dari kampus tujuan.
          <br />
          <br />
          Melalui program <strong>Bimbel & Les Privat Kedokteran</strong>, siswa
          dapat membangun kebiasaan belajar yang konsisten, memperkuat pemahaman
          akademik, serta memantau perkembangan kemampuan secara berkala.
          Pendampingan personal membantu peserta mempersiapkan diri menghadapi
          seleksi Fakultas Kedokteran berdasarkan kemampuan dan target
          masing-masing.
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

export default HalamanKelKedokteran;
